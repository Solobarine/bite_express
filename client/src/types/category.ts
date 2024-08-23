import { RestaurantInterface } from "./restaurant";

export interface CategoryInterface {
  id?: number;
  name: string;
  image: string;
  restaurants?: [] | RestaurantInterface[];
}
