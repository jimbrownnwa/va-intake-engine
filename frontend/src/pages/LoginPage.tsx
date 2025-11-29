/**
 * Login/Signup Page - Redesigned
 *
 * Government Modernism aesthetic matching the Welcome page
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Alert,
  CircularProgress,
  alpha,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

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

// Styled Components
const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  padding: theme.spacing(4, 2),
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
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
}))

const LoginCard = styled(Paper)(({ theme }) => ({
  maxWidth: 520,
  width: '100%',
  padding: theme.spacing(5),
  borderRadius: theme.spacing(2),
  boxShadow: `0 20px 60px ${alpha('#000', 0.3)}`,
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.6s ease-out`,
}))

const IconHeader = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  margin: '0 auto 24px',
  '& svg': {
    fontSize: 36,
    color: theme.palette.primary.contrastText,
  },
}))

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiTabs-indicator': {
    height: 3,
    borderRadius: 3,
    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  },
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.5),
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderWidth: 2,
    },
  },
}))

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.75, 4),
  fontSize: '1rem',
  fontWeight: 700,
  borderRadius: theme.spacing(1.5),
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  boxShadow: `0 4px 14px ${alpha(theme.palette.secondary.main, 0.4)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
    boxShadow: `0 6px 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    background: theme.palette.action.disabledBackground,
    boxShadow: 'none',
  },
}))

const BackButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3),
  left: theme.spacing(3),
  color: theme.palette.primary.contrastText,
  fontFamily: 'Outfit, sans-serif',
  fontWeight: 600,
  zIndex: 2,
  '&:hover': {
    background: alpha(theme.palette.common.white, 0.1),
  },
}))

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  )
}

const LoginPage = () => {
  const navigate = useNavigate()
  const { signIn, signUp, signInWithMagicLink } = useAuth()

  const [tabValue, setTabValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Login form state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // Signup form state
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupFullName, setSignupFullName] = useState('')
  const [signupPhone, setSignupPhone] = useState('')

  // Magic link form state
  const [magicLinkEmail, setMagicLinkEmail] = useState('')

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    setError(null)
    setSuccess(null)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { user, error: signInError } = await signIn(loginEmail, loginPassword)

      if (signInError) {
        setError(signInError.message)
      } else if (user) {
        navigate('/intake/profile')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { user, error: signUpError } = await signUp(
        signupEmail,
        signupPassword,
        signupFullName,
        signupPhone
      )

      if (signUpError) {
        setError(signUpError.message)
      } else if (user) {
        setSuccess('Account created successfully! Redirecting...')
        setTimeout(() => navigate('/intake/profile'), 1500)
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)

    try {
      const { error: magicLinkError } = await signInWithMagicLink(magicLinkEmail)

      if (magicLinkError) {
        setError(magicLinkError.message)
      } else {
        setSuccess('Magic link sent! Check your email to sign in.')
        setMagicLinkEmail('')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <BackButton
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        disabled={loading}
      >
        Back to Home
      </BackButton>

      <Container maxWidth="sm">
        <LoginCard elevation={0}>
          <IconHeader>
            <LockOutlinedIcon />
          </IconHeader>

          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Welcome
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Sign in or create an account to continue
          </Typography>

          <StyledTabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
            <StyledTab label="Sign In" />
            <StyledTab label="Sign Up" />
            <StyledTab label="Magic Link" />
          </StyledTabs>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess(null)}>
              {success}
            </Alert>
          )}

          {/* Sign In Tab */}
          <TabPanel value={tabValue} index={0}>
            <form onSubmit={handleLogin}>
              <StyledTextField
                label="Email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                fullWidth
              />
              <StyledTextField
                label="Password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                fullWidth
              />
              <SubmitButton
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                disableElevation
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
              </SubmitButton>
            </form>
          </TabPanel>

          {/* Sign Up Tab */}
          <TabPanel value={tabValue} index={1}>
            <form onSubmit={handleSignup}>
              <StyledTextField
                label="Full Name"
                value={signupFullName}
                onChange={(e) => setSignupFullName(e.target.value)}
                required
                fullWidth
              />
              <StyledTextField
                label="Email"
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
                fullWidth
              />
              <StyledTextField
                label="Phone (Optional)"
                type="tel"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
                fullWidth
              />
              <StyledTextField
                label="Password"
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                fullWidth
                helperText="Minimum 6 characters"
              />
              <SubmitButton
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                disableElevation
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
              </SubmitButton>
            </form>
          </TabPanel>

          {/* Magic Link Tab */}
          <TabPanel value={tabValue} index={2}>
            <Typography variant="body2" color="text.secondary" paragraph>
              Enter your email and we'll send you a link to sign in without a password.
            </Typography>
            <form onSubmit={handleMagicLink}>
              <StyledTextField
                label="Email"
                type="email"
                value={magicLinkEmail}
                onChange={(e) => setMagicLinkEmail(e.target.value)}
                required
                fullWidth
              />
              <SubmitButton
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                disableElevation
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Magic Link'}
              </SubmitButton>
            </form>
          </TabPanel>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 4, fontStyle: 'italic' }}
          >
            Secure, confidential, and designed for veterans
          </Typography>
        </LoginCard>
      </Container>
    </PageWrapper>
  )
}

export default LoginPage
