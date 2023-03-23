import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    ADD_CATEGORY: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
  },
});

export const { ADD_CATEGORY } = categorySlice.actions;
export const selectCategories = (state) => state.categories.categories;

export default categorySlice.reducer;
