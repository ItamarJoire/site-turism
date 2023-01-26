import { Cover, MediaCard } from "../components"
import Img from '../assets/images/praia.jpg'

import { useLocation } from "../hooks/useLocation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cover = {
  title: 'Conheça a Ilha de Itaparica',
  description: `Aqui esrão as melhores opções para você! Planeje já a sua visita, venha curtir essa maravilha!`,
  image: `${Img}`,
  imageText: 'Praia',
}

export function MainPage(): JSX.Element {
  const { local } = useLocation()

  return (
    <>
      <Cover post={cover} />
      <MediaCard title='Restaurantes' subtitle='Opções deliciosas esperando por você' option={local[0].restaurant} />
    </>
  )
}