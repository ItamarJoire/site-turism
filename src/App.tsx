import { CssBaseline, ThemeProvider } from '@mui/material'

import { LocationContextProvider } from './contexts/LocationContext';
import { Footer } from './components';

import { PublicRoutes } from './routes';

import { theme } from "./global-style";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <CssBaseline />
        <PublicRoutes />
        <Footer />
      </LocationContextProvider>
    </ThemeProvider>
  );
}

