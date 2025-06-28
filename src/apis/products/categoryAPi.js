import API from "../../utils/axiosInstance";

// Fetch all categories
export const fetchCategoryTree = async () => {
  try {
    const res = await API.get("/category/tree");
    return res.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch category tree"
    );
  }
};
