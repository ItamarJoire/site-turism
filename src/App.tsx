import { ThemeProvider } from '@mui/material'

import { theme } from "./global-style";
import { MainPage } from './pages';



export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
      
    </ThemeProvider>
  );
}

