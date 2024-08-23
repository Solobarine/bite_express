const FoodCard = () => {
  return (
    <div className="sm:absolute sm:-left-40 sm:top-1/2 sm:transform sm:-translate-y-1/2 grid scale-50 sm:scale-100">
      <img
        src="/plates/plate-1.avif"
        alt=""
        className="w-80 rounded-full aspect-square z-10 shadow-2xl shadow-black"
      />
      <div className="w-44 h-44 bg-orange-600 -mt-24 p-6 mx-auto flex flex-col items-center justify-end rounded-lg">
        <span className="text-lg text-white flex items-center justify-between w-full">
          <p>Salad</p>
          <p>4.5</p>
        </span>
        <p className="border border-white rounded-full bg-gray-800 text-center text-white text-sm px-2 py-0 5 w-full">
          18 - 20 min
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
