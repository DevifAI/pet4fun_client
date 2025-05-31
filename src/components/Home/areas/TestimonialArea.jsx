import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import quote02 from "../../../assets/img/icon/quote02.svg";
import testi_author01 from "../../../assets/img/images/testi_author01.png";

const testimonials = [
  {
    content: `“ Duis aute irure dolor in repreerit in voluptate
      velitesse We understand that your furry aute irure dolor
      in repreerit in voluptate just about the best thing you
      can do. dolor in repreerit in voluptate understand that
      you ”`,
    author: "Uraney Jacke",
    role: "Business Study",
    img: testi_author01,
  },
  {
    content: `“ Duis aute irure dolor in repreerit in voluptate
      velitesse We understand that your furry aute irure dolor
      in repreerit in voluptate just about the best thing you
      can do. dolor in repreerit in voluptate understand that
      you ”`,
    author: "Uraney Jacke",
    role: "Business Study",
    img: testi_author01,
  },
];

const TestimonialArea = () => {
  return (
    <section className="testimonial__area-four">
      <div className="container">
        <div className="testimonial__item-wrap-four">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            loop={true}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
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
                    <p>{item.content}</p>
                  </div>
                  <div className="testimonial__author-two testimonial__author-four">
                    <div className="testimonial__author-thumb">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="testimonial__author-content">
                      <h4 className="title">{item.author}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
