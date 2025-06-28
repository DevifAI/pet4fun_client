import React from "react";

const ProductCartItem = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="row align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <div className="product-image-container">
            <img
              src={product.img}
              className="product-image"
              alt={product.name}
            />
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted small">{product.category}</h6>
          <h6 className="mb-0 fw-semibold">{product.name}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2">
          <div className="quantity-control">
            <button
              className="qty-btn minus-btn"
              onClick={onDecrease}
              disabled={product.qty <= 1}
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="number"
              className="qty-input"
              value={product.qty}
              min="1"
              readOnly
            />
            <button className="qty-btn plus-btn" onClick={onIncrease}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0 fw-bold text-primary price">
            ₹{(product.price * product.qty).toFixed(2)}
          </h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <button className="remove-btn2" onClick={onRemove}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;
