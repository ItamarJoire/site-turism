import { Cover, MediaCard } from "../components"
import Img from '../assets/images/praia.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cover = {
  title: 'Conheça a Ilha de Itaparica',
  description: `Planeje já a sua visita, venha curtir essa maravilha!`,
  image: `${Img}`,
  imageText: 'Praia',
}

export function MainPage(): JSX.Element {
  return (
    <>
      <Cover post={cover} />
      <MediaCard title='Restaurantes' subtitle='Opções deliciosas esperando por você' />
      <MediaCard title='Comércios' subtitle='Opções deliciosas esperando por você' />
    </>
  )
}