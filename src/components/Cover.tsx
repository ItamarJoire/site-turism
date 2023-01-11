import { Paper, Box, Grid, Typography, useMediaQuery } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';

import { Search } from './Search';

interface ICoverProps{
  post: {
    title: string;
    description: string;
    image: string;
    imageText: string;
    // linkText: string;
  };
}

export const Cover = (props: ICoverProps) => {
  const { post } = props
  const smDown = useMediaQuery('(min-width:560px)')
  const smDownText = useMediaQuery('(min-width:420px)')

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,115,168,.4)',
        }}
      />

      <Grid container >
        <Grid 
          item
          md={10} 
          >
          <Box 
            padding={smDown ? 8 : 4}
            sx={{
              position: 'relative',
              marginX: { xs: 'none', xl: 'auto'},
              width: { xs: 'none', xl: '70%'},
              // px: {xs: 12} 
            }}
          >
            <Typography
              fontSize={smDownText ? '48px' : '42px'}
              align={smDownText ? 'left' : 'center'}

              sx={{ maxWidth: {xs : '600px'}}}
              // align={smDown ? 'center' : 'left'}
              fontWeight='600'
              component="h1" 
              variant="h3" 
              color="inherit" 
              gutterBottom
            >
              {post.title}
            </Typography>

            <Typography 
              fontSize={smDownText ? '24px' : '20px'}
              align={smDownText ? 'left' : 'center'}
              variant="h5" 
              color="inherit" 
              paragraph
            >
              {post.description}
            </Typography>
            
            <Search />

            <InstagramIcon />
          </Box>
        </Grid>
      </Grid>

     
     
    </Paper>
  )
}