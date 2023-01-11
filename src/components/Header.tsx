import { Box, Container, Toolbar, Typography, useMediaQuery } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';

export const Header = () => {
  const smDown = useMediaQuery('(min-width:560px)')


  return(
    <Box >
      <Container maxWidth='xl' >
        <Toolbar>
          <AdbIcon sx={{mr: 1}} 
            // sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color={smDown ? 'blue' : 'red'}
            sx={{
              // display: { xs: 'none', md: 'flex' },
              mr: 2,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem', 
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  )
}