import { useEffect, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

import axios from 'axios'

interface ILocationData {
  list: ILocationData[]
  setList: Dispatch<SetStateAction<ILocationData[]>>
}

interface IChildren {
  children: ReactNode
}

export const BaseContext = createContext({} as ILocationData)

export function BaseContextProvider({ children }: IChildren) {
  const [list, setList] = useState<ILocationData[]>([])

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