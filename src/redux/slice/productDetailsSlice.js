import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchRelatedProducts } from "../../apis/products/productsApi";


const initialState = {
  product: null,
  relatedProducts: [],
  loading: false,
  error: null,
};

export const getProductById = createAsyncThunk(
  "products/getById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetchProductById(productId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getRelatedProducts = createAsyncThunk(
  "products/getRelated",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetchRelatedProducts(productId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    clearProductDetails: (state) => {
      state.product = null;
      state.relatedProducts = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle getProductById
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle getRelatedProducts
      .addCase(getRelatedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedProducts = action.payload.products || [];
      })
      .addCase(getRelatedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
