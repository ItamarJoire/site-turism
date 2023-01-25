import Img from '../assets/images/praia.jpg'
import { Paper, Box, Typography, Divider, CardMedia, Link } from '@mui/material'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useLocation } from "../hooks/useLocation";

import Slider, { CustomArrowProps } from 'react-slick'

import LeftArrow from '../assets/images/left.svg'
import RightArrow from '../assets/images/right.svg'
import { TableDays } from '../components';

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
  };

  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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

      <Box sx={{ px: { xs: 8, sm: 10, md: 18, xl: 62 } }}>
        <Typography
          sx={{ maxWidth: '500px' }}
          variant='h5'
          fontWeight='500'
          color='#174661'
        >
          Almoço no Restaurante Porto de Canoas nas Cataratas
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Box sx={{ mb: 8 }}>
            <Slider {...settings}>
              {option.map((item: any, index: any) => {
                return (
                  <CardMedia
                    sx={{ height: { xs: 340, md: 460 } }}
                    image={item.image}
                    key={index}
                  />
                )

              })}

            </Slider>

          </Box>

          <Box>
            <Typography gutterBottom variant='h6' color='#174661' component='h2'>
              Descrição
            </Typography>
            <Typography variant='body2' color='#5E6D77' component='div'>
              {option[0].description}
            </Typography>


            <TableDays />
          </Box>
        </Box>

        <Link
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            borderRadius: '50%',
            p: 1,
          }}

          href={'https://api.whatsapp.com/send/?phone=5571988462999&text&type=phone_number&app_absent=0'}
          target='_blank'
        >
          <WhatsAppIcon
            sx={{
              color: '#25D366',
              fontSize: 40,
            }} />
        </Link>
      </Box>
    </Box >
  )

}