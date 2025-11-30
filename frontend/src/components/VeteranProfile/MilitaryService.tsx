/**
 * Military Service Component
 * Module 1 - Section 2 (Questions 4-8)
 */

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  TextField,
  FormHelperText,
  alpha,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useSession } from '../../context/SessionContext'
import { supabase } from '../../lib/supabase'

const SectionCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  background: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
}))

const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.5),
    background: theme.palette.background.paper,
  },
}))

const MILITARY_STATUSES = [
  'Active Duty',
  'Veteran (Separated/Retired)',
  'National Guard',
  'Reserve',
]

const BRANCHES = [
  'Army',
  'Army National Guard',
  'Army Reserves',
  'Air Force',
  'Air National Guard',
  'Air Force Reserve',
  'Navy',
  'Navy Reserves',
  'Marine Corps',
  'Marine Corps Reserve',
  'Coast Guard',
  'Coast Guard Reserve',
  'Space Force',
  'Space Force Reserve',
]

export type MilitaryServiceHandle = {
  getData: () => {
    militaryStatus: string
    selectedBranches: string[]
    vaFileNumber: string
    serviceStartDate: Date | null
    serviceEndDate: Date | null
    currentlyServing: boolean
  }
}

const MilitaryService = forwardRef<MilitaryServiceHandle>((props, ref) => {
  const { session } = useSession()

  const [militaryStatus, setMilitaryStatus] = useState('')
  const [selectedBranches, setSelectedBranches] = useState<string[]>([])
  const [vaFileNumber, setVaFileNumber] = useState('')
  const [serviceStartDate, setServiceStartDate] = useState<Date | null>(null)
  const [serviceEndDate, setServiceEndDate] = useState<Date | null>(null)
  const [currentlyServing, setCurrentlyServing] = useState(false)

  // Load saved values from database tables on mount
  useEffect(() => {
    const loadSavedData = async () => {
      if (!session?.id) return

      // Load from veteran_profile table
      const { data: profileData } = await supabase
        .from('veteran_profile')
        .select('*')
        .eq('session_id', session.id)
        .maybeSingle()

      if (profileData) {
        // Map database values back to display values
        if (profileData.military_status) {
          const statusMap: Record<string, string> = {
            'active_duty': 'Active Duty',
            'veteran': 'Veteran (Separated/Retired)',
            'guard': 'National Guard',
            'reserve': 'Reserve',
          }
          setMilitaryStatus(statusMap[profileData.military_status] || profileData.military_status)
        }
        if (profileData.va_file_number) setVaFileNumber(profileData.va_file_number)
        if (profileData.service_start_date) setServiceStartDate(new Date(profileData.service_start_date))
        if (profileData.service_end_date) {
          setServiceEndDate(new Date(profileData.service_end_date))
        } else if (profileData.service_start_date) {
          // If start date exists but no end date, they're currently serving
          setCurrentlyServing(true)
        }
      }

      // Load from branches_of_service table
      const { data: branchesData } = await supabase
        .from('branches_of_service')
        .select('branch_name')
        .eq('session_id', session.id)

      if (branchesData && branchesData.length > 0) {
        setSelectedBranches(branchesData.map(b => b.branch_name))
      }
    }
    loadSavedData()
  }, [session?.id])

  // Expose getData method to parent
  useImperativeHandle(ref, () => ({
    getData: () => ({
      militaryStatus,
      selectedBranches,
      vaFileNumber,
      serviceStartDate,
      serviceEndDate,
      currentlyServing,
    }),
  }))

  const handleBranchToggle = (branch: string) => {
    const newBranches = selectedBranches.includes(branch)
      ? selectedBranches.filter((b) => b !== branch)
      : [...selectedBranches, branch]
    setSelectedBranches(newBranches)
  }

  const handleCurrentlyServingChange = (checked: boolean) => {
    setCurrentlyServing(checked)
    if (checked) {
      setServiceEndDate(null)
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SectionCard>
        <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 3 }}>
          Military Service
        </Typography>

        {/* Military Status */}
        <FormSection>
          <FormControl component="fieldset" required>
            <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
              Current Military Status
            </FormLabel>
            <RadioGroup value={militaryStatus} onChange={(e) => setMilitaryStatus(e.target.value)}>
              {MILITARY_STATUSES.map((status) => (
                <FormControlLabel
                  key={status}
                  value={status}
                  control={<Radio />}
                  label={status}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </FormSection>

        {/* Branches of Service */}
        <FormSection>
          <FormControl component="fieldset" required>
            <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
              Branch(es) of Service
            </FormLabel>
            <FormHelperText sx={{ mt: 0, mb: 1 }}>
              Select all branches you served in
            </FormHelperText>
            <FormGroup>
              {BRANCHES.map((branch) => (
                <FormControlLabel
                  key={branch}
                  control={
                    <Checkbox
                      checked={selectedBranches.includes(branch)}
                      onChange={() => handleBranchToggle(branch)}
                    />
                  }
                  label={branch}
                />
              ))}
            </FormGroup>
          </FormControl>
        </FormSection>

        {/* VA File Number */}
        <FormSection>
          <StyledTextField
            label="VA File Number (if known)"
            value={vaFileNumber}
            onChange={(e) => setVaFileNumber(e.target.value)}
            placeholder="C-12345678 or leave blank if you don't have one yet"
            helperText="Your VA file number starts with 'C-' followed by 8-9 digits. If you don't have one yet, that's okay - leave this blank."
            fullWidth
          />
        </FormSection>

        {/* Service Dates */}
        <FormSection>
          <Typography variant="body1" fontWeight={600} gutterBottom>
            Service Dates
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <DatePicker
                label="Overall Service Start Date"
                value={serviceStartDate}
                onChange={(date) => setServiceStartDate(date)}
                views={['year', 'month']}
                minDate={new Date(1950, 0, 1)}
                maxDate={new Date(2025, 11, 31)}
                slotProps={{
                  textField: {
                    required: true,
                    helperText: 'When did you first enter military service?',
                    fullWidth: true,
                  },
                }}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <DatePicker
                label="Overall Service End Date"
                value={serviceEndDate}
                onChange={(date) => setServiceEndDate(date)}
                views={['year', 'month']}
                minDate={new Date(1950, 0, 1)}
                maxDate={new Date(2025, 11, 31)}
                disabled={currentlyServing}
                slotProps={{
                  textField: {
                    required: !currentlyServing,
                    helperText: currentlyServing ? 'Currently serving' : 'When did you separate?',
                    fullWidth: true,
                  },
                }}
              />
            </Box>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={currentlyServing}
                onChange={(e) => handleCurrentlyServingChange(e.target.checked)}
              />
            }
            label="I am currently serving"
          />
        </FormSection>
      </SectionCard>
    </LocalizationProvider>
  )
})

MilitaryService.displayName = 'MilitaryService'

export default MilitaryService
