import { Link } from "react-router-dom";
import Category from "../components/Category";
import CardOne from "../components/meals/CardOne";
import CardTwo from "../components/meals/CardTwo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import MidLoading from "./MidLoading";
import Error from "./Error";
import { useEffect } from "react";
import restaurantThunks from "../features/thunks/restaurant";
import categoryThunks from "../features/thunks/category";

const Dashboard = () => {
  const { discounted, recommended } = useSelector(
    (state: RootState) => state.restaurant
  );
  const { categories } = useSelector((state: RootState) => state.category);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(categoryThunks.categories()),
      dispatch(restaurantThunks.discounted()),
      dispatch(restaurantThunks.recommended()),
    ]);
  }, []);

  console.log(categories.data, recommended.data);

  return (
    <div className="grid gap-3 px-2">
      <div className="flex items-center gap-3 justify-between py-2">
        <div className="flex items-center gap-3">
          <img
            src=""
            alt=""
            className="w-10 aspect-square rounded-full shadow-sm bg-gray-300"
          />
          <div>
            <p className="font-light">Deliver To</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/notifications"
            className="py-1 px-2 rounded-full border border-gray-300"
          >
            <i className="bx bx-bell"></i>
          </Link>
          <Link
            to="/cart"
            className="py-1 px-2 rounded-full border border-gray-300"
          >
            <i className="bx bx-shopping-bag"></i>
          </Link>
        </div>
      </div>
      <input
        type="search"
        name="search"
        id="search"
        className="p-3 rounded-lg outline-gray-300 bg-gray-200 text-sm dark:bg-zinc-600"
        placeholder="What are You craving?"
      />
      {categories.isLoading === "pending" ? (
        <MidLoading />
      ) : categories.isLoading === "failed" ? (
        <Error />
      ) : (
        <div className="flex items-center flex-wrap justify-center sm:justify-start gap-y-5 gap-x-2">
          {categories.data.map(
            (category, index) =>
              index <= 6 && (
                <Category
                  key={index}
                  name={category.name}
                  image={category.image}
                />
              )
          )}
          <Link
            to={`/categories`}
            className="grid place-content-center min-w-20 gap-2"
          >
            <img
              src="#"
              alt="More"
              className="w-12 mx-auto aspect-square object-cover rounded-full"
            />
            <p className="font-semibold text-center">More</p>
          </Link>
        </div>
      )}
      <div className="grid gap-3">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-xl font-semibold">Discounts 👌</h2>
          <button className="text-green-400">See All</button>
        </div>
        {discounted.isLoading === "pending" ? (
          <MidLoading />
        ) : discounted.isLoading === "failed" ? (
          <Error />
        ) : (
          <div className="overflow-x-auto flex items-center gap-3 pb-10">
            {discounted.data.map((restaurant, index) => (
              <CardOne key={index} data={restaurant} />
            ))}
          </div>
        )}
      </div>
      <div className="grid gap-3 mt-10">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-xl font-semibold">Recommended for You 😍</h2>
          <button className="text-green-400">See All</button>
        </div>
        {recommended.isLoading === "pending" ? (
          <MidLoading />
        ) : recommended.isLoading === "failed" ? (
          <Error />
        ) : (
          <div className="flex flex-wrap gap-4 pb-10">
            {recommended.data.map((restaurant, index) => (
              <CardTwo key={index} data={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
