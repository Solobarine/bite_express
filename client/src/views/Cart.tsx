import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../components/cart/Item";

const Cart = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h2 className="text-xl font-semibold">Cart</h2>
        <FontAwesomeIcon
          icon={faEllipsis}
          className="p-2 aspect-square rounded-full border border-gray-300"
        />
      </div>
      <div className="flex items-start gap-3 flex-wrap">
        <div className="grid gap-3 grow-[9999]">
          {[1, 2, 3, 4, 5, 6].map((__, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <div className="p-4 rounded-md basis-80 grow flex flex-col gap-2 text-xl bg-white dark:bg-zinc-700">
          <p>
            <strong className="mr-5">Subtotal:</strong>$88
          </p>
          <p>
            <strong className="mr-5">Delivery Fee:</strong>$10.00
          </p>
          <hr />
          <h3 className="text-xl font-semibold">
            <strong className="mr-5">TOTAL:</strong>$98.00
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
