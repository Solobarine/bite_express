import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div className="p-8 rounded-3xl text-white bg-green-500 flex flex-col gap-6 shadow-2xl">
      <span className="flex items-center gap-3 justify-between">
        <span>
          <p className="font-semibold">Authur Morgan</p>
          <p className="text-xs font-semibold mt-1">**** **** **** 3456</p>
        </span>
        <img src="/visa.svg" alt="" className="h-6" />
      </span>
      <span>
        <p className="text-xs">Your Balance</p>
        <span className="flex items-center justify-between mt-3">
          <p className="text-4xl font-semibold">9, 000</p>
          <Link
            to="/top-up"
            className="px-2 rounded-full py-1 bg-white text-gray-600 shadow-md flex items-center gap-2"
          >
            <i className="bx bxs-wallet-alt"></i>
            <p>Top up</p>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Wallet;
