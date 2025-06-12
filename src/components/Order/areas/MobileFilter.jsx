import React from "react";

const MobileFilter = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-filters">
      <div className="mobile-filters-content">
        <div className="mobile-filter-header">
          <h5>
            <i className="fas fa-filter"></i> Filters
          </h5>
          <button className="close-filters" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Filter Section 1 */}
        <div className="filter-section">
          <h6>Order Status</h6>
          <div className="filter-option">
            <input type="checkbox" id="mobile-on-the-way" name="status" />
            <label htmlFor="mobile-on-the-way">On the way</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              id="mobile-delivered"
              name="status"
              defaultChecked
            />
            <label htmlFor="mobile-delivered">Delivered</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="mobile-cancelled" name="status" />
            <label htmlFor="mobile-cancelled">Cancelled</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="mobile-returned" name="status" />
            <label htmlFor="mobile-returned">Returned</label>
          </div>
        </div>

        {/* Filter Section 2 */}
        <div className="filter-section">
          <h6>Order Time</h6>
          <div className="filter-option">
            <input type="checkbox" id="mobile-last-30-days" name="time" />
            <label htmlFor="mobile-last-30-days">Last 30 days</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              id="mobile-2024"
              name="time"
              defaultChecked
            />
            <label htmlFor="mobile-2024">2024</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="mobile-2023" name="time" />
            <label htmlFor="mobile-2023">2023</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="mobile-2022" name="time" />
            <label htmlFor="mobile-2022">2022</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="mobile-2021" name="time" />
            <label htmlFor="mobile-2021">2021</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="mobile-older" name="time" />
            <label htmlFor="mobile-older">Older</label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="filter-actions">
          <button className="btn-clear" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-apply"
            onClick={() => {
              alert("Apply filter logic here");
              onClose();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
