import { useContext, useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import GlobalContext from "../contexts/GlobalContext"


export default function MoviesPage() {

    const { api_server, end_point, setLoading } = useContext(GlobalContext)

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


    return (
        <>
            <div className="container">
                <h2>All movies</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-4">
                    {moviesData?.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </>
    )
}