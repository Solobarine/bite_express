import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardTwo from "../../components/meals/CardTwo";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import MidLoading from "../MidLoading";
import Error from "../Error";

const Favourites = () => {
  const { isLoading, data } = useSelector(
    (state: RootState) => state.restaurant.favourites
  );
  const navigate = useNavigate();
  return (
    <div className="grid p-2 gap-3">
      <div className="flex items-start gap-3">
        <button onClick={() => navigate(-1)} className="p-0">
          <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
        </button>
        <h3 className="text-xl font-semibold">My Favourite Restaurants</h3>
      </div>
      {isLoading === "pending" ? (
        <MidLoading />
      ) : isLoading === "failed" ? (
        <Error />
      ) : (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {data.map((restaurant, index) => (
            <CardTwo key={index} data={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
