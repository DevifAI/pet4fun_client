import React from "react";

import breadcrumb_img from "../../../assets/img/images/breadcrumb_img.png";
import breadcrumb_shape01 from "../../../assets/img/images/breadcrumb_shape01.png";
import breadcrumb_shape02 from "../../../assets/img/images/breadcrumb_shape02.png";

const Breadcrumb = () => {
  return (
    <section className="breadcrumb__area fix">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="breadcrumb__content">
              <h3 className="title">About Us</h3>
              <nav className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <a href="">Home</a>
                </span>
                <span className="breadcrumb-separator">
                  <i className="flaticon-right-arrow-angle"></i>
                </span>
                <span property="itemListElement" typeof="ListItem">
                  About Us
                </span>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="breadcrumb__img">
              <img
                src={breadcrumb_img}
                alt="img"
                data-aos="fade-left"
                data-aos-delay="800"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb__shape-wrap">
        <img
          src={breadcrumb_shape01}
          alt="img"
          data-aos="fade-down-right"
          data-aos-delay="400"
        />
        <img
          src={breadcrumb_shape02}
          alt="img"
          data-aos="fade-up-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default Breadcrumb;
