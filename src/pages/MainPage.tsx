import { Cover, MediaCard } from "../components"
import Img from '../assets/images/praia.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cover = {
  title: 'Conheça a Ilha Turism',
  description: `Planeje já a sua visita, venha curtir essa maravilha!`,
  image: `${Img}`,
  imageText: 'Praia',
}

export function MainPage(): JSX.Element {
  return (
    <>
      <Cover post={cover} />
      <MediaCard title='Diversos' subtitle='Descubra o que os visitantes mais buscam' />
    </>
  )
}