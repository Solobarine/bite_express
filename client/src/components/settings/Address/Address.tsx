import { AddressInterface } from "../../../types/address";

const Address = ({ address }: { address: AddressInterface | null }) => {
  return (
    <div className="flex items-center gap-3 justify-between p-2">
      <span className="bg-green-200 rounded-full p-2 w-12 aspect-square">
        <i className="bx bx-current-location rounded-full text-white bg-green-600 text-xl w-full aspect-square grid place-items-center" />
      </span>
      <div className="grow">
        <span className="flex items-center gap-4">
          <p className="font-semibold text-base">{address?.name}</p>
          {address?.is_default && (
            <span className="text-green-600 bg-green-200 rounded-2xl py-0.5 px-1.5 text-xs">
              Default
            </span>
          )}
        </span>
        <p>{address?.address}</p>
      </div>
      <button>
        <i className="bx bxs-edit text-xl text-green-600 p-2" />
      </button>
    </div>
  );
};

export default Address;
