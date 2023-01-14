import { Header, Cover, MediaCard, Footer } from "../components"
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
    title: 'Porto Canoas nas Cataratas',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini',
    image: "https://source.unsplash.com/random/?restaurant/1"
  },
  {
    id: 2,
    title: 'Restaurante Ponto Certo',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini ver 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line ',
    image: "https://source.unsplash.com/random/?restaurant/2"
  },
  {
    id: 3,
    title: 'Restaurante Ponto Certo',
    description: 'survived not only five centuries, but also the leap into electronic typesetting, remaini ver 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum ',
    image: "https://source.unsplash.com/random/?restaurant/3"
  },
  {
    id: 4,
    title: 'Restaurante Ponto Certo',
    description: 'electronic typesetting, remaini ver 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsu',
    image: "https://source.unsplash.com/random/?restaurant/4"
  },
  {
    id: 5,
    title: 'Restaurante Ponto Certo',
    description: ' electronic typesetting, remaini ver 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsu',
    image: "https://source.unsplash.com/random/?restaurant/5"
  },
  {
    id: 6,
    title: 'Restaurante Ponto Certo',
    description: ' electronic typesetting, remaini ver 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsu',
    image: "https://source.unsplash.com/random/?restaurant/6"
  },
]

export function MainPage() {
  return (
    <>
      {/* <Header /> */}
      <Cover post={cover} />
      <MediaCard title='Restaurantes' subtitle='Opções deliciosas esperando por você' data={dataRestaurants} />
      <Footer />
    </>
  )
}