import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = ({
  total_reviews,
  average_rating,
  grouped_reviews,
}: {
  total_reviews: number;
  average_rating: number;
  grouped_reviews: { 1: number; 2: number; 3: number; 4: number; 5: number };
}) => {
  console.log(grouped_reviews);
  return (
    <div className="grid grid-cols-5 px-4">
      <div className="grid place-content-center gap-2 col-span-2">
        <p className="text-xl font-bold">{average_rating}</p>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStarHalf} className="text-amber-400" />
        </span>
        <p className="text-gray-500">( {total_reviews} reviews)</p>
      </div>
      <div className="grid gap-2 col-span-3">
        {[1, 2, 3, 4, 5].reverse().map((value, index) => {
          const ratings = Object.values(grouped_reviews).reverse() || [0];
          return (
            <span className="flex items-center gap-2 text-sm" key={index}>
              <p className="font-semibold">{value}</p>
              <input
                type="range"
                max={5}
                min={0}
                step={0.5}
                className="grow accent-green-500"
                value={(ratings[index] / total_reviews) * 10 || 0}
                readOnly
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
