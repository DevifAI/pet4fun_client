// WishListItem.jsx
import React from "react";

const WishListItem = ({ item, onRemove }) => {
  return (
    <div className="wishlist-item">
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        <i className="fas fa-times"></i>
      </button>

      <div className="row align-items-center">
        <div className="col-md-2 col-3 mb-3 mb-md-0">
          <img src={item.img} alt={item.title} className="product-image" />
        </div>

        <div className="col-md-7 col-9">
          <div className="assured-badge">
            <i className="fas fa-shield-alt"></i> Assured
          </div>
          <h5 className="product-title">{item.title}</h5>

          <div className="price-section">
            <span className="current-price">{item.price}</span>
            <span className="original-price">{item.originalPrice}</span>
            <span className="discount">{item.discount}</span>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary-custom">
              <i className="fas fa-shopping-cart me-1"></i> Add to Cart
            </button>
            <button className="btn btn-outline-custom">
              <i className="fas fa-eye me-1"></i> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
