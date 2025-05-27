import features_img01 from "../../../assets/img/images/features_img01.jpg";
import features_img02 from "../../../assets/img/images/features_img02.jpg";
import right_arrow from "../../../assets/img/icon/right_arrow.svg";

const FeaturesTwo = () => {
  return (
    <section className="features__area-two">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="features__item-two">
              <div className="features__thumb">
                <img src={features_img01} alt="img" />
              </div>
              <div className="features__content-two">
                <h2 className="title">
                  30% <span>Sale!</span>
                </h2>
                <strong>Free Shipping</strong>
                <a href="" className="btn shop-btn">
                  Shop Now
                  <img src={right_arrow} alt="" className="injectable" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="features__item-two">
              <div className="features__thumb">
                <img src={features_img02} alt="img" />
              </div>
              <div className="features__content-two features__content-three">
                <h2 className="title">Best Premium</h2>
                <strong>Cat Food</strong>
                <a href="" className="btn shop-btn">
                  Shop Now
                  <img src={right_arrow} alt="" className="injectable" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
