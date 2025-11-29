/**
 * Complete Page
 *
 * Shown after completing all condition questionnaires
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  alpha,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import { useSession } from '../context/SessionContext';
import { useAuth } from '../context/AuthContext';

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

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const HeaderSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0, 10),
  marginBottom: theme.spacing(-4),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '40%',
    height: '100%',
    background: `linear-gradient(45deg, transparent 0%, ${alpha(theme.palette.common.white, 0.1)} 100%)`,
    clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: theme.palette.secondary.main,
  },
}));

const HeaderContent = styled(Container)({
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.6s ease-out`,
});

const IconHeader = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: alpha(theme.palette.common.white, 0.2),
  margin: '0 auto 24px',
  backdropFilter: 'blur(10px)',
  animation: `${bounce} 2s ease-in-out infinite`,
  '& svg': {
    fontSize: 50,
    color: theme.palette.common.white,
  },
}));

const SummaryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
  background: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  animation: `${fadeInUp} 0.6s ease-out 0.3s backwards`,
}));

const NextStepsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
  background: `linear-gradient(135deg, ${alpha(theme.palette.info.main, 0.05)} 0%, ${alpha(theme.palette.info.main, 0.02)} 100%)`,
  border: `1px solid ${alpha(theme.palette.info.main, 0.1)}`,
  animation: `${fadeInUp} 0.6s ease-out 0.4s backwards`,
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  borderRadius: theme.spacing(1.5),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const CompletePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { session, selectedConditions, completeSession, updateCurrentStep } = useSession();

  // Mark session as complete on mount
  useEffect(() => {
    updateCurrentStep('complete');
    completeSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const completedConditions = selectedConditions.filter((c) => c.has_condition && c.completed);

  return (
    <Box>
      <HeaderSection>
        <HeaderContent maxWidth="lg">
          <IconHeader>
            <CelebrationIcon />
          </IconHeader>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Intake Complete!
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Thank you for completing your VA Disability Intake. Your information has been saved.
          </Typography>
        </HeaderContent>
      </HeaderSection>

      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <SummaryCard elevation={0}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Summary
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Session ID
            </Typography>
            <Typography variant="body1" fontFamily="monospace">
              {session?.id}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">
              {user?.email}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Conditions Documented
            </Typography>
            <Typography variant="h4" color="secondary.main" fontWeight={700}>
              {completedConditions.length}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Completed At
            </Typography>
            <Typography variant="body1">
              {new Date().toLocaleString()}
            </Typography>
          </Box>
        </SummaryCard>

        <NextStepsCard elevation={0}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            What Happens Next?
          </Typography>
          <Divider sx={{ my: 2 }} />

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="Your intake has been saved"
                secondary="All your responses are securely stored in our system."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DescriptionIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Document generation"
                secondary="Our team will use your information to draft your Nexus Letter and Personal Statement."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EditIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Review and revisions"
                secondary="You'll have the opportunity to review and request changes to your documents."
              />
            </ListItem>
          </List>
        </NextStepsCard>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
          <ActionButton
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => navigate('/intake/conditions')}
          >
            Review Answers
          </ActionButton>
          <ActionButton
            variant="contained"
            color="secondary"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
              '&:hover': {
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
              },
            }}
          >
            Return Home
          </ActionButton>
        </Box>
      </Container>
    </Box>
  );
};

export default CompletePage;
