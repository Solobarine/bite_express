import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faHeart, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { RestaurantInterface } from "../../types/restaurant";

const CardOne = ({ data }: { data: RestaurantInterface }) => {
  return (
    <div className="w-64 rounded-xl shrink-0 overflow-hidden bg-white dark:bg-zinc-700 p-4 shadow-lg">
      <img
        src={data.image}
        alt=""
        className="w-full aspect-square object-contain rounded-xl bg-gray-200 dark:bg-white"
      />
      <div className="grid gap-2">
        <Link to={`/restaurants/${data.id}`} className="text-lg font-semibold">
          {data.name}
        </Link>
        <span className="text-sm flex items-center gap-2">
          <p>1.5km</p>
          |
          <FontAwesomeIcon icon={faStar} className="text-amber-500" />
          <p>{data.average_rating}</p>
          <p>({data.total_reviews})</p>
        </span>
        <span className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-green-500">
              {data.meals_count} {data.meals_count === 1 ? "meal" : "meals"}
            </p>
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

export default CardOne;
