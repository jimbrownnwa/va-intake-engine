/**
 * Main Application Component
 *
 * Handles routing and authentication-based access control
 */

import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { Box, CircularProgress } from '@mui/material'

// Page components
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import VeteranProfilePage from './pages/VeteranProfilePage'
import ConditionScreeningPage from './pages/ConditionScreeningPage'

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route
        path="/intake/profile"
        element={
          <ProtectedRoute>
            <VeteranProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/intake/conditions"
        element={
          <ProtectedRoute>
            <ConditionScreeningPage />
          </ProtectedRoute>
        }
      />

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
