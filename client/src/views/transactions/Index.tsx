import { faEllipsis, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wallet from "../../components/transaction/Wallet";
import TransactionCard from "../../components/transaction/TransactionCard";
import { Link } from "react-router-dom";

const TransactionIndex = () => {
  return (
    <div className="p-2 grid gap-3">
      <div className="flex items-center gap-3 justify-between">
        <h3 className="text-xl font-semibold">E-Wallet</h3>
        <span className="flex items-center gap-3">
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              className="p-2 rounded-full border border-gray-300 shadow-sm"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faEllipsis}
              className="p-2 rounded-full border border-gray-300 shadow-sm"
            />
          </button>
        </span>
      </div>
      <Wallet />
      <div className="mt-8 min-h-60">
        <div className="flex items-center gap-3 justify-between">
          <h4 className="text-lg font-semibold">Transaction History</h4>
          <Link to="/transactions" className="text-sm text-green-500">
            See All
          </Link>
        </div>
        <div className="mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((__, index) => (
            <TransactionCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionIndex;
