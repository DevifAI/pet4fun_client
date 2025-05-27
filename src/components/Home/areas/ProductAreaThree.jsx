import React from "react";
import ProductItemThree from "./ProductItemThree";
import h_products_img01 from "../../../assets/img/products/h_products_img01.jpg";
import h_products_img02 from "../../../assets/img/products/h_products_img02.jpg";
import latest_products_img01 from "../../../assets/img/products/latest_products_img01.jpg";
import latest_products_img02 from "../../../assets/img/products/latest_products_img02.jpg";
import latest_products_img03 from "../../../assets/img/products/latest_products_img03.jpg";
import latest_products_img04 from "../../../assets/img/products/latest_products_img04.jpg";
import latest_products_img05 from "../../../assets/img/products/latest_products_img05.jpg";
import latest_products_img06 from "../../../assets/img/products/latest_products_img06.jpg";

import title_shape from "../../../assets/img/images/title_shape.svg";

// Hot Sale Products Array
const hotSaleProducts = [
  {
    img: h_products_img01,
    badge: "New",
    badgeClass: "sale-wrap",
    reviews: 2,
    rating: 5,
    title: "IAMS Minichunks Chicken & Whole Grains Dry Dog Food fo",
    price: "₹11.00",
    oldPrice: "₹48.00",
    isMain: true,
  },
  {
    img: latest_products_img01,
    title: "TrustyPup Dragon Squeaky Plush Chew ..",
    price: "₹47.00",
    oldPrice: "₹82.00",
  },
  {
    img: latest_products_img02,
    title: "Vital Pet Life Salmon Oil for Dogs and Cat",
    price: "₹12.00",
    oldPrice: null,
  },
  {
    img: latest_products_img03,
    title: "Dog HarnesNeoprene Comfort Liner...",
    price: "₹30.00",
    oldPrice: "₹48.00",
  },
];

// Latest Products Array
const latestProducts = [
  {
    img: h_products_img02,
    badge: "Sale!",
    badgeClass: "sale-wrap sale-wrap-two",
    reviews: 2,
    rating: 5,
    title: "Pro-Sense Multivitamin, 90ct For your Lovely Dog",
    price: "₹15.00",
    oldPrice: "₹28.00",
    isMain: true,
  },
  {
    img: latest_products_img04,
    title: "Pet Grooming Glove for Dogs & Cats ...",
    price: "₹12.00",
    oldPrice: "₹20.00",
  },
  {
    img: latest_products_img05,
    title: "Beloved Pets For Playing Toy",
    price: "₹25.00",
    oldPrice: null,
  },
  {
    img: latest_products_img06,
    title: "Zesty Paws Calming Puppy Bites ...",
    price: "₹45.00",
    oldPrice: "₹80.00",
  },
];

const ProductAreaThree = () => {
  return (
    <section className="product__area-three">
      <div className="container">
        <div className="row">
          {/* Hot Sale Products */}
          <div className="col-lg-6">
            <div className="product__inner-wrap">
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Hot Sale Products
                      <img
                        src={title_shape}
                        alt=""
                        className="injectable"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="view-all-btn">
                    <a href="">
                      See All <i className="flaticon-right-arrow-angle"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Main Product */}
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <ProductItemThree {...hotSaleProducts[0]} />
                </div>
                {/* Other Products */}
                <div className="col-xl-6 col-lg-12 col-md-6">
                  {hotSaleProducts.slice(1).map((product, idx) => (
                    <ProductItemThree key={idx} {...product} isThree />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Latest Products */}
          <div className="col-lg-6">
            <div className="product__inner-wrap">
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Latest Products
                      <img
                        src={title_shape}
                        alt=""
                        className="injectable"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="view-all-btn">
                    <a href="">
                      See All <i className="flaticon-right-arrow-angle"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Main Product */}
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <ProductItemThree {...latestProducts[0]} />
                </div>
                {/* Other Products */}
                <div className="col-xl-6 col-lg-12 col-md-6">
                  {latestProducts.slice(1).map((product, idx) => (
                    <ProductItemThree key={idx} {...product} isThree />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAreaThree;
