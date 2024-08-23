export interface MealInterface {
  id?: string;
  name: string;
  image: string;
  ingredients: { name: string }[];
  nutrition: { name: string }[];
  price: number;
  description: string;
  avaliability: boolean;
}
