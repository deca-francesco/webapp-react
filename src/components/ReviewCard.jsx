export default function ReviewCard({ review }) {

    return (
        <div className="col">
            <div className="my_review_card">
                <h4>From: {review.name}</h4>
                <p>"{review.text}"</p>
                <p className="mb-0">Vote: {review.vote}/5</p>
            </div>
        </div>
    )
}