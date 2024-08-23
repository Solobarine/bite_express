import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewInterface } from "../../types/review";
import { ROOT_URL } from "../../config/server";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "../../utils/requests";

const reviewThunks = {
  getReview: createAsyncThunk("GET_REVIEW", async (id: number) => {
    const url = `${ROOT_URL}/reviews/${id}`;
    return getRequest(url);
  }),
  getReviews: createAsyncThunk("GET_REVIEWS", async (id: string) => {
    const url = `${ROOT_URL}/restaurants/${id}/reviews`;
    return getRequest(url);
  }),
  create: createAsyncThunk(
    "CREATE_REVIEW",
    async (payload: ReviewInterface) => {
      const url = `${ROOT_URL}/reviews`;
      return postRequest(url, payload);
    }
  ),
  update: createAsyncThunk(
    "UPDATE_REVIEW",
    async (payload: Partial<ReviewInterface>) => {
      const url = `${ROOT_URL}/reviews/${payload.id}`;
      return updateRequest(url, payload);
    }
  ),
  like: createAsyncThunk("LIKE_REVIEW", async (id: number) => {
    const url = `${ROOT_URL}/reviews/${id}/like`;
    return postRequest(url, {});
  }),
  unlike: createAsyncThunk("UNLIKE_REVIEW", async (id: number) => {
    const url = `${ROOT_URL}/reviews/${id}/like`;
    return deleteRequest(url);
  }),
  delete: createAsyncThunk("DELETE_REVIEW", async (id: number) => {
    const url = `${ROOT_URL}/reviews/${id}`;
    return deleteRequest(url);
  }),
};

export default reviewThunks;
