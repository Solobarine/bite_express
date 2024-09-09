import { useState } from "react";
import { bestDishes } from "../../../../data";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [active, setActive] = useState(1);
  const [meal, setMeal] = useState(
    bestDishes[active] || { dish: "", description: "", image: "" }
  );
  const [seek, setSeek] = useState(false);

  const handleClick = (
    index: number,
    dish: { dish: string; description: string; image: string }
  ) => {
    setActive(index);
    setMeal(dish);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      <div className="max-w-60 mx-auto">
        <img
          src={meal.image}
          alt={meal.dish}
          className="w-full aspect-square rounded-xl bg-gray-300 object-conver"
        />
        <p className="text-2xl font-semibold text-center mt-2">{meal.dish}</p>
      </div>
      <div className="p-2">
        <div className="grid gap-4">
          {bestDishes.map((dish, index) => {
            const condition = seek ? index > 2 : index < 3;
            return (
              condition && (
                <Card
                  key={index}
                  item={dish}
                  index={index}
                  active={active}
                  handleClick={() => handleClick(index, dish)}
                />
              )
            );
          })}
        </div>
        <span className="flex gap-2 items-center justify-end p-2">
          <button onClick={() => setSeek(false)}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className={`text-4xl rounded-full ${
                seek ? "text-orange-500" : "text-gray-400"
              }`}
            />
          </button>
          <button onClick={() => setSeek(true)} className="rounded-full">
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              className={`text-4xl rounded-full  ${
                seek ? "text-gray-400" : "text-orange-500"
              }`}
            />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Index;
