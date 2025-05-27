import { useEffect } from "react";
import h2_brand_img01 from "../../../assets/img/brand/h2_brand_img01.png";
import h2_brand_img02 from "../../../assets/img/brand/h2_brand_img02.png";
import h2_brand_img03 from "../../../assets/img/brand/h2_brand_img03.png";
import h2_brand_img04 from "../../../assets/img/brand/h2_brand_img04.png";
import h2_brand_img05 from "../../../assets/img/brand/h2_brand_img05.png";
import h2_brand_img06 from "../../../assets/img/brand/h2_brand_img06.png";
import h2_brand_img07 from "../../../assets/img/brand/h2_brand_img07.png";

const brandImages = [
  h2_brand_img01,
  h2_brand_img02,
  h2_brand_img03,
  h2_brand_img04,
  h2_brand_img05,
  h2_brand_img06,
  h2_brand_img07,
  h2_brand_img03,
];

const BrandArea = () => {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".brand-active", {
        slidesPerView: 5,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        },
        spaceBetween: 30,
      });
    }
  }, []);

  return (
    <div className="brand__area-four">
      <div className="container">
        <div className="brand__title">
          <h5 className="title">Trusted By The World’s Best</h5>
        </div>
        <div className="swiper brand-active">
          <div className="swiper-wrapper">
            {brandImages.map((img, idx) => (
              <div className="swiper-slide" key={idx}>
                <div className="brand__item brand__item-two">
                  <img src={img} alt={`brand${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
