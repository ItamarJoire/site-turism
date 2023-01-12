import {Box, Card, Button, CardActions, Typography } from '@mui/material'
import Slider from 'react-slick'

import LeftArrow from '../../assets/images/left-arrow.svg'
import RightArrow from '../../assets/images/right-arrow.svg'

export function MediaCard({ title, subtitle, data }) {
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
    <Box className="card-container">
      <Box  sx={{ pb: 2, pt: 2, width: '90%' }}>
        <Typography
          component='h3'
          variant='h5'
          color='text.secondary'
          textAlign='left'
        >
          {title}
        </Typography>
        <Typography
          component='p'
          variant='body2'
          color='text.secondary'
          textAlign='left'
        >
          {subtitle}
        </Typography>
      </Box>

      <Slider {...settings} className="card-container--inner">
        {data.map((item, index) => {
          return (
            <Box>
              <Card 
              sx={{ maxWidth: '345px' }}
                variant='outlined'
                className="card-container--inner--card" key={index}>
                <img src={item.image} alt="hero_img" />

                <Box sx={{ p: 1}}>
                  <Typography sx={{ m: 1 }}
                    component='h2'
                    textAlign='left'
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography 
                    sx={{ m: 1 }}
                    variant='body2'
                    component='h2'
                    color='text.secondary'
                  >
                    {item.description}
                  </Typography>

                  <CardActions sx={{ display: 'flex', justifyContent: 'end', mt: 1}}>
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
                </Box>
              </Card>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
