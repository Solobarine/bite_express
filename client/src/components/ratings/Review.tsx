import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = () => {
  return (
    <div className="grid gap-3 p-4 shadow-md">
      <div className="flex items-center gap-3 justify-between">
        <span className="flex items-center gap-3">
          <img
            src="#"
            alt=""
            className="w-8 aspect-square rounded-full shadow-md"
          />
          <p className="text-lg font-semibold">Jeremy Broiner</p>
        </span>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStarRegular} className="text-amber-400" />
        </span>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum
        ad rerum quisquam mollitia dolore officia quo, quaerat sequi sit!
      </p>
      <span className="flex items-center gap-4">
        <span className="flex gap-3 items-end">
          <button>
            <FontAwesomeIcon icon={faHeart} className="text-rose-500" />
          </button>
          <p>6 days ago</p>
        </span>
      </span>
    </div>
  );
};

export default Review;
