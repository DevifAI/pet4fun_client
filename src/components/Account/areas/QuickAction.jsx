import { Link } from "react-router-dom";

const QuickAction = () => {
  return (
    <div className="menu-section loading">
      <div className="row g-0">
        <div className="col-6">
          <div className="menu-item">
            <div className="menu-item-content">
              <Link to="/orders" className="menu-item-left">
                <i className="fas fa-shopping-bag menu-icon"></i>
                <div className="menu-text">
                  <div className="menu-title">Orders</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="menu-item">
            <Link to="/wishlist" className="menu-item-content">
              <div className="menu-item-left">
                <i className="fas fa-heart menu-icon"></i>
                <div className="menu-text">
                  <div className="menu-title">Wishlist</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-6">
          <div className="menu-item">
            <div className="menu-item-content">
              <div className="menu-item-left">
                <i className="fas fa-tags menu-icon"></i>
                <div className="menu-text">
                  <div className="menu-title">Offers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="menu-item">
            <div className="menu-item-content">
              <div className="menu-item-left">
                <i className="fas fa-question-circle menu-icon"></i>
                <div className="menu-text">
                  <div className="menu-title">Help Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAction;
