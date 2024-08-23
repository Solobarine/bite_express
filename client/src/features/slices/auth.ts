import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RestaurantInterface } from "../../types/restaurant";
import { UserInterface } from "../../types/user";
import authThunks from "../thunks/auth";
import { AxiosResponse } from "axios";

const {
  userLogin,
  userRegistration,
  userLogout,
  currentUser,
  restaurantLogin,
  restaurantRegistration,
  restaurantLogout,
} = authThunks;

interface InitialState {
  user: {
    isLoggedIn: boolean;
    data: UserInterface | null;
    login: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
    register: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
    logout: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
    currentUser: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
  };
  restaurant: {
    isLoggedIn: boolean;
    data: RestaurantInterface | null;
    login: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
    register: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
    logout: {
      isLoading: "idle" | "pending" | "failed";
      message: string | null;
      error: string | null;
    };
  };
}

const initialState: InitialState = {
  user: {
    isLoggedIn: false,
    data: null,
    login: {
      isLoading: "idle",
      message: null,
      error: null,
    },
    register: {
      isLoading: "idle",
      message: null,
      error: null,
    },
    logout: {
      isLoading: "idle",
      message: null,
      error: null,
    },
    currentUser: {
      isLoading: "idle",
      message: null,
      error: null,
    },
  },
  restaurant: {
    isLoggedIn: false,
    data: null,
    login: {
      isLoading: "idle",
      message: null,
      error: null,
    },
    register: {
      isLoading: "idle",
      message: null,
      error: null,
    },
    logout: {
      isLoading: "idle",
      message: null,
      error: null,
    },
  },
};

const auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**********************  USER REGISTRATION ********************** **/
    builder.addCase(userRegistration.pending, (state) => {
      state.user.register.isLoading = "pending";
      state.user.register.error = null;
      state.user.register.message = null;
    });
    builder.addCase(
      userRegistration.fulfilled,
      (state, action: PayloadAction<AxiosResponse<{ message: string }>>) => {
        state.user.register.isLoading = "idle";
        state.user.register.message = action.payload.data.message;
      }
    );
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.user.register.isLoading = "failed";
      state.user.register.error = action.error.message as string;
    });

    /***************************** USER LOGIN **************************/
    builder.addCase(userLogin.pending, (state) => {
      state.user.isLoggedIn = false;
      state.user.login.isLoading = "idle";
      state.user.data = null;
      state.user.login.error = null;
      state.user.login.message = null;
    });
    builder.addCase(
      userLogin.fulfilled,
      (
        state,
        action: PayloadAction<AxiosResponse<{ message: string; token: string }>>
      ) => {
        localStorage.setItem("auth_token", action.payload.data.token);
        state.user.isLoggedIn = true;
        state.user.login.isLoading = "idle";
        state.user.login.message = action.payload.data.message;
      }
    );
    builder.addCase(userLogin.rejected, (state, action) => {
      state.user.login.isLoading = "failed";
      console.log(action);
      if (action.error.message === "Request failed with status code 401") {
        state.user.login.error = "Invalid Email or Password";
      } else {
        state.user.login.error = "An error Occurred";
      }
    });

    /************************* CURRENT uSER *********************/
    builder.addCase(currentUser.pending, (state) => {
      state.user.currentUser.isLoading = "pending";
      state.user.currentUser.error = null;
      state.user.currentUser.message = null;
    });
    builder.addCase(
      currentUser.fulfilled,
      (state, action: PayloadAction<AxiosResponse<UserInterface>>) => {
        state.user.currentUser.isLoading = "idle";
        state.user.isLoggedIn = true;
        state.user.data = action.payload.data;
      }
    );
    builder.addCase(currentUser.rejected, (state, action) => {
      state.user.currentUser.isLoading = "failed";
      state.user.currentUser.error = action.error.message as string;
    });
    /*********************** USER LOGOUT *************************/
    builder.addCase(userLogout.pending, (state) => {
      state.user.logout.isLoading = "pending";
      state.user.logout.error = null;
      state.user.logout.message = null;
    });
    builder.addCase(
      userLogout.fulfilled,
      (state, action: PayloadAction<AxiosResponse<{ message: string }>>) => {
        state.user.isLoggedIn = false;
        state.user.logout.isLoading = "idle";
        state.user.logout.message = action.payload.data.message;
        localStorage.removeItem("auth_token");
      }
    );
    builder.addCase(userLogout.rejected, (state, action) => {
      state.user.logout.isLoading = "failed";
      state.user.logout.error = action.error.message as string;
    });

    /**********************  RESTAURANT REGISTRATION ********************** **/
    builder.addCase(restaurantRegistration.pending, (state) => {
      state.restaurant.register.isLoading = "pending";
      state.restaurant.register.error = null;
      state.restaurant.register.message = null;
    });
    builder.addCase(
      restaurantRegistration.fulfilled,
      (state, action: PayloadAction<AxiosResponse<{ message: string }>>) => {
        state.restaurant.register.isLoading = "idle";
        state.restaurant.register.message = action.payload.data.message;
      }
    );
    builder.addCase(restaurantRegistration.rejected, (state, action) => {
      state.restaurant.register.isLoading = "failed";
      state.restaurant.register.error = action.error.message as string;
    });

    /***************************** RESTAURANT LOGIN **************************/
    builder.addCase(restaurantLogin.pending, (state) => {
      state.restaurant.isLoggedIn = false;
      state.restaurant.login.isLoading = "idle";
      state.restaurant.data = null;
      state.restaurant.login.error = null;
      state.restaurant.login.message = null;
    });
    builder.addCase(
      restaurantLogin.fulfilled,
      (
        state,
        action: PayloadAction<AxiosResponse<{ message: string; token: string }>>
      ) => {
        localStorage.setItem("auth_token", action.payload.data.token);
        state.restaurant.isLoggedIn = true;
        state.restaurant.login.isLoading = "idle";
        state.restaurant.login.message = action.payload.data.message;
      }
    );
    builder.addCase(restaurantLogin.rejected, (state, action) => {
      state.restaurant.login.isLoading = "failed";
      state.restaurant.login.error = action.error.message as string;
    });

    /*********************** RESTAURANT LOGOUT *************************/
    builder.addCase(restaurantLogout.pending, (state) => {
      state.restaurant.logout.isLoading = "pending";
      state.restaurant.logout.error = null;
      state.restaurant.logout.message = null;
    });
    builder.addCase(
      restaurantLogout.fulfilled,
      (state, action: PayloadAction<AxiosResponse<{ message: string }>>) => {
        state.restaurant.isLoggedIn = false;
        state.restaurant.logout.isLoading = "idle";
        state.restaurant.logout.message = action.payload.data.message;
        localStorage.removeItem("auth_token");
      }
    );
    builder.addCase(restaurantLogout.rejected, (state, action) => {
      state.restaurant.logout.isLoading = "failed";
      state.restaurant.logout.error = action.error.message as string;
    });
  },
});

export default auth.reducer;
