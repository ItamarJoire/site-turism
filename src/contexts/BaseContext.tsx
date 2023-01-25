export { }

// import { useEffect, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

// import axios from 'axios'

// interface IImg {
//   image: string
// }

// interface IInformationLocation {
//   id: number
//   title: string
//   description: string
//   images: IImg[]
// }

// interface ILocationArray {
//   name?: string
//   restaurants: IInformationLocation[]
// }

// interface ILocationData {
//   locations: ILocationArray[]
// }

// interface IChildren {
//   children: ReactNode
// }

// export const BaseContext = createContext({} as ILocationData)

// export function BaseContextProvider({ children }: IChildren) {
//   const [list, setList] = useState<ILocationData[]>([])

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/locations')
//       .then(response => setList(response.data))
//   }, [])

//   return (
//     <BaseContext.Provider value={{ list, setList }}>

//       {children}
//     </BaseContext.Provider>
//   )
// }