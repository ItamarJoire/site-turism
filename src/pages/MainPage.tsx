import { Cover, MediaCard, Footer } from "../components"
import Img from '../assets/images/praia.jpg'

import { useLocation } from "../hooks/useLocation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cover = {
  title: 'Conheça nossos comércios e faça sua viagem',
  description: "Encontre o que há de melhor nas nossas Ilhas",
  image: `${Img}`,
  imageText: 'Praia',
}

export function MainPage() {
  const { local } = useLocation()

  return (
    <>
      <Cover post={cover} />
      <MediaCard title='Restaurantes' subtitle='Opções deliciosas esperando por você' option={local[0].restaurant} />
      <MediaCard title='Comércios' subtitle='O melhor do comércio' option={local[0].commerce} />
      <Footer />
    </>
  )
}