import React from "react";

const Activity = () => {
  return (
    <div className="menu-section loading">
      <h3 className="section-title">My Activity</h3>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-star menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Reviews</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-content">
          <div className="menu-item-left">
            <i className="fas fa-comments menu-icon"></i>
            <div className="menu-text">
              <div className="menu-title">Questions & Answers</div>
            </div>
          </div>
          <i className="fas fa-chevron-right menu-arrow"></i>
        </div>
      </div>
    </div>
  );
};

export default Activity;
