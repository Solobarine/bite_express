const Item = () => {
  return (
    <div className="p-3 rounded-xl shadow-md flex items-center gap-2 bg-white dark:bg-zinc-700">
      <img
        src="/pizza.png"
        alt=""
        className="w-24 aspect-square object-contain rounded-lg bg-gray-200 dark:bg-white"
      />
      <div className="grid gap-1 grow">
        <p className="text-lg font-semibold">Japanese Kunpanage</p>
        <p></p>
        <span className="text-2xl flex items-center gap-2 w-fit">
          <button className="rounded-l-md px-2 text-white bg-green-500">
            +
          </button>
          <p className="font-semibold">5</p>
          <button className="rounded-r-md px-2 text-white bg-green-500">
            -
          </button>
        </span>
        <p>
          <strong>Price: </strong>$18.00
        </p>
      </div>
    </div>
  );
};

export default Item;
