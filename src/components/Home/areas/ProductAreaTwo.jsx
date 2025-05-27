import React from "react";
import ProductItemTwo from "./ProductItemTwo";

import products_img06 from "../../../assets/img/products/products_img06.jpg";
import products_img07 from "../../../assets/img/products/products_img07.jpg";
import products_img08 from "../../../assets/img/products/products_img08.jpg";
import products_img09 from "../../../assets/img/products/products_img09.jpg";
import products_img10 from "../../../assets/img/products/products_img10.jpg";
import title_shape from "../../../assets/img/images/title_shape.svg";

import products_shape01 from "../../../assets/img/products/products_shape01.png";
import products_shape02 from "../../../assets/img/products/products_shape02.png";
import ComingTime from "./ComingTime";

const products = [
  {
    img: products_img06,
    title: "Dog Puzzle Toys, Squeaky Treat Dispensing Dog",
    price: "₹18.00",
    oldPrice: "₹33.00",
  },
  {
    img: products_img07,
    title: "Zesty Paws Calming Puppy Bites Stress Relief for Dogs, 60 Count",
    price: "₹16.00",
    oldPrice: "₹50.00",
  },
  {
    img: products_img08,
    title: "Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz.",
    price: "₹30.00",
    oldPrice: "₹88.00",
  },
  {
    img: products_img09,
    title: "The Kitten House with Mat Sleeping Bed House",
    price: "₹22.00",
    oldPrice: "₹59.00",
  },
  {
    img: products_img10,
    title: "Dog Harness-Neoprene Comfort Liner-Orange and Comfort",
    price: "₹11.00",
    oldPrice: "₹48.00",
  },
];

const ProductAreaTwo = () => {
  return (
    <section className="product__area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section__title-two mb-20">
              <h2 className="title">
                Hot Sale Products
                <img src={title_shape} alt="" className="injectable" />
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="coming-time-wrap">
              <div className="coming-time">
                <ComingTime endDate="2025-06-30T00:00:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container-two">
        <div className="product__item-wrap-two">
          <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
            {products.map((product, idx) => (
              <ProductItemTwo key={idx} {...product} />
            ))}
          </div>
        </div>
      </div>
      <div className="product__shape-wrap">
        <img src={products_shape01} alt="shape" className="ribbonRotate" />
        <img
          src={products_shape02}
          alt="shape"
          data-aos="fade-up-right"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default ProductAreaTwo;
