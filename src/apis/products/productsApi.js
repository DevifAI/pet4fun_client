import API from "../../utils/axiosInstance";

// Fetch all products with filters, pagination, etc.
export const fetchProducts = async (params = {}) => {
  try {
    const response = await API.get("/products", { params });
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch products"
    );
  }
};

// Fetch single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await API.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch product"
    );
  }
};
