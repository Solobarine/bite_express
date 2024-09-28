const Card = () => {
  return (
    <div className="w-full flex gap-3 items-start bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-lg">
      <i className="block shrink-0 w-8 h-8 rounded-sm bg-blue-300" />
      <div>
        <p className="font-semibold text-lg">Lorem ipsum dolor sit.</p>
        <p className="text-sm opacity-90 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam
          accusamus. Optio, dolorum consequatur?
        </p>
        <button className="flex items-center gap-2 mt-10 px-2">
          <p className="text-sm">Discover More</p>
          <i />
        </button>
      </div>
    </div>
  );
};

export default Card;
