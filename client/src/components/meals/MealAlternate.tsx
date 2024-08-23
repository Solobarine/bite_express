import { Link } from "react-router-dom";
import { MealInterface } from "../../types/meal";

const MealAlternate = ({
  meal,
}: {
  meal: Pick<MealInterface, "id" | "name" | "price" | "image">;
}) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg border border-transparent">
      <img
        src={meal.image}
        alt={meal.name}
        className="w-12 aspect-square rounded-md object-cover"
      />
      <div className="font-semibold text-base grow">
        <Link to={`/meals/${meal.id}`}>{meal.name}</Link>
        <p>${meal.price}</p>
      </div>
    </div>
  );
};

export default MealAlternate;
