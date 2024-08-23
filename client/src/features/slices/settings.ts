import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  menuOpen: boolean;
}

const initialState: InitialState = {
  menuOpen: false,
};

const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMenu: (state, actions: { payload: boolean }) => {
      state.menuOpen = actions.payload;
    },
  },
});

export const { toggleMenu } = slice.actions;

export default slice.reducer;
