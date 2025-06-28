import { fetchCategoryTree } from "../../apis/products/categoryAPi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Get category tree
export const getCategoryTree = createAsyncThunk(
  "categories/getCategoryTree",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCategoryTree();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    tree: [],
    loading: false,
    error: null,
    selectedCategories: {
      parent: null,
      subCategory: null,
      childSubCategory: null,
    },
  },
  reducers: {
    setSelectedParent(state, action) {
      state.selectedCategories.parent = action.payload;
      state.selectedCategories.subCategory = null;
      state.selectedCategories.childSubCategory = null;
    },
    setSelectedSubCategory(state, action) {
      state.selectedCategories.subCategory = action.payload;
      state.selectedCategories.childSubCategory = null;
    },
    setSelectedChildSubCategory(state, action) {
      state.selectedCategories.childSubCategory = action.payload;
    },
    clearSelectedCategories(state) {
      state.selectedCategories = {
        parent: null,
        subCategory: null,
        childSubCategory: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryTree.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryTree.fulfilled, (state, action) => {
        state.loading = false;
        state.tree = action.payload || [];
      })
      .addCase(getCategoryTree.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch category tree";
      });
  },
});

export const {
  setSelectedParent,
  setSelectedSubCategory,
  setSelectedChildSubCategory,
  clearSelectedCategories,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
