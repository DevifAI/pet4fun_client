import React, { useEffect, useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import Pagination from "../../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../../redux/slice/productSlice";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const ProductsArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get products and filters from Redux store
  const { products, loading, error, total, page, pages, filters } = useSelector(
    (state) => state.productFilter
  );

  // Initialize filters from URL
  const [activeFilters, setActiveFilters] = useState(() => {
    const queryParams = queryString.parse(location.search);
    return {
      categorySlug: queryParams.categorySlug || "",
      subCategorySlug: queryParams.subCategorySlug || "",
      childSubCategorySlug: queryParams.childSubCategorySlug || "",
      minPrice: queryParams.minPrice || "",
      maxPrice: queryParams.maxPrice || "",
      brand: queryParams.brand || "",
      type: queryParams.type || "",
      usage: queryParams.usage || "",
      page: queryParams.page || 1,
      limit: 12,
    };
  });

  // Update filters when URL changes
  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    setActiveFilters((prev) => ({
      ...prev,
      categorySlug: queryParams.categorySlug || "",
      subCategorySlug: queryParams.subCategorySlug || "",
      childSubCategorySlug: queryParams.childSubCategorySlug || "",
      page: queryParams.page || 1, // Reset to page 1 when category changes
    }));
  }, [location.search]);

  // Fetch products when filters change
  useEffect(() => {
    const params = { ...activeFilters };
    // Remove empty values
    Object.keys(params).forEach((key) => {
      if (
        params[key] === "" ||
        params[key] === null ||
        params[key] === undefined
      ) {
        delete params[key];
      }
    });

    // Update URL
    navigate(`/shop?${queryString.stringify(params)}`, { replace: true });

    // Dispatch API call
    dispatch(getFilteredProducts(params));
  }, [activeFilters, dispatch, navigate]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setActiveFilters((prev) => ({ ...prev, page: newPage }));
  };

  // Handle filter change
  const handleFilterChange = (newFilters) => {
    setActiveFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  return (
    <section className="animal__area-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
            <div
              className="products-cards-scroll"
              style={{ maxHeight: "80vh", overflowY: "auto", paddingRight: 16 }}
            >
              <div className="row">
                {loading && <div>Loading...</div>}
                {error && <div className="text-danger">{error}</div>}
                {!loading && !error && products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : (
                  <div>No products found</div>
                )}
              </div>
            </div>
            <Pagination
              currentPage={page}
              totalPages={pages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="col-xl-3 col-lg-4">
            <ProductFilters
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsArea;
