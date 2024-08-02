import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TransactionCard = () => {
  return (
    <div className="p-3 rounded-lg flex items-center gap-3 justify-between">
      <span className="flex items-center gap-3">
        <img
          src=""
          alt=""
          className="w-10 aspect-square rounded-full shadow-md bg-gray-300"
        />
        <span>
          <p className="text-lg font-semibold">Big Garden Salad</p>
          <span className="flex items-center gap-3 text-sm text-gray-500">
            <p>Jul 12, 2024</p>
            <p>&#10073;</p>
            <p>16:00PM</p>
          </span>
        </span>
      </span>
      <span>
        <p className="font-semibold text-sm">$21.20</p>
        <span className="text-xs flex items-center gap-2">
          <p className="text-gray-500">Orders</p>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-white p-1 bg-green-500 rounded-md"
          />
        </span>
      </span>
    </div>
  );
};

export default TransactionCard;
