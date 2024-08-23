import { createAsyncThunk } from "@reduxjs/toolkit";
import { ROOT_URL } from "../../config/server";
import { getRequest } from "../../utils/requests";

const restaurantThunks = {
  restaurant: createAsyncThunk("GET_RESTAURANT", async (id: string) => {
    const url = `${ROOT_URL}/restaurants/${id}`;
    return getRequest(url);
  }),
  restaurants: createAsyncThunk("GET_RESTAURANTS", async () => {
    const url = `${ROOT_URL}/restaurants`;
    return getRequest(url);
  }),
  info: createAsyncThunk("RESTAURANT_INFO", async (id: string) => {
    const url = `${ROOT_URL}/restaurants/${id}/info`;
    return getRequest(url);
  }),
  discounted: createAsyncThunk("DISCOUNT", async () => {
    const url = `${ROOT_URL}/restaurants/discounted`;
    return getRequest(url);
  }),
  recommended: createAsyncThunk("RECOMMENDED", async () => {
    const url = `${ROOT_URL}/restaurants/recommended`;
    return getRequest(url);
  }),
  favourites: createAsyncThunk("FAVOURITE_RESTAURANTS", async () => {
    const url = `${ROOT_URL}/restaurants/favourites`;
    return getRequest(url);
  }),
};

export default restaurantThunks;
