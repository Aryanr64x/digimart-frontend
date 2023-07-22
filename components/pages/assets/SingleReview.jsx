import StarredRating from "./StarredRating";

const SingleReview = ({ review }) => {
    return (
        <div className="mt-4 bg-slate-50 px-4 py-8">
            <div className="font-bold text-lg">
                {review.user.username}

            </div>

            <div className="flex items-center">

                <div className="mr-2 text-xl">
                    {review.rating}
                </div>

                <div>
                    <StarredRating rating={review.rating} />
                </div>

            </div>
            <div className="mt-0">
                {review.body}
            </div>

        </div>
    )
}

export default SingleReview;