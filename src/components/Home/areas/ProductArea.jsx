import ProductItem from "./ProductItem";

import products_img05 from "../../../assets/img/products/products_img05.jpg";
import title_shape from "../../../assets/img/images/title_shape.svg";
import { useEffect } from "react";

const products = [
  {
    img: products_img05, // use the imported variable here
    title: "Some Descriptions here ...",
    price: "₹12.00",
    oldPrice: "₹25.00",
    badge: "New",
    badgeClass: "",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
  {
    img: products_img05,
    title: "Some Descriptions here ...",
    price: "₹20.00",
    oldPrice: "₹30.00",
    badge: "Sale!",
    badgeClass: "sale-wrap-two",
  },
];

const ProductArea = () => {
  useEffect(() => {
    // Only run if Swiper is available globally
    if (window.Swiper) {
      new window.Swiper(".product-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        },
        navigation: {
          nextEl: ".product-button-next",
          prevEl: ".product-button-prev",
        },
      });
    }
  }, []);
  return (
    <section className="product__area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="section__title-two mb-25">
              <h2 className="title">
                Featured Products
                <img
                  src={title_shape}
                  alt=""
                  className="injectable"
                />
              </h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="product__tab-wrap mb-25">
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="all-tab-pane"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="best-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#best-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="best-tab-pane"
                    aria-selected="false"
                  >
                    Best Seller
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="sale-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sale-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="sale-tab-pane"
                    aria-selected="false"
                  >
                    Sale
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tab-content product__item-wrap"
              id="productTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="all-tab-pane"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabindex="0"
              >
                <div className="swiper product-active">
                  <div className="swiper-wrapper">
                    {products.map((product, idx) => (
                      <div className="swiper-slide" key={idx}>
                        <ProductItem {...product} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product__nav-wrap">
                  <button className="product-button-prev">
                    <i className="flaticon-left-chevron"></i>
                  </button>
                  <button className="product-button-next">
                    <i className="flaticon-right-arrow-angle"></i>
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="best-tab-pane"
                role="tabpanel"
                aria-labelledby="best-tab"
                tabindex="0"
              >
                <div className="swiper product-active">
                  <div className="swiper-wrapper">
                    {products.map((product, idx) => (
                      <div className="swiper-slide" key={idx}>
                        <ProductItem {...product} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product__nav-wrap">
                  <button className="product-button-prev">
                    <i className="flaticon-left-chevron"></i>
                  </button>
                  <button className="product-button-next">
                    <i className="flaticon-right-arrow-angle"></i>
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="sale-tab-pane"
                role="tabpanel"
                aria-labelledby="sale-tab"
                tabindex="0"
              >
                <div className="swiper product-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="product__item">
                        <div className="product__thumb">
                          <a href="">
                            <img
                              src="assets/img/products/products_img05.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product__action">
                            <a href="">
                              <i className="flaticon-love"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-loupe"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-exchange"></i>
                            </a>
                          </div>
                          <div className="sale-wrap">
                            <span>New</span>
                          </div>
                          <div className="product__add-cart">
                            <a href="" className="btn">
                              <i className="flaticon-shopping-bag"></i>Add To
                              Cart
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__reviews">
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                          <h4 className="title">
                            <a href="">Some Descriptions here ...</a>
                          </h4>
                          <h3 className="price">
                            ₹12.00 <del>₹25.00</del>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product__item">
                        <div className="product__thumb">
                          <a href="">
                            <img
                              src="assets/img/products/products_img05.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product__action">
                            <a href="">
                              <i className="flaticon-love"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-loupe"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-exchange"></i>
                            </a>
                          </div>
                          <div className="sale-wrap sale-wrap-two">
                            <span>Sale!</span>
                          </div>
                          <div className="product__add-cart">
                            <a href="" className="btn">
                              <i className="flaticon-shopping-bag"></i>Add To
                              Cart
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__reviews">
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                          <h4 className="title">
                            <a href="">Some Descriptions here ...</a>
                          </h4>
                          <h3 className="price">
                            ₹20.00 <del>₹30.00</del>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product__item">
                        <div className="product__thumb">
                          <a href="">
                            <img
                              src="assets/img/products/products_img05.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product__action">
                            <a href="">
                              <i className="flaticon-love"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-loupe"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-exchange"></i>
                            </a>
                          </div>
                          <div className="product__add-cart">
                            <a href="" className="btn">
                              <i className="flaticon-shopping-bag"></i>Add To
                              Cart
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__reviews">
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                          <h4 className="title">
                            <a href="">Some Descriptions here ...</a>
                          </h4>
                          <h3 className="price">
                            ₹36.00 <del>₹56.00</del>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product__item">
                        <div className="product__thumb">
                          <a href="">
                            <img
                              src="assets/img/products/products_img05.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product__action">
                            <a href="">
                              <i className="flaticon-love"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-loupe"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-exchange"></i>
                            </a>
                          </div>
                          <div className="sale-wrap sale-wrap-two">
                            <span>Sale!</span>
                          </div>
                          <div className="product__add-cart">
                            <a href="" className="btn">
                              <i className="flaticon-shopping-bag"></i>Add To
                              Cart
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__reviews">
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                          <h4 className="title">
                            <a href="">Some Descriptions here ...</a>
                          </h4>
                          <h3 className="price">
                            ₹18.00 <del>₹33.00</del>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product__item">
                        <div className="product__thumb">
                          <a href="">
                            <img
                              src="assets/img/products/products_img05.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product__action">
                            <a href="">
                              <i className="flaticon-love"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-loupe"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-exchange"></i>
                            </a>
                          </div>
                          <div className="sale-wrap">
                            <span>New</span>
                          </div>
                          <div className="product__add-cart">
                            <a href="" className="btn">
                              <i className="flaticon-shopping-bag"></i>Add To
                              Cart
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__reviews">
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                          <h4 className="title">
                            <a href="">Some Descriptions here ...</a>
                          </h4>
                          <h3 className="price">
                            ₹19.00 <del>₹28.00</del>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product__item">
                        <div className="product__thumb">
                          <a href="">
                            <img
                              src="assets/img/products/products_img05.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product__action">
                            <a href="">
                              <i className="flaticon-love"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-loupe"></i>
                            </a>
                            <a href="">
                              <i className="flaticon-exchange"></i>
                            </a>
                          </div>
                          <div className="sale-wrap sale-wrap-two">
                            <span>Sale!</span>
                          </div>
                          <div className="product__add-cart">
                            <a href="" className="btn">
                              <i className="flaticon-shopping-bag"></i>Add To
                              Cart
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__reviews">
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                          <h4 className="title">
                            <a href="">Some Descriptions here ...</a>
                          </h4>
                          <h3 className="price">
                            ₹18.00 <del>₹33.00</del>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__nav-wrap">
                  <button className="product-button-prev">
                    <i className="flaticon-left-chevron"></i>
                  </button>
                  <button className="product-button-next">
                    <i className="flaticon-right-arrow-angle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
