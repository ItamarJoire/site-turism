import { Paper, Box, Typography, Divider, Card, CardMedia, Link } from '@mui/material'
import { useParams } from 'react-router-dom';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Slider, { CustomArrowProps } from 'react-slick'

import { TableDays } from '../components';

import LeftArrow from '../assets/images/left-arrow.svg'
import RightArrow from '../assets/images/right-arrow.svg'

import Img from '../assets/images/praia.jpg'
import { useDatabase } from '../hooks/useDatabase';
import { useState } from 'react';

const cover = {
  image: `${Img}`
}

export function LocationDetailPage() {
  const { id } = useParams()
  const { list } = useDatabase()

  const result = list[0].restaurants.filter(check)

  function check(value: any) {
    return value.id === (id ? Number.parseInt(id, 10) : null)
  }

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
          {result && result[0].title}
        </Typography>
        <Divider sx={{ my: 4 }} />

        <Box>
          <Box sx={{ mb: 8 }}>
            <Slider {...settings}>
              {result[0].images.map((item: any) => {
                return (
                  <Card variant='outlined'>
                    <CardMedia
                      key={item.id}
                      image={item.image}
                      sx={{ height: { xs: 340, md: 460 } }}
                    />
                  </Card>
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
            </Typography>
            Descrição
            <Typography
              variant='body2'
              component='div'
              lineHeight='24px'
              color='#5E6D77'
              mt={2}
            >
              {result[0].description}

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
          href={'https://api.whatsapp.com/send/?phone=5571988999999&text&type=phone_number&app_absent=0'}
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