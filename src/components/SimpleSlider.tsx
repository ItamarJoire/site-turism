import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SimpleSlider.css";

import { MediaCard } from "./MediaCard";
import { Box, Grid, Typography } from '@mui/material'
import  ArrowForwardOutlined  from '@mui/icons-material/ArrowForwardOutlined'
import  ArrowBackIosNewOutlined  from '@mui/icons-material/ArrowBackIosNewOutlined'

const infoRestaurant = [
  {
    id: 1,
    title: 'Restaurante Ponto Certo asdasdasdasdasd',
    description: 'Localizada no Corredor Turístico de Foz do Iguaçu, a Ponto Certo Churrascaria já tornou-se referência em variedade e qualidade de carnes nobres. Ambiente aconchegante, estacionamento próprio enriquecem ainda mais o convite. Opção de Rodízio de Carne e Pizza em ambientes separados. Inclui no rodízio de carne: Buffet com variedade em pratos quentes, frios, sobremesas inclusos e muitas opções de carnes nobres. Inclui no rodízio de Pizza: pizzas salgadas e doces, tendo mais de 100 sabores no cardápio, porções de frango a passarinho, batata frita, polenta frita, macarrão à bolonhesa e macarrão alho e óleo e buffet de sorvete.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: 2,
    title: 'Titulo2',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: 3,
    title: 'Titulo3',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: 4,
    title: 'Titulo4',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: 5,
    title: 'Titulo5',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random'
  },
]

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div style={{ background: 'yellow' }}
      onClick={onClick}
      className={className} 
    >
      <ArrowForwardOutlined style={{ color: 'blue' }} />
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div style={{ background: 'yellow' }}
      onClick={onClick}
      className={className} 
    >
      <ArrowBackIosNewOutlined style={{ color: 'blue' }} />
    </div>
  )
}

export const SimpleSlider = () => {
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // responsive: [
      //   {
      //     breakpoint: 900,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: false
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
  }

  return (
    <Box>
      <Grid>
        <Typography 
          variant="h4"
        >
          Restaurantes
        </Typography>
        <Slider {...settings}>
          {infoRestaurant.map((restaurant) => (
            <MediaCard
              key={restaurant.id} 
              title={restaurant.title}
              description={restaurant.description}
              image={restaurant.image}
            />
          ))}
        </Slider>
      </Grid>
    </Box>
  );
}
