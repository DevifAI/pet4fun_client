import API from "../../utils/axiosInstance";

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const res = await API.get("/category");
    return res.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch categories"
    );
  }
};

// Fetch only parent categories
export const fetchParentCategories = async () => {
  try {
    const res = await API.get("/category/parents");
    return res.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch parent categories"
    );
  }
};

// Fetch children of a specific parent category
export const fetchChildrenByParentId = async (parentId) => {
  try {
    const res = await API.get(`/category/children/${parentId}`);
    return res.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch child categories"
    );
  }
};