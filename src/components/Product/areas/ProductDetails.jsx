import React from "react";
import Breadcrumb from "../../Breadcrumb";
import check_icon02 from "../../../assets/img/icon/check_icon02.svg";
import pet_details01 from "../../../assets/img/shop/pet_details01.jpg";
import pet_details02 from "../../../assets/img/shop/pet_details02.jpg";
import pet_details03 from "../../../assets/img/shop/pet_details03.jpg";
import pet_details04 from "../../../assets/img/shop/pet_details04.jpg";
import RelatedProducts from "./RelatedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const petImages = [pet_details01, pet_details02, pet_details03, pet_details04];

const ProductDetails = () => {
  return (
    <div>
      <header>
        <Breadcrumb
          title="Pet Details"
          breadcrumbItems={[
            { label: "Home", link: "/" },
            { label: "Pet Details" },
          ]}
        />
      </header>
      <section className="animal__details-area">
        <div className="container">
          <div className="animal__details-wrap">
            <div className="row">
              <div className="col-61">
                <div className="animal__details-img-wrap">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                    style={{ width: "100%", marginBottom: 10 }}
                  >
                    {petImages.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`pet${idx}`}
                          style={{ width: "100%" }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    className="thumbs"
                    style={{ display: "flex", gap: 10, marginTop: 10 }}
                  >
                    {petImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`thumb${idx}`}
                        style={{ width: 60, cursor: "pointer" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="animal__details-description">
                  <h4 className="title">Description</h4>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    ew year make a type speci awmen bookbsites and e-commerce
                    shops. We know how hard.when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not centurieswhen an unknown printer
                    took a galley of type and scrambled.
                  </p>
                </div>
                <div className="animal__details-info-wrap">
                  <h4 className="title">More Additional Information</h4>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    ew year make a type speci awmen bookbsites and e-commerce
                    shops. We know how hard.
                  </p>
                  <div className="introducing__list-box">
                    <ul className="list-wrap">
                      {[
                        "Vaccine Completed",
                        "24/7 emergency assistance",
                        "6 Month Health Insurance",
                        "Health Record Profile",
                        "100% Coverage",
                        "NYC sales tax",
                      ].map((item, idx) => (
                        <li key={idx}>
                          <span className="icon">
                            <img
                              src={check_icon02}
                              alt=""
                              className="injectable"
                            />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-39">
                <aside className="animal__details-sidebar">
                  <div className="animal__details-widget">
                    <div className="animal__details-sidebar-info">
                      <h4 className="title">The Adult Brown Tabby Cat</h4>
                      <p>
                        when an unknown printer took a galley offer type
                        anaweard scramyear make a type specimen.
                      </p>
                      <h4 className="price">$257.00</h4>
                      <ul className="list-wrap">
                        <li>
                          <span>Available Date:</span>09, Sep 2023
                        </li>
                        <li>
                          <span>Breed:</span>Shih Tzu
                        </li>
                        <li>
                          <span>Color:</span>Brown/white
                        </li>
                        <li>
                          <span>Gender:</span>Male
                        </li>
                        <li>
                          <span>Weight:</span>9-12lbs
                        </li>
                        <li>
                          <span>Puppy ID:</span>6191-EP
                        </li>
                        <li>
                          <span>Date of Birth:</span>09, Jul 2023
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__details-widget">
                    <h4 className="widget-title">Payment Type</h4>
                    <div className="payment__type-wrap">
                      <form action="#" className="payment__form">
                        <div className="select-grp">
                          <select name="pet_type" className="orderby">
                            <option value="Select">Select</option>
                            <option value="Select One">Select One</option>
                            <option value="Select Two">Select Two</option>
                            <option value="Select Three">Select Three</option>
                          </select>
                        </div>
                        <button type="submit">Bring Me Home</button>
                      </form>
                      <div className="social-wrap">
                        <h6 className="title">Share This Post:</h6>
                        <ul className="list-wrap">
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.whatsapp.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-whatsapp"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="animal__details-widget">
                    <div className="animal__details-map">
                      <h4 className="widget-title">Map Location</h4>
                      <div className="location-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
                          style={{ border: 0, width: "100%", height: 200 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="map"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
