import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import ReviewCard from "../components/ReviewCard"

export default function MovieDetailsPage({ api_server, end_point }) {

    const { id } = useParams()

    const [movieDetails, setMovieDetails] = useState({})

    function fetchMovieDetails(url = `${api_server}${end_point}/${id}`) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovieDetails(data.data)
            })
    }

    useEffect(fetchMovieDetails, [])

    return (
        <>
            <div className="container">
                <h2>Movie details:</h2>
                <div className="my_movie_details_card mb-4">
                    <h4><strong>Title: </strong>{movieDetails.title}</h4>
                    <p><strong>Director: </strong>{movieDetails.director}</p>
                    <p><strong>Year: </strong>{movieDetails.release_year}</p>
                    <p><strong>Genre: </strong>{movieDetails.genre}</p>
                    <p><strong>Abstract: </strong>{movieDetails.abstract}</p>
                </div>
                <h5>Reviews:</h5>
                <div className="row row-cols-1 g-3">
                    {movieDetails.reviews?.map(review => <ReviewCard review={review} key={review.id} />)}
                </div>
            </div>
        </>
    )
}