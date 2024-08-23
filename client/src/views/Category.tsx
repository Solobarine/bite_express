import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import CardTwo from "../components/meals/CardTwo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import { useEffect } from "react";
import categoryThunks from "../features/thunks/category";
import Loading from "./Loading";
import Error from "./Error";

const Category = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const { isLoading, data } = useSelector(
    (state: RootState) => state.category.category
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.get(category as string));
  }, []);

  console.log(data);

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
      {isLoading === "pending" ? (
        <Loading />
      ) : isLoading === "failed" ? (
        <Error />
      ) : (
        <div className="flex items-center justify-around gap-3 flex-wrap">
          {data?.restaurants?.map((restaurant, index) => (
            <CardTwo key={index} data={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
