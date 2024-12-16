import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";


export default function InsertReviewForm({ movie_id }) {

    const [username, setUsername] = useState("")
    const [review, setReview] = useState("")
    const [vote, setVote] = useState(0)
    const [success, setSuccess] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const { api_server, end_point } = useGlobalContext();


    function HandleFormToggle() {
        document.querySelector(".my_review_form_card").classList.toggle('d-none')
    }


    function HandleFormSubmit(e) {
        e.preventDefault()
        // console.log(e.target)

        if (username.length < 2 || review.length < 5 || vote == 0) {
            setErrorMsg("Please fill all fields in the form")

        } else {
            setErrorMsg(null)

            const formData = {
                username,
                review,
                vote
            }

            console.log(formData)

            const review_url = `${api_server}${end_point}/${movie_id}/review`

            fetch(review_url, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.success) {
                        setSuccess("Thanks for your review")
                        setUsername("")
                        setReview("")
                        setVote(0)

                        setTimeout(HandleFormToggle, 1000)
                        setTimeout(() => setSuccess(null), 3000)
                    }

                }).catch(err => console.log(err))


        }
    }

    // useEffect(fetchMovieDetails, [success])

    return (

        <div className="container mt-5">

            {success && <div>{success}</div>}

            <h3>Leave your review</h3>

            <button onClick={HandleFormToggle} className="btn btn-dark mb-2 show_form" >Write a review</button>

            <div className="my_review_form_card d-none">

                <form id="review_form" onSubmit={HandleFormSubmit}>

                    <div className="mb-3">
                        <label htmlFor="username">Your user name</label>
                        <input name="username" id="username" type="text" className="form-control" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <p className="mb-0">Your vote</p>
                    <div className="vote text-warning mb-3">
                        {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? "-fill" : ""}`} onClick={() => setVote(n)} ></i>)}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review">Your review</label>
                        <textarea name="review" id="review" className="form-control" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Submit review</button>
                        {errorMsg && <span className="text-danger"> <i className="bi bi-x"></i> {errorMsg}</span>}
                    </div>

                </form>

            </div>
        </div>

    )
}