/**
 * Condition Screening Page
 *
 * Module 2: Allows veterans to select which conditions apply to them
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Alert,
  alpha,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSession } from '../context/SessionContext';
import { useAuth } from '../context/AuthContext';
import { fetchConditionsByCategory, getCategoryLabel, CATEGORY_LABELS } from '../lib/api/conditions';
import ConditionCard from '../components/Conditions/ConditionCard';
import type { Condition, ConditionInstance } from '../types/session';

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

const SearchBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
  background: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: `${theme.spacing(2)} !important`,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: `0 0 ${theme.spacing(2)} 0`,
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  fontSize: '0.75rem',
  height: 24,
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  borderRadius: theme.spacing(1.5),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const ConditionScreeningPage = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const {
    session,
    loading: sessionLoading,
    selectedConditions,
    addCondition,
    updateConditionInstance,
    updateCurrentStep,
  } = useSession();

  const [conditions, setConditions] = useState<Record<string, Condition[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Fetch conditions on mount
  useEffect(() => {
    const loadConditions = async () => {
      try {
        const conditionsByCategory = await fetchConditionsByCategory();
        setConditions(conditionsByCategory);
        // Expand first category by default
        const categories = Object.keys(conditionsByCategory);
        if (categories.length > 0) {
          setExpandedCategories([categories[0]]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load conditions');
      } finally {
        setLoading(false);
      }
    };

    loadConditions();
  }, []);

  // Update current step (separate effect to avoid re-running on every render)
  useEffect(() => {
    updateCurrentStep('condition_screening');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get instance for a condition
  const getInstanceForCondition = (conditionId: string): ConditionInstance | undefined => {
    return selectedConditions.find((inst) => inst.condition_id === conditionId);
  };

  // Handle condition toggle
  const handleConditionToggle = async (conditionId: string, hasCondition: boolean) => {
    await addCondition(conditionId, hasCondition);
  };

  // Handle description change
  const handleDescriptionChange = async (conditionId: string, description: string) => {
    const instance = getInstanceForCondition(conditionId);
    if (instance) {
      await updateConditionInstance(instance.id, { personal_description: description });
    }
  };

  // Handle rating change
  const handleRatingChange = async (conditionId: string, hasRating: boolean) => {
    const instance = getInstanceForCondition(conditionId);
    if (instance) {
      await updateConditionInstance(instance.id, { has_existing_rating: hasRating });
    }
  };

  // Handle accordion expand
  const handleAccordionChange = (category: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedCategories((prev) =>
      isExpanded ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  // Filter conditions by search query
  const filterConditions = (conditionsList: Condition[]): Condition[] => {
    if (!searchQuery.trim()) return conditionsList;
    const query = searchQuery.toLowerCase();
    return conditionsList.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.description?.toLowerCase().includes(query)
    );
  };

  // Get selected condition count
  const selectedCount = selectedConditions.filter((c) => c.has_condition).length;

  // Get count for a category
  const getSelectedCountForCategory = (conditionsList: Condition[]): number => {
    return conditionsList.filter((c) => getInstanceForCondition(c.id)?.has_condition).length;
  };

  // Handle continue to condition builder
  const handleContinue = () => {
    if (selectedCount === 0) {
      alert('Please select at least one condition to continue.');
      return;
    }
    // Navigate to condition builder (will be implemented in Sprint 4)
    navigate('/intake/conditions/builder');
  };

  // Handle save and exit - conditions are auto-saved, just sign out
  const handleSaveAndExit = async () => {
    await signOut();
    navigate('/');
  };

  if (loading || sessionLoading) {
    return (
      <Box>
        <HeaderSection>
          <HeaderContent maxWidth="lg">
            <IconHeader>
              <MedicalServicesIcon />
            </IconHeader>
            <Typography variant="h3" align="center" fontWeight={700}>
              Loading Conditions...
            </Typography>
          </HeaderContent>
        </HeaderSection>
        <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
          <StyledLinearProgress />
        </Container>
      </Box>
    );
  }

  const categoryOrder = Object.keys(CATEGORY_LABELS);
  const sortedCategories = Object.keys(conditions).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <Box>
      <HeaderSection>
        <HeaderContent maxWidth="lg">
          <IconHeader>
            <MedicalServicesIcon />
          </IconHeader>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Condition Screening
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
            Module 2: Select Your Service-Connected Conditions
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
                {selectedCount} condition{selectedCount !== 1 ? 's' : ''} selected
              </Typography>
            </Box>
            <Typography variant="h4" fontWeight={700} color="secondary.main">
              {session?.progress_percentage || 0}%
            </Typography>
          </Box>
          <StyledLinearProgress variant="determinate" value={session?.progress_percentage || 0} />
        </ProgressCard>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        <SearchBox elevation={0}>
          <TextField
            fullWidth
            placeholder="Search conditions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </SearchBox>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Select all conditions that you believe are related to your military service. You'll provide
          more details about each selected condition in the next step.
        </Typography>

        {sortedCategories.map((category) => {
          const categoryConditions = filterConditions(conditions[category]);
          if (categoryConditions.length === 0) return null;

          const selectedInCategory = getSelectedCountForCategory(categoryConditions);

          return (
            <StyledAccordion
              key={category}
              expanded={expandedCategories.includes(category)}
              onChange={handleAccordionChange(category)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" fontWeight={600}>
                    {getCategoryLabel(category)}
                  </Typography>
                  <CategoryChip
                    label={`${categoryConditions.length}`}
                    size="small"
                    color="default"
                  />
                  {selectedInCategory > 0 && (
                    <CategoryChip
                      label={`${selectedInCategory} selected`}
                      size="small"
                      color="secondary"
                    />
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {categoryConditions.map((condition) => (
                  <ConditionCard
                    key={condition.id}
                    condition={condition}
                    instance={getInstanceForCondition(condition.id)}
                    onToggle={handleConditionToggle}
                    onDescriptionChange={handleDescriptionChange}
                    onRatingChange={handleRatingChange}
                  />
                ))}
              </AccordionDetails>
            </StyledAccordion>
          );
        })}

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between', mt: 4 }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <ActionButton
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/intake/profile')}
            >
              Back to Profile
            </ActionButton>
            <ActionButton
              variant="outlined"
              color="error"
              startIcon={<ExitToAppIcon />}
              onClick={handleSaveAndExit}
            >
              Save & Exit
            </ActionButton>
          </Box>
          <ActionButton
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            onClick={handleContinue}
            disabled={selectedCount === 0}
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
              '&:hover': {
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
              },
              '&:disabled': {
                background: (theme) => theme.palette.action.disabledBackground,
              },
            }}
          >
            Continue ({selectedCount} selected)
          </ActionButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ConditionScreeningPage;
