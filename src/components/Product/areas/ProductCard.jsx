import { Link } from "react-router-dom";

const ProductCard = ({ idx, product }) => {
  return (
    <div className="col-xl-4 col-md-6" key={idx}>
      <div className="animal__item animal__item-two animal__item-three shine-animate-item">
        <div className="animal__thumb animal__thumb-two shine-animate">
          <Link to="/productDetails">
            <img src={product.img} alt="img" />
          </Link>
          <a href="" className="wishlist">
            <i className="flaticon-love"></i>
          </a>
        </div>
        <div className="animal__content animal__content-two">
          <h4 className="title">
            <Link to="/productDetails">{product.title}</Link>
          </h4>
          <div className="pet-info">
            <ul className="list-wrap">
              <li>
                Gender: <span>{product.gender}</span>
              </li>
              <li>
                Breed: <span>{product.breed}</span>
              </li>
            </ul>
          </div>
          <div className="location">
            <i className="flaticon-placeholder"></i>
            <span>{product.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
