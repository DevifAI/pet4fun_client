import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchParentCategories,
  fetchChildrenByParentId,
} from "./../../apis/products/categoryAPi";

// Get all categories
export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategories();
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Get only parent categories
export const getParentCategories = createAsyncThunk(
  "categories/getParentCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchParentCategories();
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Get children by parent category ID
export const getChildrenByParentId = createAsyncThunk(
  "categories/getChildrenByParentId",
  async (parentId, { rejectWithValue }) => {
    try {
      const data = await fetchChildrenByParentId(parentId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    parentCategories: [],
    childCategories: [],
    loading: false,
    error: null,
    selectedParent: null,
  },
  reducers: {
    setSelectedParent(state, action) {
      state.selectedParent = action.payload;
      state.childCategories = [];
    },
    clearChildCategories(state) {
      state.childCategories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // All categories
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload || [];
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch categories";
      })
      // Parent categories
      .addCase(getParentCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getParentCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.parentCategories = action.payload || [];
      })
      .addCase(getParentCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch parent categories";
      })
      // Child categories
      .addCase(getChildrenByParentId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChildrenByParentId.fulfilled, (state, action) => {
        state.loading = false;
        state.childCategories = action.payload || [];
      })
      .addCase(getChildrenByParentId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch child categories";
      });
  },
});

export const { setSelectedParent, clearChildCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
