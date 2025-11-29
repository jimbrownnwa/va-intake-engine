/**
 * ScaleSlider Question Component
 *
 * 1-10 severity scale slider
 */

import { Box, Slider, Typography, FormHelperText, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ScaleSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 8,
  '& .MuiSlider-track': {
    background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.warning.main}, ${theme.palette.error.main})`,
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.secondary.main}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: `0 0 0 8px ${alpha(theme.palette.secondary.main, 0.16)}`,
    },
  },
  '& .MuiSlider-valueLabel': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1),
  },
  '& .MuiSlider-mark': {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    height: 12,
    width: 2,
  },
  '& .MuiSlider-markLabel': {
    color: theme.palette.text.secondary,
    fontSize: '0.75rem',
  },
}));

const ScaleSlider = ({
  value,
  onChange,
  min = 1,
  max = 10,
  helpText,
  required = false,
  disabled = false,
}: ScaleSliderProps) => {
  const marks = Array.from({ length: max - min + 1 }, (_, i) => ({
    value: min + i,
    label: `${min + i}`,
  }));

  const getSeverityLabel = (val: number): string => {
    if (val <= 3) return 'Mild';
    if (val <= 5) return 'Moderate';
    if (val <= 7) return 'Significant';
    return 'Severe';
  };

  const getSeverityColor = (val: number): string => {
    if (val <= 3) return 'success.main';
    if (val <= 5) return 'warning.main';
    if (val <= 7) return 'warning.dark';
    return 'error.main';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Minimal Impact
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color={getSeverityColor(value)}>
            {value}
          </Typography>
          <Typography variant="caption" color={getSeverityColor(value)}>
            {getSeverityLabel(value)}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Completely Debilitating
        </Typography>
      </Box>
      <Box sx={{ px: 1 }}>
        <StyledSlider
          value={value}
          onChange={(_, newValue) => onChange(newValue as number)}
          min={min}
          max={max}
          step={1}
          marks={marks}
          valueLabelDisplay="auto"
          disabled={disabled}
        />
      </Box>
      {helpText && (
        <FormHelperText sx={{ mt: 2, textAlign: 'center' }}>{helpText}</FormHelperText>
      )}
    </Box>
  );
};

export default ScaleSlider;
