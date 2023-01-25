import { Cover, MediaCard } from "../components"
import Img from '../assets/images/praia.jpg'

import { useLocation } from "../hooks/useLocation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Test } from "../components/test/Test";

const cover = {
  title: 'Conheça nossos comércios e faça sua viagem',
  description: "Encontre o que há de melhor nas nossas Ilhas",
  image: `${Img}`,
  imageText: 'Praia',
}

export function MainPage(): JSX.Element {
  const { local } = useLocation()

  return (
    <>
      <Cover post={cover} />
      {/* <Test /> */}
      <MediaCard title='Restaurantes' subtitle='Opções deliciosas esperando por você' option={local[0].restaurant} />
    </>
  )
}