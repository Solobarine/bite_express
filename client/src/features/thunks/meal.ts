import { createAsyncThunk } from "@reduxjs/toolkit";
import { ROOT_URL } from "../../config/server";
import { MealInterface } from "../../types/meal";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "../../utils/requests";

const mealThunks = {
  create: createAsyncThunk("CREATE_MEAL", async (payload: MealInterface) => {
    const url = `${ROOT_URL}/meals`;
    return postRequest(url, payload);
  }),
  getMeals: createAsyncThunk("GET_MEALS", async () => {
    const url = `${ROOT_URL}/meals`;
    return getRequest(url);
  }),
  update: createAsyncThunk(
    "UPDATE_MEALS",
    async (payload: Partial<MealInterface>) => {
      const url = `${ROOT_URL}/meals/${payload.id}`;
      return updateRequest(url, payload);
    }
  ),
  getMeal: createAsyncThunk("GET_MEAL", async (id: string) => {
    const url = `${ROOT_URL}/meals/${id}`;
    return getRequest(url);
  }),
  like: createAsyncThunk("LIKE_MEAL", async (id: number) => {
    const url = `${ROOT_URL}/meals/${id}/like`;
    return postRequest(url, null);
  }),
  unlike: createAsyncThunk("UNLIKE_MEAL", async (id: number) => {
    const url = `${ROOT_URL}/meals/${id}/like`;
    return deleteRequest(url);
  }),
  delete: createAsyncThunk("DELETE_MEAL", async (id: number) => {
    const url = `${ROOT_URL}/meals/${id}`;
    return deleteRequest(url);
  }),
};

export default mealThunks;
