import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    const api_server = import.meta.env.VITE_MOVIES_DB_SERVER
    const end_point = import.meta.env.VITE_MOVIES_DB_END_POINT

    const [loading, setLoading] = useState(false)
    const [moviesData, setMoviesData] = useState([])

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


    const [movieDetails, setMovieDetails] = useState({})

    function fetchMovieDetails(id) {
        setLoading(true)
        const url = `${api_server}${end_point}/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovieDetails(data.data)
                setLoading(false)
            }).catch(err => console.error(err))
    }



    const values = {
        api_server,
        end_point,
        loading,
        setLoading,
        moviesData,
        setMoviesData,
        fetchMovieDetails,
        movieDetails,
        setMovieDetails
    }


    return (
        <GlobalContext.Provider value={values} >
            {children}
        </GlobalContext.Provider>
    )

}



function useGlobalContext() {
    return useContext(GlobalContext);
}


export { GlobalContextProvider, useGlobalContext }