import { createTheme, styled, Button } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0073A8',
    },
    secondary: {
      main: '#10B5CB'
    },
    common: {
      black: 'linear-gradient(90deg, #10B5CB 0%, #0073A8 100%)'
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
})


export const ButtonGradientColor = styled(Button)(({ theme }) => ({
  color: '#fff',
  border: 'none',
  background: theme.palette.common.black,
  transition: 'background 200ms',
  
  '&:hover': {
    color: '#fff',
    border: 'none',
    background: theme.palette.primary.main
  }
}));

