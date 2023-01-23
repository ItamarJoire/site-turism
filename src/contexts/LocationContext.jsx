import { createContext, useState } from "react";

// interface IProps {
//   id: number
//   title: string
//   description: string
//   image: string
// }

// interface ILocationContextArray {
//   location: string
//   restaurant: IProps[]
//   commerce: IProps[]
// }

// interface ILocationContextProps {
//   children: ReactNode
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
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
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