const Card = ({
  item,
  index,
  active,
  handleClick,
}: {
  item: { dish: string; description: string; image: string };
  index: number;
  active: number;
  handleClick: () => void;
}) => {
  return (
    <div
      className={`${index > 2 ? "rounded-r-full pr-10" : "rounded-l-full"} ${
        active === index
          ? "bg-orange-700 text-white"
          : "bg-black/30 text-gray-600"
      } p-4 px-5 flex items-center gap-3`}
      onClick={handleClick}
    >
      <img
        src={item.image}
        alt={item.dish}
        className="w-20 rounded-full aspect-square"
      />
      <div className="grid gap-3 dark:text-gray-100">
        <span className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-semibold">{item.dish}</h3>
          <button
            className={`px-3 py-1 rounded-tl-xl rounded-br-xl text-nowrap ${
              active === index
                ? "bg-orange-200 text-orange-700"
                : "text-white bg-orange-700"
            } shadow-md`}
          >
            Order Now
          </button>
        </span>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
