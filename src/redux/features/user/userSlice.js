import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    ADD_USERS: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { ADD_USERS } = userSlice.actions;

export default userSlice.reducer;
