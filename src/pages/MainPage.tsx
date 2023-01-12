import { Header, Cover, MediaCard } from "../components"
import Img from '../assets/images/praia.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cover = {
  title: 'Conheça nossos comércios e faça sua viagem',
  description: "Encontre o que há de melhor nas nossas Ilhas",
  image: `${Img}`,
  imageText: 'Praia',
}

const dataRestaurants = [

  {
    id: 1,
    title: 'Restaurante Ponto Certo',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: "https://source.unsplash.com/random/21"
  },
  {
    id: 2,
    title: 'Restaurante Ponto Certo',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: "https://source.unsplash.com/random/13"
  },
  {
    id: 3,
    title: 'Restaurante Ponto Certo',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: "https://source.unsplash.com/random/19"
  },
  {
    id: 4,
    title: 'Restaurante Ponto Certo',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: "https://source.unsplash.com/random/4"
  },
  {
    id: 5,
    title: 'Restaurante Ponto Certo',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: "https://source.unsplash.com/random/7"
  },
  {
    id: 6,
    title: 'Restaurante Ponto Certo',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: "https://source.unsplash.com/random/6"
  },
]

export const MainPage = () => {
  return (
    <>
      <Header />
      <Cover post={cover} />
      <MediaCard title='Restaurantes' data={dataRestaurants} />
    </>
  )
}