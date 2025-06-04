import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState } from "react";

const ProductFilters = () => {
  const [price, setPrice] = useState([0, 1000]);
  return (
    <aside className="animal__sidebar">
      <div className="animal__widget">
        <h4 className="animal__widget-title">Filters</h4>
        <div className="sidebar-search-form">
          <form action="#">
            <input type="text" placeholder="Type Keywords. . ." />
            <button type="submit">
              <i className="flaticon-loupe"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="animal__widget">
        <h4 className="animal__widget-title">Price Range</h4>
        <div className="price_filter" style={{ padding: "10px 0" }}>
          <Slider
            range
            min={0}
            max={5000}
            step={10}
            value={price}
            onChange={setPrice}
            allowCross={false}
          />
          <div style={{ marginTop: "12px", fontWeight: "bold" }}>
            Selected: ${price[0]} - ${price[1]}
          </div>
        </div>
      </div>
      <div className="animal__widget">
        <h4 className="animal__widget-title">Pet Categories</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cat_1"
                />
                <label className="form-check-label" htmlFor="cat_1">
                  Dogs <span>(344)</span>
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cat_2"
                />
                <label className="form-check-label" htmlFor="cat_2">
                  Cats <span>(12)</span>
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cat_3"
                />
                <label className="form-check-label" htmlFor="cat_3">
                  Rabbit <span>(56)</span>
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cat_4"
                />
                <label className="form-check-label" htmlFor="cat_4">
                  Birds <span>(14)</span>
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cat_5"
                />
                <label className="form-check-label" htmlFor="cat_5">
                  Fish <span>(11)</span>
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cat_6"
                />
                <label className="form-check-label" htmlFor="cat_6">
                  Others <span>(14)</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="animal__widget">
        <h4 className="animal__widget-title">Breeds</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bre_1"
                />
                <label className="form-check-label" htmlFor="bre_1">
                  Airedale Terrier
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bre_2"
                />
                <label className="form-check-label" htmlFor="bre_2">
                  American Eskimo
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bre_3"
                />
                <label className="form-check-label" htmlFor="bre_3">
                  Basset Hound
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bre_4"
                />
                <label className="form-check-label" htmlFor="bre_4">
                  Bernese Mountain Dog
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bre_5"
                />
                <label className="form-check-label" htmlFor="bre_5">
                  Bichon Frise
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="animal__widget">
        <h4 className="animal__widget-title">Gender</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gender_1"
                />
                <label className="form-check-label" htmlFor="gender_1">
                  Male (344)
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gender_2"
                />
                <label className="form-check-label" htmlFor="gender_2">
                  Female (21)
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="animal__widget">
        <h4 className="animal__widget-title">Location</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="loc_1"
                />
                <label className="form-check-label" htmlFor="loc_1">
                  All
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="loc_2"
                />
                <label className="form-check-label" htmlFor="loc_2">
                  NewYork City
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="loc_3"
                />
                <label className="form-check-label" htmlFor="loc_3">
                  Kansas City
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="loc_4"
                />
                <label className="form-check-label" htmlFor="loc_4">
                  NewJersey
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="apply-btn">
          <a href="#" className="btn">
            Apply Now
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;
