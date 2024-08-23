import { useEffect, useState } from "react";
import FoodCaurasel from "./FoodCaurasel";
import { heroTextContent } from "../../../data/hero";

const Index = () => {
  const [active, setActive] = useState(0);
  setTimeout(() => {
    if (active === heroTextContent.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, 4000);
  useEffect(() => {}, []);
  return (
    <div className="relative h-screen overflow-hidden px-4 md:px-24">
      <div className="mt-28">
        {heroTextContent.map((data, index) => (
          <div
            key={index}
            className={`${
              index === active
                ? "scale-100 relative opacity-100"
                : "scale-0 absolute opacity-0"
            } transition-all duration-700`}
          >
            <h2 className="text-3xl sm:text-5xl font-semibold max-w-lg">
              {data.main_text}
            </h2>
            <p className="max-w-96 my-10">{data.sub_text}</p>
          </div>
        ))}
        <div className="items-center p-2 grid grid-cols-2 gap-4 max-w-md">
          <button className="shadow-lg text-white bg-green-600 rounded-tl-xl rounded-br-xl py-3">
            Sign In
          </button>
          <button className="shadow-lg text-white bg-red-600 rounded-tl-xl rounded-br-xl py-3">
            Get Started
          </button>
        </div>
      </div>
      <FoodCaurasel />
    </div>
  );
};

export default Index;
