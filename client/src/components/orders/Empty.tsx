const Empty = () => {
  return (
    <div className="grid place-content-center gap-3 min-h-[60dvh]">
      <img src="/list-dark.png" alt="" className="w-40 dark:hidden mx-auto" />
      <img
        src="/list-light.png"
        alt=""
        className="w-40 hidden dark:block mx-auto"
      />
      <span>
        <p className="text-xl font-semibold text-center">Empty</p>
        <p className="text-sm">You do not have an order at this time</p>
      </span>
    </div>
  );
};

export default Empty;
