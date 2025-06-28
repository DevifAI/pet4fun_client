import API from "../../utils/axiosInstance";

// Fetch all products with filters, pagination, etc.
export const fetchFilteredProducts = async (params) => {
  try {
    const response = await API.get(`/products/filter`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Fetch single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await API.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Fetch related products
export const fetchRelatedProducts = async (productId) => {
  try {
    const response = await API.get(`/products/${productId}/related`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};
