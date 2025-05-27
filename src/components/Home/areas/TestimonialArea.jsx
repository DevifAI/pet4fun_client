import { useEffect } from "react";
import quote02 from "../../../assets/img/icon/quote02.svg";
import right_arrow03 from "../../../assets/img/icon/right_arrow03.svg";
import testi_author01 from "../../../assets/img/images/testi_author01.png";

const TestimonialArea = () => {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".testimonial-active-two", {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".testimonial-button-next",
          prevEl: ".testimonial-button-prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        effect: "slide",
      });
    }
    if (window.SVGInject) {
      SVGInject(document.querySelectorAll("img.injectable"));
    }
  }, []);

  return (
    <section className="testimonial__area-four">
      <div className="container">
        <div className="testimonial__item-wrap-four">
          <div className="swiper testimonial-active-two">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial__item-four">
                  <div className="testimonial__icon-four">
                    <img src={quote02} alt="" className="injectable" />
                  </div>
                  <div className="testimonial__content-four">
                    <h2 className="title">Pet Health Important</h2>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      “ Duis aute irure dolor in repreerit in voluptate
                      velitesse We understand that your furry aute irure dolor
                      in repreerit in voluptate just about the best thing you
                      can do. dolor in repreerit in voluptate understand that
                      you ”
                    </p>
                  </div>
                  <div className="testimonial__author-two testimonial__author-four">
                    <div className="testimonial__author-thumb">
                      <img src={testi_author01} alt="" />
                    </div>
                    <div className="testimonial__author-content">
                      <h4 className="title">Uraney Jacke</h4>
                      <span>Business Study</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial__item-four">
                  <div className="testimonial__icon-four">
                    <img src={quote02} alt="" className="injectable" />
                  </div>
                  <div className="testimonial__content-four">
                    <h2 className="title">Pet Health Important</h2>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      “ Duis aute irure dolor in repreerit in voluptate
                      velitesse We understand that your furry aute irure dolor
                      in repreerit in voluptate just about the best thing you
                      can do. dolor in repreerit in voluptate understand that
                      you ”
                    </p>
                  </div>
                  <div className="testimonial__author-two testimonial__author-four">
                    <div className="testimonial__author-thumb">
                      <img src={testi_author01} alt="" />
                    </div>
                    <div className="testimonial__author-content">
                      <h4 className="title">Uraney Jacke</h4>
                      <span>Business Study</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__nav-wrap">
            <button className="testimonial-button-prev">
              <img src={right_arrow03} alt="" className="injectable" />
            </button>
            <button className="testimonial-button-next">
              <img src={right_arrow03} alt="" className="injectable" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
