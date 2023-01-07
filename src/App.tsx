import { ThemeProvider } from '@mui/material/styles'
import { theme } from "./global-style";
import { MainPage } from './pages';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

