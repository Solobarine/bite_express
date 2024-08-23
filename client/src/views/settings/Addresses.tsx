import { useEffect, useState } from "react";
import Address from "../../components/settings/Address/Address";
import Form from "../../components/settings/Address/Form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store";
import addressThunks from "../../features/thunks/address";
import MidLoading from "../MidLoading";
import Error from "../Error";
import Toast from "../../components/Toast";

const Addresses = () => {
  const [isOpen, toggleIsOpen] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const { isLoading, data } = useSelector(
    (state: RootState) => state.address.addresses
  );

  useEffect(() => {
    dispatch(addressThunks.getAll());
  }, []);

  return (
    <div className="flex justify-between flex-wrap relative min-h-lvh gap-8 py-4">
      <Toast />
      <div className="flex items-start flex-wrap grow justify-between gap-10 p-4 rounded-2xl">
        {isLoading === "pending" ? (
          <MidLoading />
        ) : isLoading === "failed" ? (
          <Error />
        ) : (
          <div className="grow-[99999] max-w-lg bg-white dark:bg-zinc-600 rounded-xl p-4">
            {data.map((address, index) => (
              <Address address={address} key={index} />
            ))}
          </div>
        )}
        <div
          className={`basis-96 grow w-full max-w-96 mx-auto p-4 rounded-2xl bg-white dark:bg-zinc-700 ${
            isOpen ? "scale-100" : "scale-0"
          } lg:scale-100 absolute z-20 lg:relative top-1/2 left-1/2 lg:top-auto lg:left-auto transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0`}
        >
          <span className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Add New Address</h2>
            <button
              className="text-2xl hover:text-red-500 block lg:hidden"
              onClick={() => toggleIsOpen(false)}
            >
              &times;
            </button>
          </span>
          <Form buttonText="Create Address" />
        </div>
      </div>
      <div className=" lg:hidden bottom-0 w-full sm:w-72 mx-auto">
        <button
          className="bg-green-600 text-white text-center py-2 rounded-2xl w-full block"
          onClick={() => {
            scrollTo(0, 0);
            toggleIsOpen(!isOpen);
          }}
        >
          Add New Address
        </button>
      </div>
      <div
        id="overlay"
        className={`bg-gray-600/50 absolute inset-0 backdrop-blur-sm rounded-xl ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      />
    </div>
  );
};

export default Addresses;
