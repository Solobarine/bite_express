import Ratings from "../components/ratings/Ratings";
import Review from "../components/ratings/Review";

const Reviews = () => {
  return (
    <div className="grid gap-6">
      <h2 className="text-xl font-semibold py-4">Ratings & Reviews</h2>
      <Ratings />
      <div className="grid gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((__, index) => (
          <Review key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
