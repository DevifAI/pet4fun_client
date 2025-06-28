// productFilterSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchFilteredProducts } from "../../apis/products/productsApi";

export const getFilteredProducts = createAsyncThunk(
  "products/filter",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetchFilteredProducts(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  products: [],
  filters: {
    brands: [],
    species: [],
    types: [],
    usages: [],
    price: { min: 0, max: 0 },
  },
  total: 0,
  page: 1,
  pages: 1,
  loading: false,
  error: null,
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    resetFilterState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.filters = action.payload.filters;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
      })
      .addCase(getFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetFilterState } = productFilterSlice.actions;
export default productFilterSlice.reducer;
