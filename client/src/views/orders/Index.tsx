import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "react-router-dom";
import { orders } from "../../data";
import OrderCard from "../../components/orders/OrderCard";
import { useEffect, useRef, useState } from "react";
import Empty from "../../components/orders/Empty";

const OrdersIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [scrollPosition, setScrollPosition] = useState(0);
  const status = searchParams.get("status");
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const filteredOrders = orders.filter((order) => order.status === status);

  return (
    <div className="p-2 grid gap-3">
      <div className="flex items-center gap-3 justify-between">
        <h3 className="text-xl font-semibold">Transactions</h3>
        <span className="flex items-center gap-3">
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              className="p-2 rounded-full border border-gray-300 shadow-sm"
            />
          </button>
        </span>
      </div>
      <div
        ref={ref}
        className={`grid grid-cols-3 sm:max-w-md sticky sm:regular top-14 py-3 ${
          scrollPosition > 56
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-md"
            : ""
        }`}
      >
        <button
          className={`px-4 py-2 border-b-2 ${
            status?.toLowerCase() === "active"
              ? "border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setSearchParams({ status: "active" })}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            status?.toLowerCase() === "completed"
              ? "border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setSearchParams({ status: "completed" })}
        >
          Completed
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            status?.toLowerCase() === "cancelled"
              ? "border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setSearchParams({ status: "cancelled" })}
        >
          Cancelled
        </button>
      </div>
      {filteredOrders.length < 1 ? (
        <Empty />
      ) : (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredOrders.map((order, index) => (
            <OrderCard order={order} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersIndex;
