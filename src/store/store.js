import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/slice/productSlice";
import categoriesReducer from "../redux/slice/categorySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});
