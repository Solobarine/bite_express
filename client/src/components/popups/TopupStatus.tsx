import { Link } from "react-router-dom";

const TopupStatus = () => {
  return (
    <>
      <div
        id="overlay"
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />
      <div className="p-5 rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg grid gap-5 z-10 min-w-80 bg-white dark:bg-zinc-700">
        <i className="bx bxs-wallet-alt text-4xl p-5 rounded-full bg-green-100 text-green-500 mx-auto" />
        <p className="text-lg text-green-500 text-center">
          Thank you for your order
        </p>
        <p className="text-sm text-center">
          We will continue to improve our service and satisfy you on the next
          order
        </p>
        <Link
          to="/wallet"
          className="py-3 text-sm text-white bg-green-500 rounded-full"
        >
          Ok
        </Link>
      </div>
    </>
  );
};

export default TopupStatus;
