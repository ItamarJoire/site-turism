import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from "./global-style";
import { MainPage } from './pages';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

