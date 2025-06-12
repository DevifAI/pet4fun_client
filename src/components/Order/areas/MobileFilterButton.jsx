import React from "react";

const MobileFilterButton = ({ onClick }) => {
  return (
    <button className="mobile-filter-btn pulse" onClick={onClick}>
      <i className="fas fa-filter"></i> Filters
    </button>
  );
};

export default MobileFilterButton;
