import Reviews from "../components/home/review/Index";
import Hero from "../components/home/hero/Index";
import PopularDishes from "../components/home/Popular/Dishes/Index";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="py-24 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          Meals That Our Users <br /> Love the Most
        </h1>
        <PopularDishes />
      </div>
      <div className="py-24 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          We Serve Healthy Food <br /> for a Healty Lifestyle
        </h1>
      </div>

      <div id="reviews" className=" py-24 grid gap-14">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          What Our Happy Customers <br /> Say About Us
        </h1>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
