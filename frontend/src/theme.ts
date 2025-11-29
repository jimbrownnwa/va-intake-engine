/**
 * Material-UI Theme Configuration
 *
 * Government Modernism aesthetic for VA Disability Intake
 * Conveys authority, trust, and respect for military service
 */

import { createTheme } from '@mui/material/styles';

// Color palette: Deep Navy, Bronze/Gold, Warm Neutrals
// Inspired by military precision and governmental authority
const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1F44', // Deep Navy - authority, trust
      light: '#1a3d6f',
      dark: '#051429',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B8860B', // Dark Goldenrod - honor, achievement
      light: '#daa520',
      dark: '#8b6914',
      contrastText: '#ffffff',
    },
    error: {
      main: '#c62828',
      light: '#ef5350',
      dark: '#8e0000',
    },
    warning: {
      main: '#f57c00',
      light: '#ff9800',
      dark: '#c43e00',
    },
    info: {
      main: '#2D5F5D', // Muted Teal - calm, supportive
      light: '#4a8a87',
      dark: '#1d4442',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    background: {
      default: '#FAFAF8', // Warm off-white
      paper: '#ffffff',
    },
    text: {
      primary: '#1A1A1A', // Near-black
      secondary: '#4A4A4A',
      disabled: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: [
      'Outfit',
      'Public Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Outfit, sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Outfit, sans-serif',
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Outfit, sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'Outfit, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: 'Outfit, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'Outfit, sans-serif',
      fontSize: '1.1rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: 'Public Sans, sans-serif',
      fontSize: '1.0625rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: 'Public Sans, sans-serif',
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: 'Outfit, sans-serif',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  spacing: 8, // Base spacing unit (8px)
  shape: {
    borderRadius: 8, // Rounded corners for components
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          },
        },
        sizeLarge: {
          padding: '12px 32px',
          fontSize: '1.125rem',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 8,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          fontSize: '0.875rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
