import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {



    return (
        <div className="col">
            <div className="card my_movie_card">
                <div className="card-body">
                    <h4>{movie.title}</h4>
                    <p><strong>{movie.director}</strong></p>
                    <p>{movie.release_year}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}