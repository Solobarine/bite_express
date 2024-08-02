import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Category from "../components/Category";
import { categories } from "../data";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="p-2 grid gap-3">
      <div className="flex items-start gap-3">
        <button onClick={() => navigate(-1)} className="p-0">
          <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
        </button>
        <h3 className="text-xl font-semibold">More Categories</h3>
      </div>
      <div className="mt-4 flex items-center gap-3 justify-start flex-wrap">
        {categories.map(
          (category, index) =>
            category.name !== "More" && (
              <Category
                key={index}
                name={category.name}
                imageURI={category.imageURI}
                link={category.link}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Categories;
