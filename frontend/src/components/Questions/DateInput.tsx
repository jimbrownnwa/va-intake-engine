/**
 * DateInput Question Component
 *
 * Month/Year date picker for timeline questions
 */

import { FormHelperText, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface DateInputProps {
  value: string | null;
  onChange: (value: string | null) => void;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

const DateInput = ({
  value,
  onChange,
  helpText,
  required = false,
  disabled = false,
}: DateInputProps) => {
  const handleChange = (date: Dayjs | null) => {
    if (date && date.isValid()) {
      onChange(date.toISOString());
    } else {
      onChange(null);
    }
  };

  const dateValue = value ? dayjs(value) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          value={dateValue}
          onChange={handleChange}
          views={['year', 'month']}
          openTo="year"
          disabled={disabled}
          slotProps={{
            textField: {
              fullWidth: true,
              required,
              placeholder: 'Select month and year',
            },
          }}
          maxDate={dayjs()}
        />
        {helpText && (
          <FormHelperText sx={{ mt: 1 }}>{helpText}</FormHelperText>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default DateInput;
