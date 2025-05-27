import features_icon01 from "../../../assets/img/icon/features_icon01.svg";
import features_icon02 from "../../../assets/img/icon/features_icon02.svg";
import features_icon03 from "../../../assets/img/icon/features_icon03.svg";
import features_icon04 from "../../../assets/img/icon/features_icon04.svg";

const Features = () => {
  return (
    <section className="features__area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="features__item">
              <div className="features__icon">
                <img src={features_icon01} alt="" className="injectable" />
              </div>
              <div className="features__content">
                <h4 className="title">Free Shipping</h4>
                <p>for orders over ₹200</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="features__item">
              <div className="features__icon">
                <img src={features_icon02} alt="" className="injectable" />
              </div>
              <div className="features__content">
                <h4 className="title">Money Guarantee</h4>
                <p>30 days for an exchange</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="features__item">
              <div className="features__icon">
                <img src={features_icon03} alt="" className="injectable" />
              </div>
              <div className="features__content">
                <h4 className="title">100% Return Policy</h4>
                <p>Any Time Return Product</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="features__item">
              <div className="features__icon">
                <img src={features_icon04} alt="" className="injectable" />
              </div>
              <div className="features__content">
                <h4 className="title">Best Deal Offer</h4>
                <p>Grab Your Gear and Go</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
