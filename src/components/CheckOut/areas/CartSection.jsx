

const CartSection = () => {
  return (
    <div className="col-lg-4 order-lg-2 mb-4 cart-section">
      <div className="glass-card">
        <div className="cart-header">
          <h4>
            <i className="fas fa-shopping-bag me-2"></i>Your Cart
          </h4>
          <span className="badge bg-light text-dark rounded-pill">3</span>
        </div>
        <ul className="cart-items list-group">
          <li className="cart-item list-group-item d-flex justify-content-between">
            <div>
              <h6 className="mb-1">Premium Headphones</h6>
              <small className="text-muted">Wireless Bluetooth 5.0</small>
            </div>
            <span className="text-primary fw-bold">₹12</span>
          </li>
          <li className="cart-item list-group-item d-flex justify-content-between">
            <div>
              <h6 className="mb-1">Smart Watch</h6>
              <small className="text-muted">Fitness Tracker</small>
            </div>
            <span className="text-primary fw-bold">₹8</span>
          </li>
          <li className="cart-item list-group-item d-flex justify-content-between">
            <div>
              <h6 className="mb-1">Phone Case</h6>
              <small className="text-muted">Protective Cover</small>
            </div>
            <span className="text-primary fw-bold">₹5</span>
          </li>
          <li className="cart-item promo-item list-group-item d-flex justify-content-between">
            <div>
              <h6 className="mb-1 text-success">
                <i className="fas fa-tag me-1"></i>Promo Code
              </h6>
              <small className="text-success">WELCOME20</small>
            </div>
            <span className="text-success fw-bold">-₹5</span>
          </li>
          <li className="total-item list-group-item d-flex justify-content-between">
            <span>
              <i className="fas fa-receipt me-2"></i>Total Price
            </span>
            <strong>₹20</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartSection;
