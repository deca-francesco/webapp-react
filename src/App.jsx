import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import NotFound from './pages/NotFound'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import { useEffect, useState } from 'react'

function App() {

  const api_server = import.meta.env.VITE_MOVIES_DB_SERVER
  const end_point = import.meta.env.VITE_MOVIES_DB_END_POINT

  const [moviesData, setMoviesData] = useState([])

  function fetchMovies(url = `${api_server}${end_point}`) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMoviesData(data.data)
      }).catch(err => console.error(err))
  }

  useEffect(fetchMovies, [])

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />} >
            <Route index path='movies' element={<MoviesPage moviesData={moviesData} />} />
            <Route path='movies/:id' element={<MovieDetailsPage api_server={api_server} end_point={end_point} />} />

            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
