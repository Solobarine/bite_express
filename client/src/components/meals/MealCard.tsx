import React from "react";

const MealCard = () => {
  return (
    <div className="p-2 rounded-lg grid gap-2">
      <img src="#" alt="" className="w-full aspect-square rounded-lg" />
      <p className="text-xl font-semibold">Tasty Food Meal</p>
      <p className="text-green-600 font-semibold">$12.00</p>
    </div>
  );
};

export default MealCard;
