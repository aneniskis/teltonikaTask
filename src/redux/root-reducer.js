import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/categoreSlice";
import userReducer from "./features/user/userSlice";
import filterReducer from "./features/user/filterSlice";

export const rootReducers = combineReducers({
  category: categoryReducer,
  users: userReducer,
  filter: filterReducer,
});
