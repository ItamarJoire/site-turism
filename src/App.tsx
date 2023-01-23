import {
  CssBaseline,
  ThemeProvider
} from '@mui/material'

import { LocationContextProvider } from './contexts/LocationContext';

import { PublicRoutes } from './routes';

import { theme } from "./global-style";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <CssBaseline />
        <PublicRoutes />
      </LocationContextProvider>
    </ThemeProvider>
  );
}

