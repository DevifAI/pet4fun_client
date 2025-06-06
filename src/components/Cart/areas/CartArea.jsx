import React from 'react';

import { useState } from "react";
import ProductCartItem from "./ProductCartItem";
import { Link } from 'react-router-dom';

// Main CartArea component
const initialProducts = [
  {
    id: 1,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp",
    name: "Cotton T-shirt",
    category: "Shirt",
    price: 44.0,
    qty: 1,
  },
  {
    id: 2,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",
    name: "Cotton T-shirt",
    category: "Shirt",
    price: 44.0,
    qty: 1,
  },
  {
    id: 3,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp",
    name: "Cotton T-shirt",
    category: "Shirt",
    price: 44.0,
    qty: 1,
  },
];

const CartArea = () => {
  const [cartProducts, setCartProducts] = useState(initialProducts);

  const handleIncrease = (idx) => {
    setCartProducts((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const handleDecrease = (idx) => {
    setCartProducts((prev) =>
      prev.map((p, i) =>
        i === idx && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
      )
    );
  };

  const handleRemove = (idx) => {
    setCartProducts((prev) => prev.filter((_, i) => i !== idx));
  };

  const subtotal = cartProducts.reduce((sum, p) => sum + p.price * p.qty, 0);
  const promoDiscount = 0; // You can add promo logic here
  const total = subtotal - promoDiscount + 5; // Example: ₹5 shipping

  return (
    <section
      className="h-100 h-custom"
      style={{
        background: "#f8f8f8",
        minHeight: "calc(100vh - 100px)",
        padding: "20px 0 80px 0",
        marginBottom: 0,
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2 shadow-lg"
              style={{
                borderRadius: "20px",
                border: "none",
                overflow: "hidden",
              }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="fw-bold mb-0 text-primary">
                          My Cart
                          <strong className="shake">
                            <img
                              src="assets/img/icon/pet_icon02.svg"
                              alt=""
                              className="injectable"
                            />
                          </strong>
                        </h2>
                        <h6 className="mb-0 text-muted badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                          {cartProducts.length} items
                        </h6>
                      </div>

                      <div className="cart-divider"></div>

                      {/* Product List */}
                      {cartProducts.map((product, idx) => (
                        <React.Fragment key={product.id}>
                          <ProductCartItem
                            product={product}
                            onIncrease={() => handleIncrease(idx)}
                            onDecrease={() => handleDecrease(idx)}
                            onRemove={() => handleRemove(idx)}
                          />
                          <div className="cart-divider"></div>
                        </React.Fragment>
                      ))}

                      <div className="pt-4">
                        <h6 className="mb-0">
                          <Link
                            to="/shop"
                            className="text-body text-decoration-none back-to-shop"
                          >
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div className="col-lg-4 summary-section">
                    <div className="p-5">
                      <h3 className="fw-bold mb-4 mt-2 pt-1 text-white">
                        Summary
                      </h3>

                      <div className="summary-divider"></div>

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase text-white-50">
                          Items {cartProducts.length}
                        </h5>
                        <h5 className="text-white" id="subtotal">
                          ₹{subtotal.toFixed(2)}
                        </h5>
                      </div>

                      <h5 className="text-uppercase mb-3 text-white-50">
                        Promo Code
                      </h5>

                      <div className="mb-4">
                        <div className="promo-input-container">
                          <input
                            type="text"
                            className="promo-input"
                            placeholder="Enter your code"
                          />
                          <button className="promo-btn">
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>

                      <div className="summary-divider"></div>

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase text-white fw-bold">
                          Total Price
                        </h5>
                        <h5 className="text-white fw-bold" id="total">
                          ₹{total.toFixed(2)}
                        </h5>
                      </div>

                      <button type="button" className="checkout-btn w-100">
                        <i className="fas fa-credit-card me-2"></i>
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                  {/* End Summary */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartArea;
