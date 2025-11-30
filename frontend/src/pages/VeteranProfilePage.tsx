/**
 * Veteran Profile Page - Redesigned
 *
 * Government Modernism aesthetic
 * Module 1: Collects veteran profile and service history
 */

import { useRef, useState } from 'react'
import { Container, Box, Typography, Paper, Button, LinearProgress, CircularProgress, alpha } from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import { useAuth } from '../context/AuthContext'
import { useSession } from '../context/SessionContext'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HomeIcon from '@mui/icons-material/Home'

// Import Module 1 Components
import ContactInfo from '../components/VeteranProfile/ContactInfo'
import MilitaryService from '../components/VeteranProfile/MilitaryService'
import MOSHistory from '../components/VeteranProfile/MOSHistory'
import DutyStations from '../components/VeteranProfile/DutyStations'
import type { ContactInfoHandle } from '../components/VeteranProfile/ContactInfo'
import type { MilitaryServiceHandle } from '../components/VeteranProfile/MilitaryService'
import type { MOSHistoryHandle } from '../components/VeteranProfile/MOSHistory'
import type { DutyStationsHandle } from '../components/VeteranProfile/DutyStations'

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
const HeaderSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0, 8),
  marginBottom: theme.spacing(-4),
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
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: theme.palette.secondary.main,
  },
}))

const HeaderContent = styled(Container)({
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.6s ease-out`,
})

const ProgressCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, ${alpha(theme.palette.info.main, 0.05)} 0%, ${alpha(theme.palette.info.main, 0.02)} 100%)`,
  border: `1px solid ${alpha(theme.palette.info.main, 0.1)}`,
  marginBottom: theme.spacing(3),
  animation: `${fadeInUp} 0.6s ease-out 0.3s backwards`,
}))

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  background: alpha(theme.palette.primary.main, 0.1),
  '& .MuiLinearProgress-bar': {
    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: 5,
  },
}))

const IconHeader = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: alpha(theme.palette.common.white, 0.15),
  margin: '0 auto 16px',
  backdropFilter: 'blur(10px)',
  '& svg': {
    fontSize: 40,
    color: theme.palette.primary.contrastText,
  },
}))

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  borderRadius: theme.spacing(1.5),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}))

const VeteranProfilePage = () => {
  const { user, signOut } = useAuth()
  const { session, loading, saveAnswer } = useSession()
  const navigate = useNavigate()
  const [saving, setSaving] = useState(false)

  // Create refs for each component
  const contactInfoRef = useRef<ContactInfoHandle>(null)
  const militaryServiceRef = useRef<MilitaryServiceHandle>(null)
  const mosHistoryRef = useRef<MOSHistoryHandle>(null)
  const dutyStationsRef = useRef<DutyStationsHandle>(null)

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const handleSaveAndContinue = async () => {
    if (!session) {
      console.error('No session available')
      return
    }
    setSaving(true)

    try {
      // Collect data from all components
      const contactData = contactInfoRef.current?.getData()
      const militaryData = militaryServiceRef.current?.getData()
      const mosData = mosHistoryRef.current?.getData()
      const dutyData = dutyStationsRef.current?.getData()

      console.log('Saving data:', { contactData, militaryData, mosData, dutyData })

      // Save contact info to answers table (name and phone)
      if (contactData) {
        console.log('Saving contact info...')
        await saveAnswer('contact_full_name', contactData.fullName)
        await saveAnswer('contact_phone', contactData.phone)
        console.log('Contact info saved')
      }

      // Save to veteran_profile table (requires service_start_date)
      if (militaryData?.serviceStartDate) {
        console.log('Saving veteran_profile...')
        const profileData: Record<string, any> = {
          session_id: session.id,
          service_start_date: militaryData.serviceStartDate.toISOString().split('T')[0],
        }

        // Map display values to database values
        if (militaryData.militaryStatus) {
          const statusMap: Record<string, string> = {
            'Active Duty': 'active_duty',
            'Veteran (Separated/Retired)': 'veteran',
            'National Guard': 'guard',
            'Reserve': 'reserve',
          }
          profileData.military_status = statusMap[militaryData.militaryStatus] || militaryData.militaryStatus
        }
        if (militaryData.vaFileNumber) {
          profileData.va_file_number = militaryData.vaFileNumber
        }
        if (militaryData.serviceEndDate) {
          profileData.service_end_date = militaryData.serviceEndDate.toISOString().split('T')[0]
        }
        if (dutyData !== undefined) {
          profileData.duty_stations = dutyData
        }

        console.log('Profile data to save:', profileData)

        // Upsert veteran_profile
        const { error: profileError } = await supabase
          .from('veteran_profile')
          .upsert(profileData, { onConflict: 'session_id' })

        if (profileError) {
          console.error('Error saving veteran_profile:', profileError)
          throw profileError
        }
        console.log('veteran_profile saved')
      }

      // Save branches to branches_of_service table
      if (militaryData?.selectedBranches && militaryData.selectedBranches.length > 0) {
        console.log('Saving branches...', militaryData.selectedBranches)
        // Delete existing branches for this session first
        const { error: deleteError } = await supabase
          .from('branches_of_service')
          .delete()
          .eq('session_id', session.id)

        if (deleteError) {
          console.error('Error deleting branches:', deleteError)
          throw deleteError
        }

        // Insert new branches
        const branchRows = militaryData.selectedBranches.map((branch: string) => ({
          session_id: session.id,
          branch_name: branch,
        }))

        const { error: branchError } = await supabase
          .from('branches_of_service')
          .insert(branchRows)

        if (branchError) {
          console.error('Error saving branches:', branchError)
          throw branchError
        }
        console.log('Branches saved')
      }

      // Save MOS history to mos_history table (requires job_title, start_date, end_date)
      if (mosData && mosData.length > 0) {
        console.log('Processing MOS data...', mosData)
        // Filter to only complete entries (all required fields present)
        // MOSHistory component uses snake_case: job_title, start_date, end_date
        const completeEntries = mosData.filter((entry: any) =>
          entry.job_title && entry.start_date && entry.end_date
        )
        console.log('Complete MOS entries:', completeEntries)

        // Delete existing MOS entries for this session first
        const { error: deleteMosError } = await supabase
          .from('mos_history')
          .delete()
          .eq('session_id', session.id)

        if (deleteMosError) {
          console.error('Error deleting MOS history:', deleteMosError)
          throw deleteMosError
        }

        // Only insert if there are complete entries
        if (completeEntries.length > 0) {
          const mosRows = completeEntries.map((entry: any, index: number) => ({
            session_id: session.id,
            job_title: entry.job_title,
            start_date: new Date(entry.start_date).toISOString().split('T')[0],
            end_date: new Date(entry.end_date).toISOString().split('T')[0],
            sequence_order: index + 1,
          }))
          console.log('MOS rows to insert:', mosRows)

          const { error: mosError } = await supabase
            .from('mos_history')
            .insert(mosRows)

          if (mosError) {
            console.error('Error saving MOS history:', mosError)
            throw mosError
          }
          console.log('MOS history saved')
        }
      }

      // Navigate to condition screening
      console.log('All data saved, navigating...')
      navigate('/intake/conditions')
    } catch (error: any) {
      console.error('Error saving profile:', error)
      alert(`Error saving profile: ${error?.message || JSON.stringify(error)}`)
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <Box>
        <HeaderSection>
          <HeaderContent maxWidth="lg">
            <IconHeader>
              <AccountCircleIcon />
            </IconHeader>
            <Typography variant="h3" align="center" fontWeight={700}>
              Loading Session...
            </Typography>
          </HeaderContent>
        </HeaderSection>
        <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
          <StyledLinearProgress />
        </Container>
      </Box>
    )
  }

  return (
    <Box>
      <HeaderSection>
        <HeaderContent maxWidth="lg">
          <IconHeader>
            <AccountCircleIcon />
          </IconHeader>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Veteran Profile
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
            Module 1: Your Service Information
          </Typography>
        </HeaderContent>
      </HeaderSection>

      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <ProgressCard elevation={0}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" fontWeight={700}>
              Progress
            </Typography>
            <Typography variant="h4" fontWeight={700} color="secondary.main">
              {session?.progress_percentage || 0}%
            </Typography>
          </Box>
          <StyledLinearProgress
            variant="determinate"
            value={session?.progress_percentage || 0}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            {session?.status === 'completed' ? 'Completed' : 'In Progress'}
          </Typography>
        </ProgressCard>

        {/* Module 1 Form Components */}
        <ContactInfo ref={contactInfoRef} />
        <MilitaryService ref={militaryServiceRef} />
        <MOSHistory ref={mosHistoryRef} />
        <DutyStations ref={dutyStationsRef} />

        {/* Session Info Card */}
        <Paper
          sx={{
            p: 3,
            mb: 3,
            background: (theme) => alpha(theme.palette.info.main, 0.04),
            border: (theme) => `1px solid ${alpha(theme.palette.info.main, 0.1)}`,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Session Details
          </Typography>
          <Box sx={{ display: 'grid', gap: 1.5 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Session ID
              </Typography>
              <Typography variant="body1" fontFamily="monospace" sx={{ wordBreak: 'break-all' }}>
                {session?.id || 'Creating...'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Current Step
              </Typography>
              <Typography variant="body1">
                {session?.current_step || 'Module 1: Veteran Profile'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Last Updated
              </Typography>
              <Typography variant="body1">
                {session?.last_updated_at
                  ? new Date(session.last_updated_at).toLocaleString()
                  : 'Just now'}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <ActionButton
              variant="outlined"
              color="primary"
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
            >
              Back to Home
            </ActionButton>
            <ActionButton
              variant="outlined"
              color="error"
              startIcon={<ExitToAppIcon />}
              onClick={handleSignOut}
            >
              Sign Out
            </ActionButton>
          </Box>
          <ActionButton
            variant="contained"
            color="secondary"
            endIcon={saving ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
            onClick={handleSaveAndContinue}
            disabled={saving}
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
              '&:hover': {
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
              },
              '&:disabled': {
                background: (theme) => theme.palette.action.disabledBackground,
              },
            }}
          >
            {saving ? 'Saving...' : 'Save & Continue'}
          </ActionButton>
        </Box>
      </Container>
    </Box>
  )
}

export default VeteranProfilePage
