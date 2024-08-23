import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReviewInterface, ReviewsDataInterface } from "../../types/review";
import reviewThunks from "../thunks/review";
import { AxiosResponse } from "axios";

const { getReview, getReviews, create, update, delete: destroy } = reviewThunks;

interface InitialState {
  reviews: {
    isLoading: "idle" | "pending" | "failed";
    data: ReviewsDataInterface;
    error: string | null;
  };
  review: {
    isLoading: "idle" | "pending" | "failed";
    data: ReviewInterface | null;
    error: string | null;
  };
  create: {
    isLoading: "idle" | "pending" | "failed";
    message: null | string;
    error: string | null;
  };
  update: {
    isLoading: "idle" | "pending" | "failed";
    message: null | string;
    error: string | null;
  };
  destroy: {
    isLoading: "idle" | "pending" | "failed";
    message: null | string;
    error: string | null;
  };
}

const initialState: InitialState = {
  reviews: {
    isLoading: "idle",
    data: {
      reviews: [],
      average_rating: 0,
      total_reviews: 0,
      grouped_reviews: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    },
    error: null,
  },
  review: {
    isLoading: "idle",
    data: null,
    error: null,
  },
  create: {
    isLoading: "idle",
    message: null,
    error: null,
  },
  update: {
    isLoading: "idle",
    message: null,
    error: null,
  },
  destroy: {
    isLoading: "idle",
    message: null,
    error: null,
  },
};

const review = createSlice({
  name: "Review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.reviews.isLoading = "pending";
      state.reviews.error = null;
    });
    builder.addCase(
      getReviews.fulfilled,
      (state, action: PayloadAction<AxiosResponse<ReviewsDataInterface>>) => {
        state.reviews.isLoading = "idle";
        state.reviews.data = action.payload.data;
      }
    );
    builder.addCase(getReviews.rejected, (state, action) => {
      state.reviews.isLoading = "failed";
      state.reviews.error = action.error.message as string;
    });
    builder.addCase(create.pending, (state) => {
      state.create.isLoading = "pending";
      state.create.error = null;
      state.create.message = null;
    });
    builder.addCase(
      create.fulfilled,
      (
        state,
        action: PayloadAction<
          AxiosResponse<{ message: string; review: ReviewInterface }>
        >
      ) => {
        state.create.isLoading = "idle";
        const reviews = [
          ...state.reviews.data.reviews,
          action.payload.data.review,
        ];
        state.reviews.data.reviews = reviews;
      }
    );
  },
});

export default review.reducer;
