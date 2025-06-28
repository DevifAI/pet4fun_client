import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="animal__item animal__item-two animal__item-three shine-animate-item">
        <div className="animal__thumb animal__thumb-two shine-animate">
          <Link to={`/productDetails/${product._id}`}>
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </Link>
          <button className="wishlist">
            <i className="flaticon-love"></i>
          </button>
        </div>
        <div className="animal__content animal__content-two">
          <h4 className="title">
            <Link to={`/productDetails/${product._id}`}>{product.name}</Link>
          </h4>
          <div className="price-info">
            {product.discountPrice ? (
              <>
                <span className="original-price">₹{product.price}</span>
                <span className="discounted-price">
                  ₹{product.discountPrice}
                </span>
              </>
            ) : (
              <span className="price">₹{product.price}</span>
            )}
          </div>
          <div className="pet-info">
            <ul className="list-wrap">
              {product.size && (
                <li>
                  Size: <span>{product.size}</span>
                </li>
              )}
              {product.color && (
                <li>
                  Color: <span>{product.color}</span>
                </li>
              )}
              {product.pharmacyDetails?.type && (
                <li>
                  Type: <span>{product.pharmacyDetails.type}</span>
                </li>
              )}
            </ul>
          </div>
          <div className="tags">
            {product.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="brand">
            <i className="flaticon-tag"></i>
            <span>{product.filterAttributes?.brand}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
