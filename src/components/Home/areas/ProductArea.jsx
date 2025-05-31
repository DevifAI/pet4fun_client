import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductItem from "./ProductItem";
import products_img05 from "../../../assets/img/products/products_img05.jpg";
import title_shape from "../../../assets/img/images/title_shape.svg";

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
  const [activeTab, setActiveTab] = useState("all");

  // You can filter products for each tab if needed
  const getTabProducts = () => products;

  return (
    <section className="product__area">
      <style>
        {`
        .product__nav-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          gap: 10px;
        }
        `}
      </style>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="section__title-two mb-25">
              <h2 className="title">
                Featured Products
                <img src={title_shape} alt="" className="injectable" />
              </h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="product__tab-wrap mb-25">
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link${
                      activeTab === "all" ? " active" : ""
                    }`}
                    onClick={() => setActiveTab("all")}
                    type="button"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link${
                      activeTab === "best" ? " active" : ""
                    }`}
                    onClick={() => setActiveTab("best")}
                    type="button"
                  >
                    Best Seller
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link${
                      activeTab === "sale" ? " active" : ""
                    }`}
                    onClick={() => setActiveTab("sale")}
                    type="button"
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
              {["all", "best", "sale"].map((tab) =>
                activeTab === tab ? (
                  <div
                    key={tab}
                    className="tab-pane fade show active"
                    id={`${tab}-tab-pane`}
                    role="tabpanel"
                    aria-labelledby={`${tab}-tab`}
                    tabIndex="0"
                  >
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      slidesPerView={4}
                      spaceBetween={30}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                      }}
                      loop={true}
                    >
                      {getTabProducts().map((product, idx) => (
                        <SwiperSlide key={idx}>
                          <ProductItem {...product} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
