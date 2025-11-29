/**
 * QuestionRenderer Component
 *
 * Dynamically renders the appropriate question component based on question type
 */

import { Box, Typography, Paper, alpha, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import DateInput from './DateInput';
import ScaleSlider from './ScaleSlider';

export interface QuestionTemplate {
  id: string;
  question_key: string;
  question_text: string;
  question_type: 'text' | 'textarea' | 'single_select' | 'multi_select' | 'date' | 'scale';
  options: string[] | { min: number; max: number } | null;
  validation_rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
  } | null;
  help_text: string | null;
  placeholder: string | null;
  category: string | null;
}

interface QuestionRendererProps {
  question: QuestionTemplate;
  value: any;
  onChange: (value: any) => void;
  questionNumber?: number;
  totalQuestions?: number;
  disabled?: boolean;
}

const QuestionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
  background: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  fontSize: '0.7rem',
  height: 24,
  textTransform: 'capitalize',
  background: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

const getCategoryColor = (category: string | null): string => {
  const colors: Record<string, string> = {
    timeline: '#2196f3',
    symptom: '#ff9800',
    treatment: '#4caf50',
    functional_impact: '#9c27b0',
    nexus: '#f44336',
    additional: '#607d8b',
  };
  return colors[category || 'additional'] || colors.additional;
};

const QuestionRenderer = ({
  question,
  value,
  onChange,
  questionNumber,
  totalQuestions,
  disabled = false,
}: QuestionRendererProps) => {
  const validationRules = question.validation_rules || {};
  const required = validationRules.required ?? false;

  const renderQuestionInput = () => {
    switch (question.question_type) {
      case 'text':
        return (
          <TextInput
            value={value || ''}
            onChange={onChange}
            placeholder={question.placeholder || undefined}
            helpText={question.help_text || undefined}
            required={required}
            disabled={disabled}
          />
        );

      case 'textarea':
        return (
          <TextArea
            value={value || ''}
            onChange={onChange}
            placeholder={question.placeholder || undefined}
            helpText={question.help_text || undefined}
            required={required}
            disabled={disabled}
            minLength={validationRules.minLength}
            maxLength={validationRules.maxLength || 2000}
          />
        );

      case 'single_select':
        const singleOptions = Array.isArray(question.options)
          ? question.options
          : [];
        return (
          <SingleSelect
            value={value || ''}
            onChange={onChange}
            options={singleOptions}
            helpText={question.help_text || undefined}
            required={required}
            disabled={disabled}
          />
        );

      case 'multi_select':
        const multiOptions = Array.isArray(question.options)
          ? question.options
          : [];
        return (
          <MultiSelect
            value={value || []}
            onChange={onChange}
            options={multiOptions}
            helpText={question.help_text || undefined}
            required={required}
            disabled={disabled}
          />
        );

      case 'date':
        return (
          <DateInput
            value={value || null}
            onChange={onChange}
            helpText={question.help_text || undefined}
            required={required}
            disabled={disabled}
          />
        );

      case 'scale':
        const scaleOptions = question.options as { min: number; max: number } | null;
        return (
          <ScaleSlider
            value={value ?? 5}
            onChange={onChange}
            min={scaleOptions?.min ?? 1}
            max={scaleOptions?.max ?? 10}
            helpText={question.help_text || undefined}
            required={required}
            disabled={disabled}
          />
        );

      default:
        return (
          <Typography color="error">
            Unknown question type: {question.question_type}
          </Typography>
        );
    }
  };

  return (
    <QuestionCard elevation={0}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {questionNumber && totalQuestions && (
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              {questionNumber} of {totalQuestions}
            </Typography>
          )}
          {question.category && (
            <CategoryChip
              label={question.category.replace('_', ' ')}
              size="small"
              sx={{
                background: alpha(getCategoryColor(question.category), 0.1),
                color: getCategoryColor(question.category),
              }}
            />
          )}
        </Box>
        {required && (
          <Typography
            variant="caption"
            sx={{
              color: 'error.main',
              fontWeight: 600,
            }}
          >
            Required
          </Typography>
        )}
      </Box>

      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        sx={{ mb: 3, lineHeight: 1.4 }}
      >
        {question.question_text}
      </Typography>

      {renderQuestionInput()}
    </QuestionCard>
  );
};

export default QuestionRenderer;
