import { Cover, MediaCard } from "../components"
import Img from '../assets/images/praia.jpg'

import { useLocation } from "../hooks/useLocation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useContext } from "react";
import { BaseContext } from "../contexts/BaseContext";

const cover = {
  title: 'Conheça a Ilha de Itaparica',
  description: `Aqui esrão as melhores opções para você! Planeje já a sua visita, venha curtir essa maravilha!`,
  image: `${Img}`,
  imageText: 'Praia',
}

export function MainPage(): JSX.Element {
  const { local } = useLocation()
  const { list } = useContext(BaseContext)

  return (
    <>
      <Cover post={cover} />
      {
        list.map(item => {
          return (
            <div>
              <h2>{item.name}</h2>
              {
                item.restaurants.map(item => {
                  return (
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
      <MediaCard title='Restaurantes' subtitle='Opções deliciosas esperando por você' option={local[0].restaurant} />
    </>
  )
}