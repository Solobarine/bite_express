import { configureStore } from "@reduxjs/toolkit";
import settings from "../slices/settings";
import general from "../slices/general";
import restaurant from "../slices/restaurant";
import meal from "../slices/meal";
import category from "../slices/category";
import review from "../slices/review";
import auth from "../slices/auth";
import address from "../slices/address";

const store = configureStore({
  reducer: {
    settings,
    general,
    auth,
    meal,
    address,
    restaurant,
    category,
    review,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
