export interface ReviewInterface {
  id?: number;
  ratings: number;
  title: string;
  content: string;
  user_first_name?: string;
  user_last_name?: string;
  user_id?: number;
}

export interface ReviewsDataInterface {
  reviews: ReviewInterface[] | [];
  average_rating: number;
  total_reviews: number;
  grouped_reviews: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}
