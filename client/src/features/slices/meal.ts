import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MealInterface } from "../../types/meal";
import mealThunks from "../thunks/meal";
import { AxiosResponse } from "axios";

const { getMeal } = mealThunks;

interface InitialState {
  meal: {
    isLoading: "idle" | "pending" | "failed";
    data: MealInterface | null;
    error: string | null;
  };
  meals: {
    isLoading: "idle" | "pending" | "failed";
    data: MealInterface[] | [];
    error: string | null;
  };
  create: {
    isLoading: "idle" | "pending" | "failed";
    message: string | null;
    error: string | null;
  };
  update: {
    isLoading: "idle" | "pending" | "failed";
    message: string | null;
    error: string | null;
  };
  delete: {
    isLoading: "idle" | "pending" | "failed";
    message: string | null;
    error: string | null;
  };
}

const initialState: InitialState = {
  meal: {
    isLoading: "idle",
    data: null,
    error: null,
  },
  meals: {
    isLoading: "idle",
    data: [],
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
  delete: {
    isLoading: "idle",
    message: null,
    error: null,
  },
};

const meal = createSlice({
  name: "Meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeal.pending, (state) => {
      state.meal.isLoading = "pending";
      state.meal.error = null;
    });
    builder.addCase(
      getMeal.fulfilled,
      (state, action: PayloadAction<AxiosResponse<MealInterface>>) => {
        state.meal.isLoading = "idle";
        state.meal.data = action.payload.data;
      }
    );
    builder.addCase(getMeal.rejected, (state, action) => {
      state.meal.isLoading = "failed";
      state.meal.error = action.error.message as string;
    });
  },
});

export default meal.reducer;
