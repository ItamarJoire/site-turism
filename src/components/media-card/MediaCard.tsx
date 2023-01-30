import { useDatabase } from '../../hooks/useDatabase';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, Paper } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// import { useNavigate } from 'react-router-dom'


import Slider, { CustomArrowProps } from 'react-slick'
import LeftArrow from '../../assets/images/left-arrow.svg'
import RightArrow from '../../assets/images/right-arrow.svg'

interface IProps {
  title: string
  subtitle: string
}

export function MediaCard({ title, subtitle }: IProps) {
  const { list } = useDatabase()
  // const navigate = useNavigate()

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
        breakpoint: 600,
        settings: {
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 428,
        settings: {
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false

        }
      },
    ]
  }

  // function navigateLocationDatailPage() {
  //   navigate('/detalhe-do-local/')
  // }

  return (
    <Box sx={{ width: { xs: '92%', sm: '70%', xl: '60%' }, mx: 'auto' }} >
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
        {list.length === 0 ? (
          <p>Carregando...</p>
        ) : (list[0].restaurants.map((item: any) => {
          return (
            <Box key={item.id} sx={{ display: 'flex' }}>
              <Card
                variant='outlined'
                sx={{
                  maxWidth: { xs: '100%', sm: 265 },
                  mx: 0.6
                }}
              >
                <div>{item.id}</div>
                <CardMedia
                  key={item.id}
                  image={item.image}
                  sx={{ height: 260 }}
                >
                  <Paper
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'space-around',
                      height: '100%',
                      color: 'red',
                      background: 'linear-gradient(360deg, #000000 -23.59%, rgba(86, 86, 86, 0) 64.78%)'
                    }}
                  >
                    <CardContent
                      // onClick={navigateLocationDatailPage}
                      sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        cursor: 'pointer'
                      }}>
                      <Link to={`/detalhe-do-local/${item.id}`}><OpenInNewIcon sx={{ color: '#fff' }} /></Link>
                    </CardContent>

                    <CardContent>
                      <Typography
                        variant='body1'
                        component='h2'
                        fontWeight='500'
                        color='#fff'
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Paper>
                </CardMedia>
              </Card>
            </Box>
          )
        }))}
      </Slider >
    </Box >

    // <Box sx={{ width: { xs: '92%', sm: '70%', xl: '60%' }, mx: 'auto' }} >
    //   <Box sx={{ mb: 3, mt: 4 }}>
    //     <Typography
    //       component='h3'
    //       fontWeight='400'
    //       variant='h5'
    //       color='#174661'
    //     >
    //       {title}
    //     </Typography>
    //     <Typography
    //       component='p'
    //       variant='body2'
    //       color='#5E6D77'
    //       gutterBottom
    //     >
    //       {subtitle}
    //     </Typography>
    //   </Box>

    // <Slider {...settings}>
    /* {list.map((item, index) => {
      return (
        <Box key={index} sx={{ display: 'flex' }}>
          <Card
            variant='outlined'
            sx={{
              maxWidth: { xs: '100%', sm: 265 },
              mx: 0.6
            }}
          >
            {item.restaurants.map(item => {
              return (
                <CardMedia
                  key={item.id}
                  image={item.images[0].image}
                  sx={{ height: 260 }}
                >
                  <Paper
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'space-around',
                      height: '100%',
                      color: 'red',
                      background: 'linear-gradient(360deg, #000000 -23.59%, rgba(86, 86, 86, 0) 64.78%)'
                    }}
                  >
                    <CardContent
                      onClick={navigateLocationDatailPage}
                      sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        cursor: 'pointer'
                      }}>
                      <OpenInNewIcon sx={{ color: '#fff' }} />
                    </CardContent>

                    <CardContent>
                      <Typography
                        variant='body1'
                        component='h2'
                        fontWeight='500'
                        color='#fff'
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Paper>
                </CardMedia>
              )
            })}
          </Card>
        </Box>
      )
    })} */
    //   </Slider >
    // </Box >
  )
}
