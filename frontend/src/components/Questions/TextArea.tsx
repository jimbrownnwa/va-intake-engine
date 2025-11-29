/**
 * TextArea Question Component
 *
 * Multi-line text input for longer answers
 */

import { TextField, FormHelperText, Box, Typography } from '@mui/material';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  rows?: number;
}

const TextArea = ({
  value,
  onChange,
  placeholder,
  helpText,
  required = false,
  disabled = false,
  minLength,
  maxLength = 2000,
  rows = 4,
}: TextAreaProps) => {
  const charCount = value?.length || 0;
  const showCharCount = maxLength && charCount > 0;

  return (
    <Box>
      <TextField
        fullWidth
        multiline
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        variant="outlined"
        inputProps={{ maxLength }}
        error={minLength ? charCount > 0 && charCount < minLength : false}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <FormHelperText error={minLength ? charCount > 0 && charCount < minLength : false}>
          {helpText}
          {minLength && charCount > 0 && charCount < minLength && (
            <> (minimum {minLength} characters)</>
          )}
        </FormHelperText>
        {showCharCount && (
          <Typography variant="caption" color="text.secondary">
            {charCount}/{maxLength}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TextArea;
