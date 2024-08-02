import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransactionCard from "../../components/transaction/TransactionCard";

const Transactions = () => {
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
      <div className="mt-4 min-h-60">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((__, index) => (
          <TransactionCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
