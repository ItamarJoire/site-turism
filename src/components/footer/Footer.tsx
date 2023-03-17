import { Box, Typography, Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" textAlign='center'>
      {'Copyright © '}
      <Link color="inherit" href="/">
        2023 Ilha Turism
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '40vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 8,
          px: 2,
          mt: 'auto',
          backgroundColor: '#113448'
        }}
      >

        <Copyright />

      </Box>
    </Box>
  );
}