import MovieCard from "../components/MovieCard"
import { useGlobalContext } from "../contexts/GlobalContext"


export default function MoviesPage() {

    const { moviesData } = useGlobalContext()

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