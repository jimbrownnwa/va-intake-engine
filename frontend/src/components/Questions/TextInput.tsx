/**
 * TextInput Question Component
 *
 * Single-line text input for short answers
 */

import { TextField, FormHelperText, Box } from '@mui/material';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  helpText,
  required = false,
  disabled = false,
}: TextInputProps) => {
  return (
    <Box>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        variant="outlined"
        size="medium"
      />
      {helpText && (
        <FormHelperText sx={{ mt: 1 }}>{helpText}</FormHelperText>
      )}
    </Box>
  );
};

export default TextInput;
