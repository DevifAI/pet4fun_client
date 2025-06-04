import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import shop_img01 from "../../../assets/img/shop/shop_img01.jpg";
import shop_img02 from "../../../assets/img/shop/shop_img02.jpg";
import shop_img03 from "../../../assets/img/shop/shop_img03.jpg";
import shop_img04 from "../../../assets/img/shop/shop_img04.jpg";
import shop_img05 from "../../../assets/img/shop/shop_img05.jpg";

const related = [
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
];

const RelatedProducts = () => (
  <div className="related__animal-area" style={{ marginTop: 40 }}>
    <div className="row align-items-end">
      <div className="col-md-8">
        <h3 className="related__animal-title">You May Also Like</h3>
      </div>
    </div>
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      loop
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      className="pet-active-two"
    >
      {related.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="animal__item animal__item-two animal__item-three shine-animate-item">
            <div className="animal__thumb animal__thumb-two shine-animate">
              <a href="">
                <img src={item.img} alt="img" />
              </a>
              <a href="" className="wishlist">
                <i className="flaticon-love"></i>
              </a>
            </div>
            <div className="animal__content animal__content-two">
              <h4 className="title">
                <a href="">{item.title}</a>
              </h4>
              <div className="pet-info">
                <ul className="list-wrap">
                  <li>
                    Gender: <span>{item.gender}</span>
                  </li>
                  <li>
                    Breed: <span>{item.breed}</span>
                  </li>
                </ul>
              </div>
              <div className="location">
                <i className="flaticon-placeholder"></i>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default RelatedProducts;
