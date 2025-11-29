/**
 * Condition Builder Page
 *
 * Module 3: Detailed questions for each selected condition
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  StepButton,
  Alert,
  Chip,
  CircularProgress,
  alpha,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useSession } from '../context/SessionContext';
import { fetchQuestionTemplates } from '../lib/api/questions';
import { getConditionBuilderFlow, getVisibleQuestions } from '../lib/utils/questionFlow';
import { QuestionRenderer } from '../components/Questions';
import type { QuestionTemplate } from '../components/Questions/QuestionRenderer';
import type { Condition, ConditionInstance } from '../types/session';
import { supabase } from '../lib/supabase';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const HeaderSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0, 8),
  marginBottom: theme.spacing(-4),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '40%',
    height: '100%',
    background: `linear-gradient(45deg, transparent 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
    clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: theme.palette.secondary.main,
  },
}));

const HeaderContent = styled(Container)({
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.6s ease-out`,
});

const IconHeader = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: alpha(theme.palette.common.white, 0.15),
  margin: '0 auto 16px',
  backdropFilter: 'blur(10px)',
  '& svg': {
    fontSize: 40,
    color: theme.palette.primary.contrastText,
  },
}));

const ProgressCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, ${alpha(theme.palette.info.main, 0.05)} 0%, ${alpha(theme.palette.info.main, 0.02)} 100%)`,
  border: `1px solid ${alpha(theme.palette.info.main, 0.1)}`,
  marginBottom: theme.spacing(3),
  animation: `${fadeInUp} 0.6s ease-out 0.3s backwards`,
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  background: alpha(theme.palette.primary.main, 0.1),
  '& .MuiLinearProgress-bar': {
    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: 5,
  },
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiStepLabel-label': {
    fontSize: '0.85rem',
  },
  '& .MuiStepLabel-label.Mui-active': {
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: theme.palette.success.main,
  },
}));

const ConditionChip = styled(Chip)(({ theme }) => ({
  fontSize: '0.9rem',
  height: 32,
  fontWeight: 600,
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  borderRadius: theme.spacing(1.5),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const ConditionBuilderPage = () => {
  const navigate = useNavigate();
  const {
    session,
    loading: sessionLoading,
    selectedConditions,
    saveAnswer,
    getAnswer,
    updateConditionInstance,
    updateCurrentStep,
  } = useSession();

  const [conditions, setConditions] = useState<Condition[]>([]);
  const [questionTemplates, setQuestionTemplates] = useState<QuestionTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentConditionIndex, setCurrentConditionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<any>(undefined);

  // Get only conditions that have been selected (has_condition = true)
  const activeConditions = useMemo(() => {
    return selectedConditions.filter((c) => c.has_condition);
  }, [selectedConditions]);

  // Get current condition instance
  const currentInstance = activeConditions[currentConditionIndex];

  // Get current condition details
  const currentCondition = useMemo(() => {
    if (!currentInstance) return null;
    return conditions.find((c) => c.id === currentInstance.condition_id);
  }, [currentInstance, conditions]);

  // Build question templates map for easy lookup
  const questionTemplatesMap = useMemo(() => {
    return new Map(questionTemplates.map((q) => [q.question_key, q]));
  }, [questionTemplates]);

  // Get answers for current condition
  const getConditionAnswers = useCallback((): Record<string, any> => {
    if (!currentInstance) return {};
    const answers: Record<string, any> = {};
    questionTemplates.forEach((q) => {
      const answer = getAnswer(q.question_key, currentInstance.id);
      if (answer !== undefined) {
        answers[q.question_key] = answer;
      }
    });
    return answers;
  }, [currentInstance, questionTemplates, getAnswer]);

  // Get visible questions based on current answers
  const visibleQuestions = useMemo(() => {
    const flow = getConditionBuilderFlow();
    const answers = getConditionAnswers();
    const visibleKeys = getVisibleQuestions(flow, answers);
    return visibleKeys
      .map((key) => questionTemplatesMap.get(key))
      .filter((q): q is QuestionTemplate => q !== undefined);
  }, [getConditionAnswers, questionTemplatesMap]);

  // Current question
  const currentQuestion = visibleQuestions[currentQuestionIndex];

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch conditions
        const { data: conditionsData, error: conditionsError } = await supabase
          .from('conditions')
          .select('*')
          .eq('is_active', true);

        if (conditionsError) throw conditionsError;
        setConditions(conditionsData || []);

        // Fetch question templates
        const templates = await fetchQuestionTemplates();
        setQuestionTemplates(templates);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Update current step
  useEffect(() => {
    if (currentCondition) {
      updateCurrentStep(`condition_${currentCondition.name.toLowerCase().replace(/\s+/g, '_')}_q${currentQuestionIndex + 1}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCondition?.id, currentQuestionIndex]);

  // Initialize currentAnswer when question or condition changes
  useEffect(() => {
    if (currentQuestion && currentInstance) {
      const savedAnswer = getAnswer(currentQuestion.question_key, currentInstance.id);
      setCurrentAnswer(savedAnswer);
    }
  }, [currentQuestion?.question_key, currentInstance?.id, getAnswer]);

  // Handle answer change - just update local state, no saving
  const handleAnswerChange = (value: any) => {
    setCurrentAnswer(value);
  };

  // Navigate to next question
  const handleNext = async () => {
    if (!currentInstance || !currentQuestion) return;

    // Save the current answer before advancing
    setSaving(true);
    try {
      if (currentAnswer !== undefined && currentAnswer !== null && currentAnswer !== '') {
        await saveAnswer(currentQuestion.question_key, currentAnswer, currentInstance.id);
      }

      if (currentQuestionIndex < visibleQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (currentConditionIndex < activeConditions.length - 1) {
        // Mark current condition as completed and move to next
        await updateConditionInstance(currentInstance.id, { completed: true });
        setCurrentConditionIndex((prev) => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        // All conditions completed
        await updateConditionInstance(currentInstance.id, { completed: true });
        navigate('/intake/complete');
      }
    } catch (err) {
      console.error('Error saving answer:', err);
    } finally {
      setSaving(false);
    }
  };

  // Navigate to previous question
  const handlePrevious = async () => {
    if (!currentInstance || !currentQuestion) return;

    // Save the current answer before going back
    setSaving(true);
    try {
      if (currentAnswer !== undefined && currentAnswer !== null && currentAnswer !== '') {
        await saveAnswer(currentQuestion.question_key, currentAnswer, currentInstance.id);
      }

      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
      } else if (currentConditionIndex > 0) {
        setCurrentConditionIndex((prev) => prev - 1);
        // Set to last question of previous condition
        // This will be updated once the new condition loads
      }
    } catch (err) {
      console.error('Error saving answer:', err);
    } finally {
      setSaving(false);
    }
  };

  // Handle condition step click
  const handleConditionClick = async (index: number) => {
    // Save current answer before switching conditions
    if (currentInstance && currentQuestion && currentAnswer !== undefined && currentAnswer !== null && currentAnswer !== '') {
      try {
        await saveAnswer(currentQuestion.question_key, currentAnswer, currentInstance.id);
      } catch (err) {
        console.error('Error saving answer:', err);
      }
    }
    setCurrentConditionIndex(index);
    setCurrentQuestionIndex(0);
  };

  // Calculate progress
  const totalQuestions = activeConditions.length * visibleQuestions.length;
  const answeredQuestions =
    currentConditionIndex * visibleQuestions.length + currentQuestionIndex;
  const progressPercentage =
    totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;

  // Check if current question is the last
  const isLastQuestion =
    currentQuestionIndex === visibleQuestions.length - 1 &&
    currentConditionIndex === activeConditions.length - 1;

  if (loading || sessionLoading) {
    return (
      <Box>
        <HeaderSection>
          <HeaderContent maxWidth="lg">
            <IconHeader>
              <AssignmentIcon />
            </IconHeader>
            <Typography variant="h3" align="center" fontWeight={700}>
              Loading Questions...
            </Typography>
          </HeaderContent>
        </HeaderSection>
        <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
          <StyledLinearProgress />
        </Container>
      </Box>
    );
  }

  if (activeConditions.length === 0) {
    return (
      <Box>
        <HeaderSection>
          <HeaderContent maxWidth="lg">
            <IconHeader>
              <AssignmentIcon />
            </IconHeader>
            <Typography variant="h3" align="center" fontWeight={700}>
              No Conditions Selected
            </Typography>
          </HeaderContent>
        </HeaderSection>
        <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
          <Alert severity="warning" sx={{ mb: 3, borderRadius: 2 }}>
            You haven't selected any conditions. Please go back and select at least one condition.
          </Alert>
          <ActionButton
            variant="contained"
            color="primary"
            onClick={() => navigate('/intake/conditions')}
          >
            Back to Condition Screening
          </ActionButton>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <HeaderSection>
        <HeaderContent maxWidth="lg">
          <IconHeader>
            <AssignmentIcon />
          </IconHeader>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Condition Details
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
            Module 3: Tell Us About Your Conditions
          </Typography>
        </HeaderContent>
      </HeaderSection>

      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <ProgressCard elevation={0}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box>
              <Typography variant="h6" fontWeight={700}>
                Progress
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Question {currentQuestionIndex + 1} of {visibleQuestions.length}
              </Typography>
            </Box>
            <Typography variant="h4" fontWeight={700} color="secondary.main">
              {progressPercentage}%
            </Typography>
          </Box>
          <StyledLinearProgress variant="determinate" value={progressPercentage} />
        </ProgressCard>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {/* Condition Stepper */}
        {activeConditions.length > 1 && (
          <StyledStepper activeStep={currentConditionIndex} alternativeLabel>
            {activeConditions.map((instance, index) => {
              const condition = conditions.find((c) => c.id === instance.condition_id);
              return (
                <Step key={instance.id} completed={instance.completed}>
                  <StepButton onClick={() => handleConditionClick(index)}>
                    <StepLabel
                      StepIconComponent={instance.completed ? () => <CheckCircleIcon color="success" /> : undefined}
                    >
                      {condition?.name || 'Unknown'}
                    </StepLabel>
                  </StepButton>
                </Step>
              );
            })}
          </StyledStepper>
        )}

        {/* Current Condition Badge */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ConditionChip
            label={currentCondition?.name || 'Unknown Condition'}
            color="secondary"
            icon={<AssignmentIcon />}
          />
        </Box>

        {/* Question Renderer */}
        {currentQuestion && (
          <QuestionRenderer
            question={currentQuestion}
            value={currentAnswer}
            onChange={handleAnswerChange}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={visibleQuestions.length}
            disabled={saving}
          />
        )}

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between', mt: 4 }}>
          <ActionButton
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 && currentConditionIndex === 0}
          >
            Previous
          </ActionButton>
          <ActionButton
            variant="contained"
            color="secondary"
            endIcon={saving ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
            onClick={handleNext}
            disabled={saving}
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
              '&:hover': {
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
              },
            }}
          >
            {isLastQuestion ? 'Complete' : 'Next'}
          </ActionButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ConditionBuilderPage;
