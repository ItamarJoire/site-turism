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
  commerce: IProps[]
}

interface ILocationData {
  list: ILocationProps[]
  setList: Dispatch<SetStateAction<ILocationProps[]>>
}

interface IChildren {
  children: ReactNode
}

export const DatabaseContext = createContext({} as ILocationData)

export function DatabaseContextProvider({ children }: IChildren) {
  const [list, setList] = useState<ILocationProps[]>([])

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/locations')
      const data = response.data
      setList(data)

    } catch (error) {
      console.log('ERROR:', error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <DatabaseContext.Provider value={{ list, setList }}>
      {children}
    </DatabaseContext.Provider>
  )
}