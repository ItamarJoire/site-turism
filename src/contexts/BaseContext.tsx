import { useEffect, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

import axios from 'axios'

type TImg = {
  image: string
}

interface IProps {
  id: number
  title: string
  description: string
  images: TImg[]
}

interface ILocationProps {
  name: string
  restaurants: IProps[]
}

interface ILocationData {
  list: ILocationProps[]
  setList: Dispatch<SetStateAction<ILocationProps[]>>
}

interface IChildren {
  children: ReactNode
}

export const BaseContext = createContext({} as ILocationData)

export function BaseContextProvider({ children }: IChildren) {
  const [list, setList] = useState<ILocationProps[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/locations')
      .then(response => setList(response.data))
  }, [])

  return (
    <BaseContext.Provider value={{ list, setList }}>
      {children}
    </BaseContext.Provider>
  )
}