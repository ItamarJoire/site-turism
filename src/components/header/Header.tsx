import { Box, Container, Toolbar, Typography, useTheme } from '@mui/material'
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


export function Header() {
  const theme = useTheme()
  // const smDown = useMediaQuery('(min-width:560px)')

  return (
    <Box >
      <Container maxWidth='xl' >
        <Toolbar>
          <BeachAccessIcon sx={{ mr: 1, color: theme.palette.primary.dark }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color={theme.palette.primary.main}
            sx={{

              mr: 2,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none'
            }}
          >
            Turism
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  )
}