import { createAsyncThunk } from "@reduxjs/toolkit";
import { ROOT_URL } from "../../config/server";
import { deleteRequest, getRequest, postRequest } from "../../utils/requests";
import { UserInterface } from "../../types/user";
import { RestaurantInterface } from "../../types/restaurant";

const authThunks = {
  userRegistration: createAsyncThunk(
    "USER_REGISTRATION",
    async (payload: {
      user: Pick<UserInterface, "first_name" | "last_name" | "email"> & {
        password: string;
        password_confirmation: string;
      };
    }) => {
      const url = `${ROOT_URL}/auth/registration/create`;
      return postRequest(url, payload);
    }
  ),
  userLogin: createAsyncThunk(
    "USER_LOGIN",
    async (payload: { user: { email: string; password: string } }) => {
      const url = `${ROOT_URL}/auth/session/create`;
      return postRequest(url, payload);
    }
  ),
  currentUser: createAsyncThunk("CURRENT_USER", async () => {
    const url = `${ROOT_URL}/user`;
    return getRequest(url);
  }),
  userLogout: createAsyncThunk("USER_LOGOUT", async () => {
    const url = `${ROOT_URL}/auth/session/destroy`;
    return deleteRequest(url);
  }),
  restaurantRegistration: createAsyncThunk(
    "RESTAURANT_REGISTRATION",
    async (payload: {
      restaurant: Pick<
        RestaurantInterface,
        "name" | "email" | "state" | "country"
      > & {
        password: string;
        password_confirmation: string;
      };
    }) => {
      const url = `${ROOT_URL}/auth/registration/create`;
      return postRequest(url, payload);
    }
  ),
  restaurantLogin: createAsyncThunk(
    "RESTAURANT_LOGIN",
    async (payload: { restaurant: { email: string; password: string } }) => {
      const url = `${ROOT_URL}/auth/session/create`;
      return postRequest(url, payload);
    }
  ),
  restaurantLogout: createAsyncThunk("RESTAURANT_LOGOUT", async () => {
    const url = `${ROOT_URL}/restaurant/session/destroy`;
    return deleteRequest(url);
  }),
};

export default authThunks;
