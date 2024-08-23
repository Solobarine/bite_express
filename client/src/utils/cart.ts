import { toast } from "react-toastify";
import { MealInterface } from "../types/meal";

export const addToCart = (
  meal: MealInterface,
  quantity: number,
  cart: any,
  setCart: any
) => {
  if (mealExists(meal.id as string, cart)) return null;
  setCart([...cart, { item: meal, quantity }]);
  localStorage.setItem(
    "cart",
    JSON.stringify([...cart, { item: meal, quantity }])
  );
  toast.success("Meal added to Cart");
};

export const removeFromCart = (
  meal: MealInterface,
  cart: any,
  setCart: any
) => {
  const filteredCart = cart.filter(
    ({ item }: { item: any }) => item.id !== meal.id
  );
  setCart(filteredCart);
  localStorage.setItem("cart", JSON.stringify(filteredCart));
  toast.success("Meal Removed from Cart");
};

export const mealExists = (id: number | string, cart: any) => {
  const meals = cart.filter(({ item }: { item: any }) => item.id == id);
  return meals.length < 1 ? false : true;
};
