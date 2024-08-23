import { MealInterface } from "./meal";

export interface RestaurantInterface {
  id?: number;
  name: string;
  email: string;
  image: string;
  phone_no: string | null;
  description: string | null;
  address: string | null;
  location: { lat: string; lon: string } | null;
  state: string | null;
  country: string | null;
  average_rating?: number;
  total_reviews?: number;
  opening_hours: { days: string; times: string }[] | null;
  meals?: MealInterface[];
  meals_count?: number;
}

export interface RestaurantInfo {
  id?: number;
  description: string;
  opening_hours: { days: string; times: string }[] | null;
  location: { lat: string; lon: string } | null;
  grouped_reviews: { 1: number; 2: number; 3: number; 4: number; 5: number };
  average_rating: number;
  total_reviews: number;
}
