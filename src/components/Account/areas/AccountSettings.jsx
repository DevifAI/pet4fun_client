const AccountSettings = () => {
  return (
    <div className="menu-section loading">
      <h3 className="section-title">Account Settings</h3>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-user-edit menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Edit Profile</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-credit-card menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Delivery Address</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-map-marker-alt menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Billing Address</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
