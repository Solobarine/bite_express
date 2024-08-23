import { useState } from "react";
import FoodCard from "./FoodCard";

const FoodCaurasel = () => {
  return (
    <div className="relative lg:absolute bg-[url('/dark-granite.avif')] dark:bg-[url('/light-granite.avif')] lg:-top-48 rounded-full max-w-[90%] w-full lg:-right-1/2 lg:h-[160dvh] aspect-square bg-slate-400">
      <FoodCard />
    </div>
  );
};

export default FoodCaurasel;
