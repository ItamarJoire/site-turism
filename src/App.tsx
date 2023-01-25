import {
  CssBaseline,
  ThemeProvider
} from '@mui/material'

import { LocationContextProvider } from './contexts/LocationContext';

import { PublicRoutes } from './routes';

import { theme } from "./global-style";
import { Footer } from './components';

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

