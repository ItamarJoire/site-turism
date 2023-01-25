import { useEffect, useState } from 'react'

import axios from 'axios'

interface IImg {
  image: string
}

interface ILocation {
  id: number
  title: string
  description: string
  images: IImg[]
}

interface ILocationArray {
  name?: string
  restaurants: ILocation[]
}

export function Test() {
  const [lista, setLista] = useState<ILocationArray[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/locations')
      .then(response => setLista(response.data))
  }, [])


  return (
    <ul>
      {lista.map((listItem) => {
        return <div key={listItem.name}>
          {listItem.restaurants.map((item) => {
            return <ul key={item.id}>
              <h1>{item.title}</h1>
              <li>{item.description}</li>
              <ul>
                {item.images.map((i) => {
                  return <img src={i.image} alt='' />
                })}
              </ul>
            </ul>
          })
          }
        </div>;
      })}
    </ul>
  )
}