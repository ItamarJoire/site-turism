import { Box, Container, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';

export const Header = () => {
  return(
    <Box>
      <Container maxWidth='xl'>
        <Toolbar>
          <AdbIcon sx={{mr: 1}} 
            // sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              // display: { xs: 'none', md: 'flex' },
              mr: 2,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            LOGO
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  )
}