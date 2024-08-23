import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RestaurantInfo, RestaurantInterface } from "../../types/restaurant";
import restaurantThunks from "../thunks/restaurant";
import { AxiosResponse } from "axios";

const {
  restaurant,
  restaurants: getRestaurants,
  info,
  discounted,
  recommended,
  favourites,
} = restaurantThunks;

interface InitialState {
  restaurant: {
    isLoading: "idle" | "pending" | "failed";
    data: RestaurantInterface | null;
    error: string | null;
  };
  info: {
    isLoading: "idle" | "pending" | "failed";
    data: RestaurantInfo;
    error: string | null;
  };
  restaurants: {
    isLoading: "idle" | "pending" | "failed";
    data: RestaurantInterface[] | [];
    error: string | null;
  };
  discounted: {
    isLoading: "idle" | "pending" | "failed";
    data: RestaurantInterface[] | [];
    error: string | null;
  };
  recommended: {
    isLoading: "idle" | "pending" | "failed";
    data: RestaurantInterface[] | [];
    error: string | null;
  };
  favourites: {
    isLoading: "idle" | "pending" | "failed";
    data: RestaurantInterface[] | [];
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
  destroy: {
    isLoading: "idle" | "pending" | "failed";
    message: string | null;
    error: string | null;
  };
}

const initialState: InitialState = {
  restaurant: {
    isLoading: "idle",
    data: null,
    error: null,
  },
  info: {
    isLoading: "idle",
    data: {
      description: "",
      opening_hours: [{ days: "", times: "" }],
      location: { lat: "", lon: "" },
      average_rating: 0,
      total_reviews: 0,
      grouped_reviews: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    },
    error: null,
  },
  restaurants: {
    isLoading: "idle",
    data: [],
    error: null,
  },
  discounted: {
    isLoading: "idle",
    data: [],
    error: null,
  },
  recommended: {
    isLoading: "idle",
    data: [],
    error: null,
  },
  favourites: {
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
  destroy: {
    isLoading: "idle",
    message: null,
    error: null,
  },
};

const restaurants = createSlice({
  name: "Restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /************************** RESTAURANT *************************************/
    builder.addCase(restaurant.pending, (state) => {
      state.restaurant.isLoading = "pending";
      state.restaurant.error = null;
    });
    builder.addCase(
      restaurant.fulfilled,
      (state, action: PayloadAction<AxiosResponse<RestaurantInterface>>) => {
        state.restaurant.isLoading = "idle";
        state.restaurant.data = action.payload.data;
      }
    );
    builder.addCase(restaurant.rejected, (state, action) => {
      state.restaurant.isLoading = "failed";
      state.restaurant.error = action.error.message as string;
    });

    /************************** RESTAURANTS *************************************/
    builder.addCase(getRestaurants.pending, (state) => {
      state.restaurants.isLoading = "pending";
      state.restaurants.error = null;
    });
    builder.addCase(
      getRestaurants.fulfilled,
      (state, action: PayloadAction<AxiosResponse<RestaurantInterface[]>>) => {
        state.restaurants.isLoading = "idle";
        state.restaurants.data = action.payload.data;
      }
    );
    builder.addCase(getRestaurants.rejected, (state, action) => {
      state.restaurants.isLoading = "failed";
      state.restaurants.error = action.error.message as string;
    });

    /***************************  RESTAURANT INFO ********************************/
    builder.addCase(info.pending, (state) => {
      state.info.isLoading = "pending";
      state.info.error = null;
    });
    builder.addCase(
      info.fulfilled,
      (state, action: PayloadAction<AxiosResponse<RestaurantInfo>>) => {
        state.info.isLoading = "idle";
        state.info.data = action.payload.data;
      }
    );
    builder.addCase(info.rejected, (state, action) => {
      state.info.isLoading = "failed";
      state.info.error = action.error.message as string;
    });

    /**************************** DISCOUNTED RESTAUURANTS ******************************/
    builder.addCase(discounted.pending, (state) => {
      state.discounted.isLoading = "pending";
      state.discounted.error = null;
    });
    builder.addCase(
      discounted.fulfilled,
      (state, action: PayloadAction<AxiosResponse<RestaurantInterface[]>>) => {
        state.discounted.isLoading = "idle";
        state.discounted.data = action.payload.data;
      }
    );
    builder.addCase(discounted.rejected, (state, action) => {
      state.discounted.isLoading = "failed";
      state.discounted.error = action.error.message as string;
    });

    /******************************* RECOMMENDED RESTAURANTS ********************************/
    builder.addCase(recommended.pending, (state) => {
      state.recommended.isLoading = "pending";
      state.recommended.error = null;
    });
    builder.addCase(
      recommended.fulfilled,
      (state, action: PayloadAction<AxiosResponse<RestaurantInterface[]>>) => {
        state.recommended.isLoading = "idle";
        state.recommended.data = action.payload.data;
      }
    );
    builder.addCase(recommended.rejected, (state, action) => {
      state.recommended.isLoading = "failed";
      state.recommended.error = action.error.message as string;
    });

    /******************************* FAVOURITE RESTAURANTS ********************************/
    builder.addCase(favourites.pending, (state) => {
      state.favourites.isLoading = "pending";
      state.favourites.error = null;
    });
    builder.addCase(
      favourites.fulfilled,
      (state, action: PayloadAction<AxiosResponse<RestaurantInterface[]>>) => {
        state.favourites.isLoading = "idle";
        state.favourites.data = action.payload.data;
      }
    );
    builder.addCase(favourites.rejected, (state, action) => {
      state.favourites.isLoading = "failed";
      state.favourites.error = action.error.message as string;
    });
  },
});

export default restaurants.reducer;
