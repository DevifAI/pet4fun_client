import h3_banner_slide01 from "../../../assets/img/banner/h3_banner_slide01.jpg";
import h3_banner_img01 from "../../../assets/img/banner/h3_banner_img01.jpg";
import h3_banner_img02 from "../../../assets/img/banner/h3_banner_img02.jpg";
import right_arrow from "../../../assets/img/icon/right_arrow.svg";
import { useEffect } from "react";

const BannerArea = () => {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".slider__active", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        effect: "fade",
        fadeEffect: { crossFade: true },
      });
    }
    if (window.SVGInject) {
      SVGInject(document.querySelectorAll("img.injectable"));
    }
  }, []);
  return (
    <section className="banner__area-four">
      <div className="container">
        <div className="row gutter-20">
          <div className="col-lg-8">
            <div className="swiper slider__active">
              <div className="swiper-wrapper">
                <div className="swiper-slide slider__single">
                  <div
                    className="slider__bg"
                    style={{
                      backgroundImage: `url(${h3_banner_slide01})`,
                    }}
                  ></div>
                  <div className="slider__content">
                    <h1 className="title">
                      Pet Healthy Food <br />& Accessories
                    </h1>
                    <h4 className="sub-title">Delicious Food Make With Love</h4>
                    <a href="" className="btn">
                      Shop Now
                      <img src={right_arrow} alt="" className="injectable" />
                    </a>
                    <div className="discount__shape">
                      {/* Remove the empty src image */}
                      <h2 className="title" style={{ color: "red" }}>
                        30% <span>Flat Sale!</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide slider__single">
                  <div
                    className="slider__bg"
                    style={{
                      backgroundImage: `url(${h3_banner_slide01})`,
                    }}
                  ></div>
                  <div className="slider__content">
                    <h1 className="title">
                      Pet Healthy Food <br />& Accessories
                    </h1>
                    <h4 className="sub-title">Delicious Food Make With Love</h4>
                    <a href="" className="btn">
                      Shop Now
                      <img src={right_arrow} alt="" className="injectable" />
                    </a>
                    <div className="discount__shape">
                      {/* Remove the empty src image */}
                      <h2 className="title" style={{ color: "green" }}>
                        50% <span>Flat Sale!</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner__post-item-wrap">
              <div className="banner__post-item shine-animate-item">
                <div className="banner__post-thumb shine-animate">
                  <img src={h3_banner_img01} alt="img" />
                </div>
                <div className="banner__post-content">
                  <h2 className="title">
                    The Best Quality House
                    <span>
                      <strong>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 66 42"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.0952 2.41842C18.5987 1.09323 22.1904 0.607768 25.8799 0.378947C29.7051 0.141712 49.0312 0.123062 52.6628 1.05552C57.0727 2.1878 62.9146 2.42124 64.8207 6.374C66.7564 10.3881 62.3819 15.0531 61.5901 19.5685C60.9204 23.3881 62.1249 27.2823 60.5219 30.8902C58.8022 34.7608 56.2758 38.8903 52.2619 40.5639C48.2685 42.2289 28.5024 39.5356 24.2541 39.5109C20.1671 39.4871 16.0887 41.3434 12.1742 40.4213C7.68366 39.3634 2.26479 38.0084 0.524582 33.9207C-1.24656 29.7604 3.05097 25.1169 3.70387 20.525C4.27715 16.493 1.88863 12.1607 4.12361 8.60819C6.35856 5.05573 11.107 3.92693 15.0952 2.41842Z"
                            fill="#FFAD0E"
                          />
                        </svg>
                        15%
                      </strong>
                      Off For Your Pet
                    </span>
                  </h2>
                </div>
              </div>
              <div className="banner__post-item-two shine-animate-item">
                <div className="banner__post-thumb shine-animate">
                  <img src={h3_banner_img02} alt="img" />
                </div>
                <div className="banner__post-content-two">
                  <h2 className="title">
                    For Your <br />
                    Pet Busket
                  </h2>
                  <a href="" className="btn">
                    Shop Now
                    <img src={right_arrow} alt="" className="injectable" />
                  </a>
                </div>
                <div className="discount__shape-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 74"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M150 0H0C7.59494 63.3462 56.3291 75.6203 79.7468 73.8391C135.57 69.9528 149.842 22.9938 150 0Z"
                      fill="#FF3489"
                    />
                  </svg>
                  <h2 className="title">
                    12% <span>Off</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
