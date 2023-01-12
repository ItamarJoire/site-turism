import { Paper, Box, Grid, Typography, useMediaQuery } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';

import { Search } from '../search/Search';

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

      <Grid container >
        <Grid item md={10}>
          <Box
            sx={{
              position: 'relative',
              marginX: { xs: 'none', xl: 'auto' },
              width: { xs: 'none', xl: '70%' },
            }}
            padding={smDown ? 8 : 4}
          >
            <Typography
              sx={{ maxWidth: { xs: '600px' } }}
              fontSize={smDownText ? '42px' : '38px'}
              align={smDownText ? 'left' : 'center'}
              fontWeight='600'
              component="h1"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>

            <Typography
              fontSize={smDownText ? '20px' : '18px'}
              align={smDownText ? 'left' : 'center'}
              variant="h4"
              color="#inherit"
              paragraph
            >
              {post.description}
            </Typography>

            <Search />

            <Box
              component='a'
              href='https://instagram.com'
              target='_blank'
              color='#fff'
            >
              <InstagramIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>


    </Paper>
  )
}