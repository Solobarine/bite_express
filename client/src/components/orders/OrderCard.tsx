const OrderCard = ({
  order,
}: {
  order: {
    name: string;
    price: number;
    distance: number;
    number: number;
    status: string;
  };
}) => {
  return (
    <div className="rounded-3xl p-3 shadow-lg bg-white dark:bg-zinc-700">
      <span className="flex items-center gap-1">
        <img
          src=""
          alt=""
          className="w-28 aspect-square rounded-lg bg-gray-300 dark:bg-white"
        />
        <span className="grid gap-2">
          <p className="text-lg font-semibold">{order.name}</p>
          <span className="flex items-center gap-3 text-sm text-gray-500">
            <p></p>
            <p></p>
            <p></p>
          </span>
          <span className="flex items-center gap-4">
            <p className="font-semibold text-green-500">${order.price}</p>
            <span
              className={`text-xs px-4 py-1 rounded-lg ${
                order.status == "cancelled"
                  ? "border border-rose-500 text-rose-500"
                  : "text-white border border-green-500 bg-green-500"
              }`}
            >
              {order.status === "active" ? "Paid" : order.status}
            </span>
          </span>
        </span>
      </span>
      {order.status === "active" ? (
        <span className="grid gap-3 mt-5">
          <button className="border border-green-500 text-green-500 rounded-full py-2">
            Cancel Order
          </button>
          <button className="border border-green-500 bg-green-500 text-white rounded-full py-2">
            Track Delivery
          </button>
        </span>
      ) : order.status === "completed" ? (
        <span className="grid gap-3 mt-5">
          <button className="border border-green-500 text-green-500 rounded-full py-2">
            Leave a Review
          </button>
          <button className="border border-green-500 bg-green-500 text-white rounded-full py-2">
            Order Again
          </button>
        </span>
      ) : null}
    </div>
  );
};

export default OrderCard;
