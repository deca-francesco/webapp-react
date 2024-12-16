import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import NotFound from './pages/NotFound'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import { useEffect, useState } from 'react'
import GlobalContext from './contexts/GlobalContext'


function App() {

  const api_server = import.meta.env.VITE_MOVIES_DB_SERVER
  const end_point = import.meta.env.VITE_MOVIES_DB_END_POINT

  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)

  const values = {
    loading,
    setLoading
  }

  function fetchMovies(url = `${api_server}${end_point}`) {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMoviesData(data.data)
        setLoading(false)
      }).catch(err => console.error(err))
  }

  useEffect(fetchMovies, [])

  return (
    <>
      <GlobalContext.Provider value={values} >
        <BrowserRouter>
          <Routes>

            <Route element={<AppLayout />} >
              <Route index path='movies' element={<MoviesPage moviesData={moviesData} />} />
              <Route path='movies/:id' element={<MovieDetailsPage api_server={api_server} end_point={end_point} />} />

              <Route path='*' element={<NotFound />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
