import React, { useEffect, useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import Pagination from "../../Pagination";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/slice/productSlice";

const ProductsArea = () => {
  const dispatch = useDispatch();
  const { products, loading, error, total, page, pages } = useSelector(
    (state) => state.products
  );

  // All filter state here
  const [filters, setFilters] = useState({
    search: "",
    minPrice: 0,
    maxPrice: 1000,
    petType: [],
    breed: [],
    gender: [],
    location: [],
    categories: [],
    page: 1,
    limit: 12,
  });

  // Update products when filters change
  useEffect(() => {
    // Prepare params for API
    const params = {
      search: filters.search,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      petType: filters.petType.join(","),
      breed: filters.breed.join(","),
      gender: filters.gender.join(","),
      location: filters.location.join(","),
      category_id: filters.categories.join(","), // send as category_id
      page: filters.page,
      limit: filters.limit,
    };
    dispatch(getAllProducts(params));
  }, [filters, dispatch]);

  // Pagination handler
  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <section className="animal__area-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
            <div
              className="products-cards-scroll"
              style={{
                maxHeight: "80vh",
                overflowY: "auto",
                paddingRight: 16,
              }}
            >
              <div className="row">
                {loading && <div>Loading...</div>}
                {error && <div className="text-danger">{error}</div>}
                {!loading && !error && products && products.length > 0
                  ? products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))
                  : null}
              </div>
            </div>
            <Pagination
              currentPage={filters.page}
              totalPages={pages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="col-xl-3 col-lg-4">
            <ProductFilters filters={filters} setFilters={setFilters} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsArea;