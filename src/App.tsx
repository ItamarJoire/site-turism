import { CssBaseline, ThemeProvider } from '@mui/material'

import { LocationContextProvider } from './contexts/LocationContext';
import { Footer } from './components';

import { PublicRoutes } from './routes';

import { theme } from "./global-style";
import { BaseContextProvider } from './contexts/BaseContext';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseContextProvider>
        <LocationContextProvider>
          <CssBaseline />
          <PublicRoutes />
          <Footer />
        </LocationContextProvider>
      </BaseContextProvider>
    </ThemeProvider>
  );
}

