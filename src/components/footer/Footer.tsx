import { Box, Container, Typography, Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Itaparica
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
        <Container maxWidth="xl">
          <Typography color='#fff' variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}