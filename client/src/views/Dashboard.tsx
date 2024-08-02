import { Link } from "react-router-dom";
import Category from "../components/Category";
import CardOne from "../components/meals/CardOne";
import CardTwo from "../components/meals/CardTwo";
import { categories } from "../data";

const Dashboard = () => {
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

      <div className="flex items-center flex-wrap justify-center gap-y-5 gap-x-2">
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            imageURI={category.imageURI}
            link={category.link}
          />
        ))}
      </div>
      <div className="grid gap-3">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-xl font-semibold">Discounts 👌</h2>
          <button className="text-green-400">See All</button>
        </div>
        <div className="overflow-x-auto flex items-center gap-3 pb-10">
          {[1, 2, 3, 4].map((__, index) => (
            <CardOne key={index} />
          ))}
        </div>
      </div>
      <div className="grid gap-3 mt-10">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-xl font-semibold">Recommended for You 😍</h2>
          <button className="text-green-400">See All</button>
        </div>
        <div className="flex flex-wrap gap-4 pb-10">
          {[1, 2, 3, 4].map((__, index) => (
            <CardTwo key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
