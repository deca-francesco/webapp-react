import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import NotFound from './pages/NotFound'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />} >
            <Route index element={<MoviesPage />} />
            <Route path='movies/:id' element={<MovieDetailsPage />} />

            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
