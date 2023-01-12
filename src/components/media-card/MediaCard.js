import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'

import Slider from 'react-slick'

import LeftArrow from '../../assets/images/left-arrow.svg'
import RightArrow from '../../assets/images/right-arrow.svg'

export const MediaCard = ({ title, data }) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
    ]
  }

  return (
    <Card className="card-container" variant='none'>
      <Typography
        variant="h5"
        component="h1"
      >
        {title}
      </Typography>
      <Slider {...settings} className="card-container--inner">
        {data.map((item) => {
          return (
            <Card
              variant='elevation'
              sx={{ maxWidth: 345, height: 400, m: 2 }}
            >
              <CardMedia
                sx={{ height: 170 }}
                image={item.image}
                title={item.title}
              />
              <Box sx={{ p: 1 }}
              >
                <CardContent>
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom

                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    whiteSpace='inherit'
                    overflow='hidden'
                    textOverflow='ellipsis'
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Button
                    disableElevation
                    variant='contained'
                    size="small"
                    href='https://google.com.br'
                    target='_blank'
                  >
                    Mais informações
                  </Button>
                </CardActions>
              </Box>
            </Card>

          )
        })}
      </Slider>
    </Card>
  )
}
