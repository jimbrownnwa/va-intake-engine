/**
 * Duty Stations Component
 * Module 1 - Section 4 (Question 48)
 */

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Box, Typography, TextField, alpha } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSession } from '../../context/SessionContext'

const SectionCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  background: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.5),
    background: theme.palette.background.paper,
    fontFamily: 'Public Sans, sans-serif',
  },
}))

const PLACEHOLDER = `List all bases where you were stationed, including:
• Basic training and tech school
• Permanent duty stations
• Deployments
• TDY assignments

Include approximate dates for each location.

Example:
Fort Benning, GA (Basic Training, Jan-Apr 2005)
Fort Campbell, KY (2005-2008)
Deployed to Iraq (Apr 2007-Apr 2008)
Fort Hood, TX (2008-2012)`

const MAX_LENGTH = 1000

export type DutyStationsHandle = {
  getData: () => string
}

const DutyStations = forwardRef<DutyStationsHandle>((props, ref) => {
  const { getAnswer } = useSession()

  const [dutyStations, setDutyStations] = useState('')

  // Load saved values on mount
  useEffect(() => {
    const loadSavedData = async () => {
      const savedStations = await getAnswer('duty_stations')
      if (savedStations) setDutyStations(savedStations)
    }
    loadSavedData()
  }, [getAnswer])

  // Expose getData method to parent
  useImperativeHandle(ref, () => ({
    getData: () => dutyStations,
  }))

  const handleChange = (value: string) => {
    if (value.length <= MAX_LENGTH) {
      setDutyStations(value)
    }
  }

  return (
    <SectionCard>
      <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 1 }}>
        Duty Stations and Bases
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
        Some bases have presumptive conditions due to contaminated water (Camp Lejeune), burn pits,
        Agent Orange, or other exposures. Be thorough!
      </Typography>

      <StyledTextField
        multiline
        rows={6}
        value={dutyStations}
        onChange={(e) => handleChange(e.target.value)}
        required
        placeholder={PLACEHOLDER}
        helperText={`${dutyStations.length}/${MAX_LENGTH} characters`}
        fullWidth
        inputProps={{
          maxLength: MAX_LENGTH,
        }}
      />
    </SectionCard>
  )
})

DutyStations.displayName = 'DutyStations'

export default DutyStations
