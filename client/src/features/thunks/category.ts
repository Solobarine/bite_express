import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryInterface } from "../../types/category";
import { ROOT_URL } from "../../config/server";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "../../utils/requests";

const categoryThunks = {
  get: createAsyncThunk("GET_CATEGORY", async (name: string) => {
    const url = `${ROOT_URL}/categories/${name}`;
    return getRequest(url);
  }),
  create: createAsyncThunk(
    "CREATE_CATEGORY",
    async (payload: CategoryInterface) => {
      const url = `${ROOT_URL}/categories`;
      return postRequest(url, payload);
    }
  ),
  categories: createAsyncThunk("GET_CATEGORIES", async () => {
    const url = `${ROOT_URL}/categories`;
    return getRequest(url);
  }),
  sample: createAsyncThunk("SAMPLE_CATEGORIES", async () => {
    const url = `${ROOT_URL}/categories/sample`;
    return getRequest(url);
  }),
  update: createAsyncThunk(
    "UPDATE_CATEGORY",
    async (payload: Partial<CategoryInterface>) => {
      const url = `${ROOT_URL}/categories/${payload.id}`;
      return updateRequest(url, payload);
    }
  ),
  destroy: createAsyncThunk("DELETE_CATEGORY", async (id: number) => {
    const url = `${ROOT_URL}/categories/${id}`;
    return deleteRequest(url);
  }),
};

export default categoryThunks;
