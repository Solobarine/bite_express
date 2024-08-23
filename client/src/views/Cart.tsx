import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "../components/cart/Counter";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") as string) || []
  );

  console.log(cart);

  const increment = (meal: any) => {
    if (meal.quantity <= 9) meal.quantity += 1;
    const position = cart.findIndex(
      ({ item }: { item: any }) => item.id === meal.item.id
    );
    if (position !== -1) {
      setCart([
        ...cart.splice(0, position),
        meal,
        ...cart.splice(position + 1),
      ]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const decrement = (meal: any) => {
    if (meal.quantity > 0) meal.quantity -= 1;
    const position = cart.findIndex(
      ({ item }: { item: any }) => item.id === meal.item.id
    );
    if (position !== -1) {
      setCart(cart.splice(position, 1, meal));
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between py-5">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
      </div>
      <table className="table-auto w-full overflow-x-scroll">
        <thead className="text-lg font-semibold bg-gray-300 dark:bg-zinc-700">
          <tr>
            <th className="text-center p-2 sticky left-0">Product</th>
            <th className="text-center p-2">Price</th>
            <th className="text-center p-2">Quantity</th>
            <th className="text-center p-2">Total</th>
            <th className="text-center p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((meal: any, index: number) => (
            <tr
              key={index}
              className="bg-gray-200 odd:bg-white dark:bg-gray-600 dark:odd:bg-gray-500"
            >
              <td className="text-center p-2 py-6 sticky left-0">
                {meal.item.name}
              </td>
              <td className="text-center p-2 py-6">${meal.item.price}</td>
              <td className="text-center p-2 py-6">
                <Counter
                  item={meal}
                  increment={() => increment(meal)}
                  decrement={() => decrement(meal)}
                />
              </td>
              <td className="text-center p-2 py-6">
                ${meal.item.price * meal.quantity}
              </td>
              <td className="text-center p-2 py-6">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="text-red-500 dark:text-red-800 text-xl"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="block ml-auto bg-green-600 text-white font-semibold rounded-lg shadow-md transition hover:shadow-xl py-2 px-10 text-sm mt-5"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
