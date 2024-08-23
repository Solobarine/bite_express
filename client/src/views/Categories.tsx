import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect } from "react";
import categoryThunks from "../features/thunks/category";

const Categories = () => {
  const { isLoading, data } = useSelector(
    (state: RootState) => state.category.categories
  );
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.categories());
  }, []);

  return (
    <div className="p-2 grid gap-3">
      <div className="flex items-start gap-3">
        <button onClick={() => navigate(-1)} className="p-0">
          <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
        </button>
        <h3 className="text-xl font-semibold">More Categories</h3>
      </div>
      {isLoading === "pending" ? (
        <Loading />
      ) : isLoading === "failed" ? (
        <Error />
      ) : (
        <div className="mt-4 flex items-center gap-3 justify-center sm:justify-start flex-wrap">
          {data.map(
            (category, index) =>
              category.name !== "More" && (
                <Category
                  key={index}
                  name={category.name}
                  image={category.image}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
