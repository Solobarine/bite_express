import { MealInterface } from "./meal";

export interface CartItemInterface {
  item: MealInterface;
  quantity: number;
}

export interface CartInterface {
  items: CartItemInterface[] | [];
}
