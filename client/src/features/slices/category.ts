import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryInterface } from "../../types/category";
import categoryThunks from "../thunks/category";
import { AxiosResponse } from "axios";

const { create, get, categories, update, destroy } = categoryThunks;

interface InitialState {
  category: {
    isLoading: "idle" | "pending" | "failed";
    data: CategoryInterface | null;
    error: string | null;
  };
  categories: {
    isLoading: "idle" | "pending" | "failed";
    data: CategoryInterface[] | [];
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
  category: {
    isLoading: "idle",
    data: null,
    error: null,
  },
  categories: {
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

const category = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.pending, (state) => {
      state.category.isLoading = "pending";
      state.category.error = null;
    });
    builder.addCase(
      get.fulfilled,
      (state, action: PayloadAction<AxiosResponse<CategoryInterface>>) => {
        state.category.isLoading = "idle";
        state.category.data = action.payload.data;
      }
    );
    builder.addCase(get.rejected, (state, action) => {
      state.category.isLoading = "failed";
      state.category.error = action.error.message as string;
    });
    builder.addCase(categories.pending, (state) => {
      state.categories.isLoading = "pending";
      state.categories.error = null;
    });
    builder.addCase(
      categories.fulfilled,
      (state, action: PayloadAction<AxiosResponse<CategoryInterface[]>>) => {
        state.categories.isLoading = "idle";
        state.categories.data = action.payload.data;
      }
    );
    builder.addCase(categories.rejected, (state, action) => {
      state.categories.isLoading = "failed";
      state.categories.error = action.error.message as string;
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
          AxiosResponse<{ message: string; category: CategoryInterface }>
        >
      ) => {
        state.create.isLoading = "idle";
        state.create.message = action.payload.data.message;
        const data = [...state.categories.data, action.payload.data.category];
        state.categories.data = data;
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
          AxiosResponse<{ message: string; category: CategoryInterface }>
        >
      ) => {
        state.update.isLoading = "idle";
        state.update.message = action.payload.data.message;
        const index = state.categories.data.findIndex(
          (category) => category.id === action.payload.data.category.id
        );
        state.categories.data[index] = action.payload.data.category;
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
          AxiosResponse<{ message: string; category: CategoryInterface }>
        >
      ) => {
        state.destroy.isLoading = "idle";
        state.destroy.message = action.payload.data.message;
        state.categories.data = state.categories.data.filter(
          (category) => category.id !== action.payload.data.category.id
        );
      }
    );
    builder.addCase(destroy.rejected, (state, action) => {
      state.destroy.isLoading = "failed";
      state.destroy.error = action.error.message as string;
    });
  },
});

export default category.reducer;
