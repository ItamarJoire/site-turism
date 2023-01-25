import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import Slider, { CustomArrowProps } from 'react-slick'
import LeftArrow from '../../assets/images/left.svg'
import RightArrow from '../../assets/images/right.svg'

interface IProps {
  title: string
  subtitle: string
  option?: any
}

export function MediaCard({ title, subtitle, option }: IProps) {
  const navigate = useNavigate()

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  )

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
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
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  function navigateLocationDatailPage() {
    navigate('/detalhe-do-local')
  }
  return (
    <Box sx={{ width: { xs: '70%', xl: '60%' }, mx: 'auto' }}>
      <Box sx={{ mb: 3, mt: 4 }}>
        <Typography
          component='h3'
          fontWeight='400'
          variant='h5'
          color='#174661'
        >
          {title}
        </Typography>
        <Typography
          component='p'
          variant='body2'
          color='#5E6D77'
          gutterBottom
        >
          {subtitle}
        </Typography>
      </Box>

      <Slider {...settings}>
        {option.map((item: any, index: any) => {
          return (
            <Box>
              <Card sx={{ maxWidth: 265, mx: 0.6 }} variant='outlined'>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image}
                  key={index}
                />

                <CardContent>
                  <Typography gutterBottom variant='body1' fontWeight='500' component='h2' color='#174661'>
                    {item.title}
                  </Typography>

                  {/* <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography> */}
                </CardContent>

                <CardActions sx={{ p: 2, display: 'flex', justifyContent: 'end' }}>
                  <Button
                    sx={{ textTransform: 'capitalize' }}
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={navigateLocationDatailPage}
                    component='a'
                    target='_blank'
                  >
                    Mais informações
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
