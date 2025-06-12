import React from "react";

const FeedBack = () => {
  return (
    <div className="menu-section loading">
      <h3 className="section-title">Feedback & Information</h3>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-file-contract menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Terms, Policies and Licenses</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-question-circle menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Browse FAQs</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
