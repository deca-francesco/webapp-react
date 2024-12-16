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

  const [loading, setLoading] = useState(false)

  const values = {
    api_server,
    end_point,
    loading,
    setLoading
  }


  return (
    <>
      <GlobalContext.Provider value={values} >
        <BrowserRouter>
          <Routes>

            <Route element={<AppLayout />} >
              <Route index path='movies' element={<MoviesPage />} />
              <Route path='movies/:id' element={<MovieDetailsPage />} />

              <Route path='*' element={<NotFound />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
