import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = () => {
  return (
    <div className="grid grid-cols-5 px-4">
      <div className="grid place-content-center gap-2 col-span-2">
        <p className="text-xl font-bold">4.8</p>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStarHalf} className="text-amber-400" />
        </span>
        <p className="text-gray-500">(4.8k reviews)</p>
      </div>
      <div className="grid gap-2 col-span-3">
        {[1, 2, 3, 4, 5].reverse().map((value, index) => (
          <span className="flex items-center gap-2 text-sm" key={index}>
            <p className="font-semibold">{value}</p>
            <input
              type="range"
              max={10}
              min={0}
              className="grow accent-green-500"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
