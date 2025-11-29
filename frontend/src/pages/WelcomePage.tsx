/**
 * Welcome Page - Redesigned
 *
 * Government Modernism aesthetic for VA Disability Intake
 * Professional, trustworthy, and honors military service
 */

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  Grid,
  alpha,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import ShieldIcon from '@mui/icons-material/Shield'

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
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(12, 0, 10),
  marginBottom: theme.spacing(8),
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
    bottom: -2,
    left: 0,
    right: 0,
    height: '4px',
    background: theme.palette.secondary.main,
  },
}))

const HeroContent = styled(Container)({
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.8s ease-out`,
})

const Subtitle = styled(Typography)(({ theme }) => ({
  opacity: 0.95,
  maxWidth: '680px',
  margin: '0 auto',
  fontWeight: 400,
  animation: `${fadeInUp} 0.8s ease-out 0.2s backwards`,
}))

const FeatureCard = styled(Card)<{ delay?: number }>(({ theme, delay = 0 }) => ({
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.08)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${fadeInUp} 0.6s ease-out ${delay}s backwards`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
    borderColor: alpha(theme.palette.primary.main, 0.2),
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.info.main, 0.1)} 100%)`,
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 32,
    color: theme.palette.primary.main,
  },
}))

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5, 3),
  background: alpha(theme.palette.info.main, 0.04),
  border: `1px solid ${alpha(theme.palette.info.main, 0.1)}`,
  borderRadius: theme.spacing(1.5),
  animation: `${fadeIn} 0.6s ease-out 0.6s backwards`,
}))

const CTAButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 5),
  fontSize: '1.125rem',
  fontWeight: 700,
  borderRadius: theme.spacing(1.5),
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.35)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${fadeInUp} 0.8s ease-out 0.4s backwards`,
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
    boxShadow: `0 12px 32px ${alpha(theme.palette.secondary.main, 0.45)}`,
    transform: 'translateY(-2px)',
  },
}))

const WelcomePage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleGetStarted = () => {
    if (user) {
      navigate('/intake/profile')
    } else {
      navigate('/login')
    }
  }

  const features = [
    {
      icon: <CheckCircleOutlineIcon />,
      title: 'Service History',
      description: 'Comprehensive documentation of your military service, duty stations, and MOS history',
    },
    {
      icon: <ShieldIcon />,
      title: 'Medical Conditions',
      description: 'Detailed assessment of service-connected conditions with symptom tracking and treatment history',
    },
    {
      icon: <CloudDoneIcon />,
      title: 'Auto-Saved Progress',
      description: 'Your information is automatically saved. Resume anytime from where you left off',
    },
  ]

  return (
    <>
      <HeroSection>
        <HeroContent maxWidth="lg">
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            VA Disability Claim Intake
          </Typography>
          <Subtitle variant="h5" align="center" paragraph>
            A comprehensive intake system designed to build your personalized claim documents
            with precision and care
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard delay={0.2 + index * 0.1}>
                <IconWrapper>{feature.icon}</IconWrapper>
                <Typography variant="h5" gutterBottom fontWeight={700}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
            What to Expect
          </Typography>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6}>
              <StatsBox>
                <ScheduleIcon sx={{ fontSize: 40, color: 'info.main' }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h6" fontWeight={700}>
                    60-120 Minutes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Estimated completion time
                  </Typography>
                </Box>
              </StatsBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StatsBox>
                <CloudDoneIcon sx={{ fontSize: 40, color: 'success.main' }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h6" fontWeight={700}>
                    Auto-Saved
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Progress saved automatically
                  </Typography>
                </Box>
              </StatsBox>
            </Grid>
          </Grid>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            This intake collects detailed information about your military service and medical
            conditions. You can complete it in multiple sessions—your progress is automatically
            saved, and you can return anytime to continue where you left off.
          </Typography>

          <CTAButton
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            disableElevation
          >
            {user ? 'Continue My Claim' : 'Start Your Claim'}
          </CTAButton>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 3, fontStyle: 'italic' }}
          >
            Secure, confidential, and designed specifically for veterans
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default WelcomePage
