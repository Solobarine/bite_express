import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import CardTwo from "../components/meals/CardTwo";

const Category = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  return (
    <div className="grid p-2 gap-3">
      <div className="flex items-start gap-3">
        <button onClick={() => navigate(-1)} className="p-0">
          <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
        </button>
        <h3 className="text-xl font-semibold">
          {(category?.slice(0, 1).toUpperCase() as string) + category?.slice(1)}
        </h3>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((__, index) => (
          <CardTwo key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
