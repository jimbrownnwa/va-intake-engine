/**
 * Contact Information Component
 * Module 1 - Section 1 (Questions 1-3)
 */

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Box, Typography, TextField, alpha } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAuth } from '../../context/AuthContext'
import { useSession } from '../../context/SessionContext'

const SectionCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  background: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.5),
    background: theme.palette.background.paper,
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderWidth: 2,
    },
  },
}))

export type ContactInfoHandle = {
  getData: () => { fullName: string; phone: string }
}

const ContactInfo = forwardRef<ContactInfoHandle>((props, ref) => {
  const { user } = useAuth()
  const { getAnswer } = useSession()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState('')

  // Load saved values on mount
  useEffect(() => {
    const loadSavedData = async () => {
      const savedName = await getAnswer('contact_full_name')
      const savedPhone = await getAnswer('contact_phone')

      if (savedName) setFullName(savedName)
      if (savedPhone) setPhone(savedPhone)
    }
    loadSavedData()
  }, [getAnswer])

  // Expose getData method to parent
  useImperativeHandle(ref, () => ({
    getData: () => ({ fullName, phone }),
  }))

  return (
    <SectionCard>
      <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 3 }}>
        Contact Information
      </Typography>

      <StyledTextField
        label="Full Legal Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        placeholder="First Middle Last"
        helperText="Enter your full legal name as it appears on your DD-214"
        fullWidth
      />

      <StyledTextField
        label="Email Address"
        type="email"
        value={email}
        disabled
        required
        helperText="Email from your account (cannot be changed here)"
        fullWidth
      />

      <StyledTextField
        label="Phone Number"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="(555) 555-5555"
        helperText="We'll call you at this number for your consultation"
        fullWidth
      />
    </SectionCard>
  )
})

ContactInfo.displayName = 'ContactInfo'

export default ContactInfo
