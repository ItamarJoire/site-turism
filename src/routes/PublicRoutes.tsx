import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage, LocationDetailPage } from '../pages'

export function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='detalhe-do-local/:id' element={<LocationDetailPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}