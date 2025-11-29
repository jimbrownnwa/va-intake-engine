/**
 * Condition Card Component
 *
 * Displays a single condition with selection options
 */

import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  Collapse,
  Box,
  alpha,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import type { Condition, ConditionInstance } from '../../types/session';
import { getCategoryLabel } from '../../lib/api/conditions';

interface ConditionCardProps {
  condition: Condition;
  instance?: ConditionInstance;
  onToggle: (conditionId: string, hasCondition: boolean) => void;
  onDescriptionChange: (conditionId: string, description: string) => void;
  onRatingChange: (conditionId: string, hasRating: boolean) => void;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  border: `2px solid ${selected ? theme.palette.secondary.main : alpha(theme.palette.divider, 0.1)}`,
  background: selected
    ? `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`
    : theme.palette.background.paper,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    borderColor: selected ? theme.palette.secondary.main : theme.palette.primary.light,
    boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
    transform: 'translateY(-2px)',
  },
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  fontSize: '0.7rem',
  height: 24,
  background: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

const ConditionCard = ({
  condition,
  instance,
  onToggle,
  onDescriptionChange,
  onRatingChange,
}: ConditionCardProps) => {
  const [localDescription, setLocalDescription] = useState(instance?.personal_description || '');
  const isSelected = instance?.has_condition ?? false;

  const handleCardClick = () => {
    onToggle(condition.id, !isSelected);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    if (localDescription !== instance?.personal_description) {
      onDescriptionChange(condition.id, localDescription);
    }
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onRatingChange(condition.id, e.target.checked);
  };

  return (
    <StyledCard selected={isSelected} onClick={handleCardClick}>
      <CardContent sx={{ p: 3 }}>
        <HeaderBox>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h6" fontWeight={600}>
                {condition.name}
              </Typography>
              {condition.category && (
                <CategoryChip label={getCategoryLabel(condition.category)} size="small" />
              )}
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: isSelected ? 'unset' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: isSelected ? 'visible' : 'hidden',
              }}
            >
              {condition.description}
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected}
                onChange={(e) => {
                  e.stopPropagation();
                  onToggle(condition.id, e.target.checked);
                }}
                onClick={handleCheckboxClick}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                sx={{
                  color: 'primary.main',
                  '&.Mui-checked': {
                    color: 'secondary.main',
                  },
                }}
              />
            }
            label=""
            sx={{ m: 0 }}
          />
        </HeaderBox>

        <Collapse in={isSelected}>
          <Box
            sx={{ mt: 3, pt: 3, borderTop: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Describe your experience with this condition"
              placeholder="Tell us in your own words how this condition affects you..."
              value={localDescription}
              onChange={handleDescriptionChange}
              onBlur={handleDescriptionBlur}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={instance?.has_existing_rating ?? false}
                  onChange={handleRatingChange}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  I already have a VA rating for this condition
                </Typography>
              }
            />
          </Box>
        </Collapse>
      </CardContent>
    </StyledCard>
  );
};

export default ConditionCard;
