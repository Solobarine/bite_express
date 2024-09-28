import Reviews from "../components/home/review/Index";
import Hero from "../components/home/hero/Index";
import PopularDishes from "../components/home/Popular/Dishes/Index";
import Card from "../components/home/abilities/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import { useEffect } from "react";
import categoryThunks from "../features/thunks/category";
import { useNavigate } from "react-router-dom";
import { toggleIsLogin } from "../features/slices/general";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");
  const dispatch: AppDispatch = useDispatch();
  const {
    sample: { data },
  } = useSelector((state: RootState) => state.category);
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(data);

  const viewCategory = (name: string) => {
    if (!user.isLoggedIn && !token) {
      dispatch(toggleIsLogin(true));
    } else {
      navigate(`categories/${name}`);
    }
  };

  useEffect(() => {
    dispatch(categoryThunks.sample());
  }, []);
  return (
    <div>
      <Hero />
      <div className="py-10 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          Meals That Our Users <br /> Love the Most
        </h1>
        <PopularDishes />
      </div>
      <div className="py-10 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold px-4">
          We Serve Healthy Food <br /> for a Healty Lifestyle
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
          {data.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-b-md overflow-hidden shadow-lg max-w-60 mx-auto"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full aspect-video object-cover"
              />
              <div className="p-2">
                <p>{category.name}</p>
                <button
                  className="block w-fit text-sm px-2 ml-auto hover:text-green-500"
                  onClick={() => viewCategory(category.name)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          Our Offerings Curated for You
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto px-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div id="reviews" className=" py-10 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          What Our Happy Customers <br /> Say About Us
        </h1>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
