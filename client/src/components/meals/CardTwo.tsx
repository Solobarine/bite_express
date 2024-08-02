import {
  faHeart,
  faMotorcycle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CardTwo = () => {
  return (
    <div className="p-3 rounded-xl shadow-xl w-full max-w-md flex items-center gap-2 bg-white dark:bg-zinc-700">
      <img
        src="/burger.png"
        alt=""
        className="rounded-xl bg-gray-200 dark:bg-white w-32 aspect-square object-contain"
      />
      <div className="grid py-2 gap-3 grow">
        <Link to="/meals/1" className="text-lg font-semibold">
          Vegetarian Noodles
        </Link>
        <span className="text-sm flex items-center gap-2">
          <p>1.5km</p>
          |
          <FontAwesomeIcon icon={faStar} className="text-amber-500" />
          <p>4.9</p>
          <p>(4.3k)</p>
        </span>
        <span className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-green-500">$6.00</p>
            <p>&#x2759;</p>
            <span className="flex items-center gap-3">
              <FontAwesomeIcon icon={faMotorcycle} className="text-green-500" />
              <p>$2.00</p>
            </span>
          </div>
          <button>
            <FontAwesomeIcon icon={faHeart} className="text-xl text-red-500" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CardTwo;
