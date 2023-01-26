import { Paper, Box, Typography, Divider, CardMedia, Link } from '@mui/material'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useLocation } from "../hooks/useLocation";

import Slider, { CustomArrowProps } from 'react-slick'

import { TableDays } from '../components';

import LeftArrow from '../assets/images/left-arrow.svg'
import RightArrow from '../assets/images/right-arrow.svg'

import Img from '../assets/images/praia.jpg'

const cover = {
  image: `${Img}`
}

export function LocationDetailPage() {
  const { local } = useLocation()
  const option = local[0].restaurant

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  )

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: '#fff',
          backgroundImage: `url(${cover.image})`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2, px: 6, mb: 6,
            height: '40vh'
          }}
        >
          {<img style={{ display: 'none' }} src={cover.image} alt={''} />}
        </Box>
      </Paper >

      <Box sx={{ px: { xs: 1, sm: 10, md: 38, xl: 62 } }}>
        <Typography
          variant='h5'
          fontWeight='500'
          color='#174661'
          sx={{ maxWidth: '400px' }}
        >
          Almoço no Restaurante Porto de Canoas nas Cataratas
        </Typography>
        {/* <Typography>
          localization
        </Typography> */}
        <Divider sx={{ my: 4 }} />

        <Box>
          <Box sx={{ mb: 8 }}>
            <Slider {...settings}>
              {option.map((item: any, index: any) => {
                return (
                  <CardMedia
                    key={index}
                    image={item.image}
                    sx={{ height: { xs: 340, md: 460 } }}
                  />
                )
              })}
            </Slider>
          </Box>

          <Box>
            <Typography
              variant='h6'
              gutterBottom
              component='h2'
              color='#174661'
            >
              Descrição
            </Typography>
            <Typography
              variant='body2'
              component='div'
              lineHeight='24px'
              color='#5E6D77'
            >
              {option[0].description}
            </Typography>

            <TableDays />

          </Box>
        </Box>

        <Link
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            borderRadius: '50%',
            p: 1,
          }}
          href={'https://api.whatsapp.com/send/?phone=5571988462999&text&type=phone_number&app_absent=0'}
          target='_blank'
        >
          <Box >
            <WhatsAppIcon
              sx={{
                fontSize: 64,
                borderRadius: '50%',
                padding: '16px',
                color: '#fff',
                bgcolor: '#25D366',
                boxShadow: '0px 1px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
              }} />
          </Box>
        </Link>
      </Box>
    </Box >
  )

}