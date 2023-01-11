import { Header, Cover, SimpleSlider } from "../components"
import Img from '../assets/capa.jpg'

const cover = {
  title: 'Bem-vindo a Ilha de Itaparica',
  description:
    "Desfrute o melhor do turismo",
  image: `${Img}`,
  imageText: 'Im',
  // linkText: 'Continue reading…',
}

export const MainPage = () => {
  return(
    <>
      <Header />
      <Cover post={cover}/>
      <SimpleSlider />
    </>
  )
}