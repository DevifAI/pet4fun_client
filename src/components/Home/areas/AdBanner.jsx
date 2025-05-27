import advertisement from "../../../assets/img/images/advertisement.jpg";

const AdBanner = () => {
  return (
    <div className="ad-banner-area pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ad-banner-img">
              <a href="#">
                <img src={advertisement} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
