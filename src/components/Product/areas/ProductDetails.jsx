import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  getRelatedProducts,
} from "../../../redux/slice/productDetailsSlice";
import Breadcrumb from "../../Breadcrumb";
import RelatedProducts from "./RelatedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import check_icon02 from "../../../assets/img/icon/check_icon02.svg";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, relatedProducts, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (productId) {
      dispatch(getProductById(productId));
      dispatch(getRelatedProducts(productId));
    }
  }, [productId, dispatch]);

  if (loading)
    return <div className="loading-spinner">Loading product details...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div>
      <header>
        <Breadcrumb
          title={product.name}
          breadcrumbItems={[
            { label: "Home", link: "/" },
            {
              label: product.category_id?.name || "Products",
              link: product.category_id?.slug
                ? `/shop?categorySlug=${product.category_id.slug}`
                : "/shop",
            },
            { label: product.name },
          ]}
        />
      </header>
      <section className="animal__details-area">
        <div className="container">
          <div className="animal__details-wrap">
            <div className="row">
              <div className="col-61">
                <div className="animal__details-img-wrap">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                    style={{ width: "100%", marginBottom: 10 }}
                  >
                    {product.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`${product.name}-${idx}`}
                          style={{ width: "100%" }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    className="thumbs"
                    style={{ display: "flex", gap: 10, marginTop: 10 }}
                  >
                    {product.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`thumb-${product.name}-${idx}`}
                        style={{ width: 60, cursor: "pointer" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="animal__details-description">
                  <h4 className="title">Description</h4>
                  <p>{product.description || "No description available"}</p>
                </div>
                <div className="animal__details-info-wrap">
                  <h4 className="title">More Additional Information</h4>
                  <p>
                    {product.additionalInfo ||
                      "Additional information not available for this product."}
                  </p>
                  <div className="introducing__list-box">
                    <ul className="list-wrap">
                      {[
                        product.isVaccinated && "Vaccine Completed",
                        "24/7 emergency assistance",
                        product.healthInsurance && "6 Month Health Insurance",
                        "Health Record Profile",
                        "100% Coverage",
                        "NYC sales tax",
                      ]
                        .filter(Boolean)
                        .map((item, idx) => (
                          <li key={idx}>
                            <span className="icon">
                              <img
                                src={check_icon02}
                                alt=""
                                className="injectable"
                              />
                            </span>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-39">
                <aside className="animal__details-sidebar">
                  <div className="animal__details-widget">
                    <div className="animal__details-sidebar-info">
                      <h4 className="title">{product.name}</h4>
                      <p>
                        {product.shortDescription ||
                          "Detailed information about this product."}
                      </p>
                      <h4 className="price">
                        {product.discountPrice ? (
                          <>
                            <span
                              style={{
                                textDecoration: "line-through",
                                marginRight: "10px",
                              }}
                            >
                              ${product.price}
                            </span>
                            ${product.discountPrice}
                          </>
                        ) : (
                          `$${product.price}`
                        )}
                      </h4>
                      <ul className="list-wrap">
                        {product.availableFrom && (
                          <li>
                            <span>Available Date:</span>
                            {new Date(
                              product.availableFrom
                            ).toLocaleDateString()}
                          </li>
                        )}
                        {product.breed && (
                          <li>
                            <span>Breed:</span>
                            {typeof product.breed === "object"
                              ? product.breed.name
                              : product.breed}
                          </li>
                        )}
                        {product.color && (
                          <li>
                            <span>Color:</span>
                            {product.color}
                          </li>
                        )}
                        {product.gender && (
                          <li>
                            <span>Gender:</span>
                            {product.gender}
                          </li>
                        )}
                        {product.weight && (
                          <li>
                            <span>Weight:</span>
                            {product.weight}
                          </li>
                        )}
                        {product._id && (
                          <li>
                            <span>Product ID:</span>
                            {product._id
                              .toString()
                              .substring(0, 8)
                              .toUpperCase()}
                          </li>
                        )}
                        {product.dob && (
                          <li>
                            <span>Date of Birth:</span>
                            {new Date(product.dob).toLocaleDateString()}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="animal__details-widget">
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <button
                        type="button"
                        className="bring-me-home-btn"
                        style={{
                          padding: "12px 25px",
                          backgroundColor: "#ff6b00",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "16px",
                          width: "100%",
                          textAlign: "center",
                          opacity: product.stock <= 0 ? 0.6 : 1,
                          pointerEvents: product.stock <= 0 ? "none" : "auto",
                        }}
                      >
                        {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                      </button>
                      <button
                        type="button"
                        className="bring-me-home-btn"
                        style={{
                          padding: "12px 25px",
                          backgroundColor: "#333",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "16px",
                          width: "100%",
                          textAlign: "center",
                          opacity: product.stock <= 0 ? 0.6 : 1,
                          pointerEvents: product.stock <= 0 ? "none" : "auto",
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  {product.location && (
                    <div className="animal__details-widget">
                      <div className="animal__details-map">
                        <h4 className="widget-title">Map Location</h4>
                        <div className="location-map">
                          <iframe
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                              product.location
                            )}`}
                            style={{ border: 0, width: "100%", height: 200 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="map"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  )}
                </aside>
              </div>
            </div>
          </div>
          {relatedProducts.length > 0 && (
            <div className="related-products-section">
              <h3 className="section-title">You May Also Like</h3>
              <RelatedProducts products={relatedProducts} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
