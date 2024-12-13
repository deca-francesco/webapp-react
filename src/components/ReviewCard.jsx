export default function ReviewCard({ review }) {

    return (
        <div className="col">
            <div className="my_review_card">
                <h4>From: {review.name}</h4>
                <p>"{review.text}"</p>
                <p className="mb-0">Vote: {[1, 2, 3, 4, 5].map(n => <i key={n} className={`text-warning bi bi-star${n <= review.vote ? "-fill" : ""}`}></i>)}</p>
            </div>
        </div>
    )
}