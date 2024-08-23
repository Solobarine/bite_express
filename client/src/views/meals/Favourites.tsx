import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardTwo from "../../components/meals/CardTwo";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const navigate = useNavigate();
  return (
    <div className="grid p-2 gap-3">
      <div className="flex items-start gap-3">
        <button onClick={() => navigate(-1)} className="p-0">
          <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
        </button>
        <h3 className="text-xl font-semibold">My Favourite Meals</h3>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <CardTwo key={index} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
