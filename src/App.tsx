import {
  CssBaseline,
  ThemeProvider
} from '@mui/material'

import { LocationContextProvider } from './contexts/LocationContext';

import { theme } from "./global-style";
import { MainPage } from './pages';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <CssBaseline />
        <MainPage />
      </LocationContextProvider>
    </ThemeProvider>
  );
}

