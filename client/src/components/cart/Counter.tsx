const Counter = ({
  item,
  increment,
  decrement,
}: {
  item: any;
  increment: (meal: any) => void;
  decrement: (meal: any) => void;
}) => {
  return (
    <div className="text-sm border flex w-fit mx-auto">
      <button
        className="aspect-square w-9 font-semibold text-lg"
        onClick={increment}
      >
        +
      </button>
      <input
        type="number"
        value={item.quantity}
        className="w-10 p-1 text-center font-bold bg-transparent"
        readOnly
      />
      <button
        className="aspect-square w-9 font-semibold text-lg"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
