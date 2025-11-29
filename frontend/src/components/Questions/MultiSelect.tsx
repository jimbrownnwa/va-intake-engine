/**
 * MultiSelect Question Component
 *
 * Checkbox group for multiple-choice questions
 */

import {
  FormControl,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Checkbox,
  alpha,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface MultiSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  marginRight: 0,
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.spacing(1),
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  width: '100%',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    borderColor: theme.palette.primary.light,
  },
  '&:has(.Mui-checked)': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.08),
    borderColor: theme.palette.secondary.main,
  },
}));

const MultiSelect = ({
  value = [],
  onChange,
  options,
  helpText,
  required = false,
  disabled = false,
}: MultiSelectProps) => {
  const handleChange = (option: string, checked: boolean) => {
    if (checked) {
      // If selecting "None" type option, clear others
      if (option.toLowerCase().includes('none') || option.toLowerCase().includes('no impact')) {
        onChange([option]);
      } else {
        // Remove any "None" type option when selecting others
        const filtered = value.filter(
          (v) => !v.toLowerCase().includes('none') && !v.toLowerCase().includes('no impact')
        );
        onChange([...filtered, option]);
      }
    } else {
      onChange(value.filter((v) => v !== option));
    }
  };

  return (
    <FormControl component="fieldset" fullWidth required={required} disabled={disabled}>
      <FormGroup>
        {options.map((option) => (
          <StyledFormControlLabel
            key={option}
            control={
              <Checkbox
                checked={value.includes(option)}
                onChange={(e) => handleChange(option, e.target.checked)}
                sx={{
                  color: 'primary.main',
                  '&.Mui-checked': {
                    color: 'secondary.main',
                  },
                }}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
      {helpText && (
        <FormHelperText sx={{ mt: 1 }}>{helpText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default MultiSelect;
