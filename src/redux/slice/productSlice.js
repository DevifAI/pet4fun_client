import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "../../apis/products/productsApi";


// Async thunk for fetching all products
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      const data = await fetchProducts(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for fetching a single product by ID
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const data = await fetchProductById(productId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  total: 0,
  page: 1,
  pages: 1,
  loading: false,
  error: null,
  productDetails: null,
  productDetailsLoading: false,
  productDetailsError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductDetails: (state) => {
      state.productDetails = null;
      state.productDetailsError = null;
      state.productDetailsLoading = false;
    },
  },
  extraReducers: (builder) => {
    // Get all products
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products || [];
        state.total = action.payload.total || 0;
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });

    // Get product by ID
    builder
      .addCase(getProductById.pending, (state) => {
        state.productDetailsLoading = true;
        state.productDetailsError = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productDetailsLoading = false;
        state.productDetails = action.payload.data || action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.productDetailsLoading = false;
        state.productDetailsError = action.payload || "Failed to fetch product";
      });
  },
});

export const { clearProductDetails } = productsSlice.actions;
export default productsSlice.reducer;
