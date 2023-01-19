import { createContext, useState } from "react";

// interface IProps {
//   id: number
//   title: string
//   description: string
//   image: string
// }

// interface ILocationContextArray {
//   location: string
//   restaurant?: IProps[]
// }

export const LocationContext = createContext()

export function LocationContextProvider({ children }) {
  const [local, setLocal] = useState(
    [
      {
        location: 'Itaparica',
        restaurant: [
          {
            id: 1,
            title: 'Porto Canoas nas Cataratas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/1"
          },
          {
            id: 2,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
          {
            id: 3,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
          {
            id: 4,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
          {
            id: 5,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
        ],
        commerce: [
          {
            id: 1,
            title: 'Porto Canoas nas Cataratas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/1"
          },
          {
            id: 2,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
          {
            id: 3,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
          {
            id: 4,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
          {
            id: 5,
            title: 'Porto Canoas',
            description: 'Lorem Ipsum ',
            image: "https://source.unsplash.com/random/?restaurant/2"
          },
        ],
      }
    ]
  )

  return (
    <LocationContext.Provider value={{ local, setLocal }}>
      {children}
    </LocationContext.Provider>
  )
}