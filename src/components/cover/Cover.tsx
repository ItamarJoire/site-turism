import { Paper, Box, Grid, Typography, useMediaQuery } from '@mui/material';

// import { Search } from '../search/Search';

// import InstagramIcon from '@mui/icons-material/Instagram';

import Logo from '../../assets/images/logo.png'

interface ICoverProps {
  post: {
    title: string;
    description: string;
    image: string;
    imageText: string;
  };
}

export function Cover(props: ICoverProps) {
  const { post } = props
  const smDown = useMediaQuery('(min-width:560px)')
  const smDownText = useMediaQuery('(min-width:470px)')

  return (
    <Paper component={Box}
      sx={{
        position: 'relative',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
        height: '60vh'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2, px: 2, mb: 6,
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <img
            src={Logo}
            alt='Logotipo'
            style={{ width: '44px', height: '44px', marginRight: '16px' }}
          />
          <Typography
            variant='h6'
            fontWeight={700}
            letterSpacing={2}
            paddingTop={1}
          >
            Turism
          </Typography>
        </Box>
        {/* <InstagramIcon /> */}
      </Box>

      {
        <img
          src={post.image}
          alt={post.imageText}
          style={{ display: 'none' }}
        />
      }

      <Grid container >
        <Grid item md={10}>
          <Box
            padding={smDown ? 6 : 2}
            sx={{
              position: 'relative',
              marginX: { xs: 'none', xl: 'auto' },
              width: { xs: 'none', xl: '90%' },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              fontSize={smDownText ? '42px' : '34px'}
              fontWeight='600'
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>

            <Typography
              variant="h4"
              fontSize={smDownText ? '20px' : '18px'}
              maxWidth='700px'
              paragraph
              lineHeight='30px'
              color="#inherit"
            >
              {post.description}
            </Typography>

            {/* <Search /> */}

            <Box
              component='a'
              href='https://instagram.com'
              target='_blank'
              color='#fff'
            >
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Paper >
  )
}