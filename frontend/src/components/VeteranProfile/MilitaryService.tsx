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
  const { getAnswer } = useSession()

  const [militaryStatus, setMilitaryStatus] = useState('')
  const [selectedBranches, setSelectedBranches] = useState<string[]>([])
  const [vaFileNumber, setVaFileNumber] = useState('')
  const [serviceStartDate, setServiceStartDate] = useState<Date | null>(null)
  const [serviceEndDate, setServiceEndDate] = useState<Date | null>(null)
  const [currentlyServing, setCurrentlyServing] = useState(false)

  // Load saved values on mount
  useEffect(() => {
    const loadSavedData = async () => {
      const savedStatus = await getAnswer('military_status')
      const savedBranches = await getAnswer('military_branches')
      const savedVAFileNumber = await getAnswer('military_va_file_number')
      const savedStartDate = await getAnswer('military_service_start_date')
      const savedEndDate = await getAnswer('military_service_end_date')
      const savedCurrentlyServing = await getAnswer('military_currently_serving')

      if (savedStatus) setMilitaryStatus(savedStatus)
      if (savedBranches) setSelectedBranches(JSON.parse(savedBranches))
      if (savedVAFileNumber) setVaFileNumber(savedVAFileNumber)
      if (savedStartDate) setServiceStartDate(new Date(savedStartDate))
      if (savedEndDate) setServiceEndDate(new Date(savedEndDate))
      if (savedCurrentlyServing) setCurrentlyServing(savedCurrentlyServing === 'true')
    }
    loadSavedData()
  }, [getAnswer])

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
