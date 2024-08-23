import {
  faChevronRight,
  faLocationDot,
  faMotorcycle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../features/store";
import { useEffect } from "react";
import restaurantThunks from "../../features/thunks/restaurant";
import Loading from "../Loading";
import Error from "../Error";
import MealAlternate from "../../components/meals/MealAlternate";

const Show = () => {
  const { id } = useParams();
  const { isLoading, data } = useSelector(
    (state: RootState) => state.restaurant.restaurant
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(restaurantThunks.restaurant(id as string));
  }, []);

  console.log(data);

  return isLoading === "pending" ? (
    <Loading />
  ) : isLoading === "failed" ? (
    <Error />
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-10">
      <img
        src={data?.image}
        alt=""
        className="w-full aspect-square max-w-lg lg:max-w-full mx-auto object-contain bg-gray-200 rounded-2xl"
      />
      <div className="p-2">
        <div>
          <div className="divide-y divide-gray-300">
            <span className="flex items-center gap-3 justify-between py-2">
              <h3 className="text-2xl md:text-4xl font-semibold">
                {data?.name}
              </h3>
              <button onClick={() => navigate(`/restaurants/${data?.id}/info`)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </span>
            <span className="flex items-center gap-3 justify-between py-2">
              <span className="flex items-center gap-3">
                <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                <p>{data?.average_rating}</p>
                <p>({data?.total_reviews} reviews)</p>
              </span>
              <button
                onClick={() => navigate(`/restaurants/${data?.id}/reviews`)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </span>
            <span className="flex items-center gap-3 justify-between py-2">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-green-500"
                />
                <span>
                  <p>2.8km</p>
                  <span className="flex items-center gap-2 text-sm font-gray-500">
                    <p>Delivery Now</p>
                    <p>&#x2759;</p>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faMotorcycle}
                        className="text-green-500"
                      />
                      $2.00
                    </p>
                  </span>
                </span>
              </span>
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </span>
            <span className="flex items-center gap-3 justify-between py-2">
              <span className="flex items-center gap-2">
                <i className="bx bxs-offer text-green-500" />
                <p>Available Offers</p>
              </span>
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm mt-1">{data?.description}</p>
        <div className="grid gap-2 min-h-48">
          <h2 className="text-lg font-semibold">Menu</h2>
          <div className="mealGrid">
            {data?.meals?.map((meal, index) => (
              <MealAlternate key={index} meal={meal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
