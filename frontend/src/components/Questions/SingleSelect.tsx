/**
 * SingleSelect Question Component
 *
 * Radio button group for single-choice questions
 */

import {
  FormControl,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  alpha,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface SingleSelectProps {
  value: string;
  onChange: (value: string) => void;
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

const SingleSelect = ({
  value,
  onChange,
  options,
  helpText,
  required = false,
  disabled = false,
}: SingleSelectProps) => {
  return (
    <FormControl component="fieldset" fullWidth required={required} disabled={disabled}>
      <RadioGroup value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <StyledFormControlLabel
            key={option}
            value={option}
            control={
              <Radio
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
      </RadioGroup>
      {helpText && (
        <FormHelperText sx={{ mt: 1 }}>{helpText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SingleSelect;
