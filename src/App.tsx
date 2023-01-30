import { CssBaseline, ThemeProvider } from '@mui/material'

import { Footer } from './components'

import { PublicRoutes } from './routes'

import { theme } from "./global-style"
import { DatabaseContextProvider } from './contexts/DatabaseContext'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <DatabaseContextProvider>
        <CssBaseline />
        <PublicRoutes />
        <Footer />
      </DatabaseContextProvider>
    </ThemeProvider>
  );
}

