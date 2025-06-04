import React from "react";
import shop_img01 from "../../../assets/img/shop/shop_img01.jpg";
import shop_img02 from "../../../assets/img/shop/shop_img02.jpg";
import shop_img03 from "../../../assets/img/shop/shop_img03.jpg";
import shop_img04 from "../../../assets/img/shop/shop_img04.jpg";
import shop_img05 from "../../../assets/img/shop/shop_img05.jpg";
import shop_img06 from "../../../assets/img/shop/shop_img06.jpg";
import shop_img07 from "../../../assets/img/shop/shop_img07.jpg";
import shop_img08 from "../../../assets/img/shop/shop_img08.jpg";
import shop_img09 from "../../../assets/img/shop/shop_img09.jpg";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import Pagination from "../../Pagination";

const products = [
  {
    img: shop_img01,
    title: "Cute French Bulldog",
    gender: "Male",
    breed: "French",
    location: "Bakersfield, California",
  },
  {
    img: shop_img02,
    title: "purebred pussycat",
    gender: "Female",
    breed: "Germany",
    location: "Central Park, New York",
  },
  {
    img: shop_img03,
    title: "Italian Rabbit",
    gender: "Male",
    breed: "Italy",
    location: "Birmingham, Alabama",
  },
  {
    img: shop_img04,
    title: "Macaw Russian",
    gender: "Male",
    breed: "Canada",
    location: "Anchorage, Alaska",
  },
  {
    img: shop_img05,
    title: "Egypt Cat",
    gender: "Male",
    breed: "Egypt",
    location: "Bakersfield, California",
  },
  {
    img: shop_img06,
    title: "Australian Shepherd",
    gender: "Female",
    breed: "Australia",
    location: "Central Park, New York",
  },
  {
    img: shop_img07,
    title: "Beagle Britain",
    gender: "Female",
    breed: "Egypt",
    location: "Anchorage, Alaska",
  },
  {
    img: shop_img08,
    title: "Maltipoo USA",
    gender: "Male",
    breed: "USA",
    location: "Birmingham, Alabama",
  },
  {
    img: shop_img09,
    title: "purebred pussycat",
    gender: "Female",
    breed: "Germany",
    location: "Central Park, New York",
  },
];

const ProductsArea = () => {
  return (
    <section className="animal__area-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
            <div
              className="products-cards-scroll"
              style={{
                maxHeight: "100vh",
                overflowY: "auto",
                paddingRight: 16,
              }}
            >
              <div className="row">
                {products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </div>
            <Pagination />
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* Sidebar code here */}
            <ProductFilters />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsArea;