import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../redux/slice/categorySlice";
import productFilterReducer from "../redux/slice/productSlice";
import productDetailsReducer from "../redux/slice/productDetailsSlice";

export const store = configureStore({
  reducer: {
    productFilter: productFilterReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer,
  },
});
