import { createAsyncThunk } from "@reduxjs/toolkit";
import { ROOT_URL } from "../../config/server";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "../../utils/requests";
import { AddressInterface } from "../../types/address";

const addressThunks = {
  create: createAsyncThunk(
    "CREATE_ADDRESS",
    async (payload: { address: Omit<AddressInterface, "id" | "user_id"> }) => {
      const url = `${ROOT_URL}/addresses`;
      return postRequest(url, payload);
    }
  ),
  getAll: createAsyncThunk("GET_ADDRESSES", async () => {
    const url = `${ROOT_URL}/addresses`;
    return getRequest(url);
  }),
  update: createAsyncThunk(
    "UPDATE_ADDRESS",
    async (payload: AddressInterface) => {
      const url = `${ROOT_URL}/addresses/${payload.id}`;
      return updateRequest(url, payload);
    }
  ),
  destroy: createAsyncThunk("DELETE_ADDRESS", async (id: number) => {
    const url = `${ROOT_URL}/addresses/${id}`;
    return deleteRequest(url);
  }),
};

export default addressThunks;
