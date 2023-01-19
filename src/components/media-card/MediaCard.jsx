import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material'

import { useLocation } from '../../hooks/useLocation'

import Slider from 'react-slick'
import LeftArrow from '../../assets/images/left-arrow.svg'
import RightArrow from '../../assets/images/right-arrow.svg'

export function MediaCard({ title, subtitle, option }) {

  // eslint-disable-next-line no-unused-vars
  const { local } = useLocation()

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  )

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  )

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <Box sx={{ width: '90%', mx: 'auto' }}>
      <Box sx={{ mb: 3, mt: 4 }}>
        <Typography
          component='h3'
          variant='h5'
          color='text.secondary'
        >
          {title}
        </Typography>
        <Typography
          component='p'
          variant='body2'
          color='text.secondary'
          gutterBottom
        >
          {subtitle}
        </Typography>
      </Box>

      <Slider {...settings}>
        {option.map((item, index) => {
          return (
            <Box>
              <Card sx={{ maxWidth: 345, mx: 0.8 }} variant='outlined'>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image}
                  key={index}
                />

                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2'>
                    {item.title}
                  </Typography>

                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    sx={{ textTransform: 'capitalize' }}
                    size='small'
                    disableElevation
                    variant='contained'
                    component='a'
                    href='https://google.com.br'
                    target='_blank'
                  >
                    Mais detalhes
                  </Button>
                </CardActions>
              </Card>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
