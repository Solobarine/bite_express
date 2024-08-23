import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddressInterface } from "../../types/address";
import addressThunks from "../thunks/address";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

const { getAll, create, update, destroy } = addressThunks;

interface InitialState {
  addresses: {
    isLoading: "idle" | "pending" | "failed";
    data: AddressInterface[] | [];
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
  addresses: {
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

const address = createSlice({
  name: "Address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.addresses.isLoading = "pending";
      state.addresses.error = null;
      state.addresses.data = [];
    });
    builder.addCase(
      getAll.fulfilled,
      (state, action: PayloadAction<AxiosResponse<AddressInterface[]>>) => {
        state.addresses.isLoading = "idle";
        state.addresses.data = action.payload.data;
      }
    );
    builder.addCase(getAll.rejected, (state, action) => {
      state.addresses.isLoading = "failed";
      state.addresses.error = action.error.message as string;
    });
    builder.addCase(create.pending, (state) => {
      state.create.isLoading = "pending";
      state.create.error = null;
      state.create.message = null;
    });
    builder.addCase(
      create.fulfilled,
      (
        state,
        action: PayloadAction<
          AxiosResponse<{ message: string; address: AddressInterface }>
        >
      ) => {
        state.create.isLoading = "idle";
        state.addresses.data = [
          ...state.addresses.data,
          action.payload.data.address,
        ];
        state.create.message = action.payload.data.message;
        toast.success(state.create.message);
      }
    );
    builder.addCase(create.rejected, (state, action) => {
      state.create.isLoading = "failed";
      state.create.error = action.error.message as string;
    });
    builder.addCase(update.pending, (state) => {
      state.update.isLoading = "pending";
      state.update.error = null;
      state.update.message = null;
    });
    builder.addCase(
      update.fulfilled,
      (
        state,
        action: PayloadAction<
          AxiosResponse<{ message: string; address: AddressInterface }>
        >
      ) => {
        state.update.isLoading = "pending";
        const index = state.addresses.data.findIndex(
          (address) => address.id === action.payload.data.address.id
        );
        state.addresses.data[index] = action.payload.data.address;
        state.update.message = action.payload.data.message;
      }
    );
    builder.addCase(update.rejected, (state, action) => {
      state.update.isLoading = "failed";
      state.update.error = action.error.message as string;
    });
    builder.addCase(destroy.pending, (state) => {
      state.destroy.isLoading = "pending";
      state.destroy.error = null;
      state.destroy.message = null;
    });
    builder.addCase(
      destroy.fulfilled,
      (
        state,
        action: PayloadAction<
          AxiosResponse<{ message: string; address: AddressInterface }>
        >
      ) => {
        state.destroy.isLoading = "pending";
        state.addresses.data = state.addresses.data.filter(
          (address) => address.id !== action.payload.data.address.id
        );
        state.destroy.message = action.payload.data.message;
      }
    );
    builder.addCase(destroy.rejected, (state, action) => {
      state.destroy.isLoading = "failed";
      state.destroy.error = action.error.message as string;
    });
  },
});

export default address.reducer;
