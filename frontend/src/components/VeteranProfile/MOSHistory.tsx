/**
 * MOS History Component
 * Module 1 - Section 3 (Questions 9-47)
 * Up to 10 repeatable job title entries
 */

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
  alpha,
  Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useSession } from '../../context/SessionContext'

const SectionCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  background: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
}))

const MOSEntryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  background: alpha(theme.palette.info.main, 0.02),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.5),
    background: theme.palette.background.paper,
  },
}))

const AddButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  borderRadius: theme.spacing(1.5),
}))

interface MOSEntry {
  id: string
  job_title: string
  start_date: Date | null
  end_date: Date | null
}

const MAX_ENTRIES = 10

export type MOSHistoryHandle = {
  getData: () => MOSEntry[]
}

const MOSHistory = forwardRef<MOSHistoryHandle>((props, ref) => {
  const { getAnswer } = useSession()

  const [entries, setEntries] = useState<MOSEntry[]>([
    {
      id: crypto.randomUUID(),
      job_title: '',
      start_date: null,
      end_date: null,
    },
  ])

  // Load saved values on mount
  useEffect(() => {
    const loadSavedData = async () => {
      const savedEntries = await getAnswer('mos_history')
      if (savedEntries) {
        const parsed = JSON.parse(savedEntries)
        setEntries(
          parsed.map((entry: any) => ({
            ...entry,
            start_date: entry.start_date ? new Date(entry.start_date) : null,
            end_date: entry.end_date ? new Date(entry.end_date) : null,
          }))
        )
      }
    }
    loadSavedData()
  }, [getAnswer])

  // Expose getData method to parent
  useImperativeHandle(ref, () => ({
    getData: () => entries,
  }))

  const updateEntry = (id: string, field: keyof MOSEntry, value: any) => {
    const newEntries = entries.map((entry) =>
      entry.id === id ? { ...entry, [field]: value } : entry
    )
    setEntries(newEntries)
  }

  const addEntry = () => {
    if (entries.length < MAX_ENTRIES) {
      const newEntries = [
        ...entries,
        {
          id: crypto.randomUUID(),
          job_title: '',
          start_date: null,
          end_date: null,
        },
      ]
      setEntries(newEntries)
    }
  }

  const removeEntry = (id: string) => {
    if (entries.length > 1) {
      const newEntries = entries.filter((entry) => entry.id !== id)
      setEntries(newEntries)
    }
  }

  const getOrdinal = (index: number) => {
    const ordinals = [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
      'Sixth',
      'Seventh',
      'Eighth',
      'Ninth',
      'Tenth',
    ]
    return ordinals[index] || `${index + 1}th`
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SectionCard>
        <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 1 }}>
          Job Titles (MOS/Rate) History
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
          List all job titles you held during your military service. Include the full title and MOS code.
        </Typography>

        {entries.map((entry, index) => (
          <MOSEntryCard key={entry.id} elevation={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                {getOrdinal(index)} Job Title {index === 0 && <span style={{ color: 'red' }}>*</span>}
              </Typography>
              {entries.length > 1 && (
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => removeEntry(entry.id)}
                  aria-label="Remove job title"
                >
                  <DeleteOutlineIcon />
                </IconButton>
              )}
            </Box>

            <StyledTextField
              label="Job Title (MOS/Rate)"
              value={entry.job_title}
              onChange={(e) => updateEntry(entry.id, 'job_title', e.target.value)}
              required={index === 0}
              placeholder="e.g., Infantry Squad Leader (11B) or Hospital Corpsman (HM)"
              helperText="Provide your FULL job title, not just the MOS code. Include both the title and the code."
              fullWidth
              sx={{ mb: 2 }}
            />

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ flex: 1, minWidth: 200 }}>
                <DatePicker
                  label="Start Date"
                  value={entry.start_date}
                  onChange={(date) => updateEntry(entry.id, 'start_date', date)}
                  views={['year', 'month']}
                  minDate={new Date(1950, 0, 1)}
                  maxDate={new Date(2025, 11, 31)}
                  slotProps={{
                    textField: {
                      required: index === 0,
                      fullWidth: true,
                    },
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, minWidth: 200 }}>
                <DatePicker
                  label="End Date"
                  value={entry.end_date}
                  onChange={(date) => updateEntry(entry.id, 'end_date', date)}
                  views={['year', 'month']}
                  minDate={new Date(1950, 0, 1)}
                  maxDate={new Date(2025, 11, 31)}
                  slotProps={{
                    textField: {
                      required: index === 0,
                      fullWidth: true,
                    },
                  }}
                />
              </Box>
            </Box>
          </MOSEntryCard>
        ))}

        {entries.length < MAX_ENTRIES && (
          <>
            <Divider sx={{ my: 2 }} />
            <AddButton
              variant="outlined"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={addEntry}
              fullWidth
            >
              Add Another Job Title ({entries.length}/{MAX_ENTRIES})
            </AddButton>
          </>
        )}

        {entries.length >= MAX_ENTRIES && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
            Maximum of {MAX_ENTRIES} job titles reached
          </Typography>
        )}
      </SectionCard>
    </LocalizationProvider>
  )
})

MOSHistory.displayName = 'MOSHistory'

export default MOSHistory
