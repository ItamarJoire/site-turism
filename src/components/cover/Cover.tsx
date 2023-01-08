import { Paper, Box, Grid, Typography } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';

import { Search } from '../search/Search';

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
          backgroundColor: 'rgba(0,115,168,.2)',
        }}
      />

      <Grid container >
        <Grid 
          item
          md={6} 
          >
          <Box 
            sx={{
              position: 'relative',
              p: { xs: 6, md: 8 },
              pr: { md: 0 },
            }}
          >
            <Typography
              fontWeight='600'
              component="h1" 
              variant="h3" 
              color="inherit" 
              gutterBottom
            >
              {post.title}
            </Typography>

            <Typography 
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