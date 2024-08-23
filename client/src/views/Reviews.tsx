import { useDispatch, useSelector } from "react-redux";
import ReviewForm from "../components/ratings/Form";
import Ratings from "../components/ratings/Ratings";
import Review from "../components/ratings/Review";
import { AppDispatch, RootState } from "../features/store";
import MidLoading from "./MidLoading";
import Error from "./Error";
import { useEffect } from "react";
import reviewThunks from "../features/thunks/review";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { id } = useParams();
  const { isLoading, data } = useSelector(
    (state: RootState) => state.review.reviews
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewThunks.getReviews(id as string));
  }, []);

  console.log(data);

  return isLoading === "pending" ? (
    <MidLoading />
  ) : isLoading === "failed" ? (
    <Error />
  ) : (
    <div className="grid gap-6">
      <div className="grid items-start grid-cols-1 sm:grid-cols-2 gap-1">
        <div>
          <h2 className="text-2xl font-semibold pt-4 pb-2">Rating</h2>
          <Ratings
            total_reviews={data.total_reviews}
            average_rating={data.average_rating}
            grouped_reviews={data.grouped_reviews}
          />
        </div>
        <ReviewForm />
      </div>
      <h2 className="text-2xl font-semibold pt-4 pb-2">Reviews</h2>
      <div className="grid gap-3 px-3">
        {data.reviews.map((review, index) => (
          <Review key={index} data={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
