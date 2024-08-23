import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLogin: boolean;
  isRegister: boolean;
}

const initialState: InitialState = {
  isLogin: false,
  isRegister: false,
};

const general = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    toggleIsRegister: (state, action) => {
      state.isRegister = action.payload;
    },
  },
});

export const { toggleIsLogin, toggleIsRegister } = general.actions;
export default general.reducer;
