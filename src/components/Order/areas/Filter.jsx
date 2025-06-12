import React from "react";

const Filter = () => {
  return (
    <div className="col-lg-3">
      <div className="filters-sidebar">
        <h5 className="filters-title">
          <i className="fas fa-filter"></i> Filters
        </h5>

        <div className="filter-section">
          <h6>Order Status</h6>
          <div className="filter-option">
            <input type="checkbox" id="on-the-way" name="status" />
            <label for="on-the-way">On the way</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="delivered" name="status" checked />
            <label for="delivered">Delivered</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="cancelled" name="status" />
            <label for="cancelled">Cancelled</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="returned" name="status" />
            <label for="returned">Returned</label>
          </div>
        </div>

        <div className="filter-section">
          <h6>Order Time</h6>
          <div className="filter-option">
            <input type="checkbox" id="last-30-days" name="time" />
            <label for="last-30-days">Last 30 days</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="2024" name="time" checked />
            <label for="2024">2024</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="2023" name="time" />
            <label for="2023">2023</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="2022" name="time" />
            <label for="2022">2022</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="2021" name="time" />
            <label for="2021">2021</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="older" name="time" />
            <label for="older">Older</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
