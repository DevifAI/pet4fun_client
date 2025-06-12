import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/slice/categorySlice";

const PET_TYPES = ["dog", "cat", "rabbit", "bird", "fish", "other"];
const BREEDS = [
  "Airedale Terrier",
  "American Eskimo",
  "Basset Hound",
  "Bernese Mountain Dog",
  "Bichon Frise",
];
const GENDERS = ["male", "female"];
const LOCATIONS = ["NewYork City", "Kansas City", "NewJersey"];

const ProductFilters = ({ filters, setFilters }) => {
  const dispatch = useDispatch();
  const { categories, loading: catLoading } = useSelector(
    (state) => state.categories
  );

  // Local state for filter selections
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // Sync localFilters with filters if filters change from outside (e.g. reset)
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  // Helper for checkbox arrays
  const handleCheckbox = (key, value) => {
    setLocalFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  // Helper to get children for a parent
  const getChildren = (parentId) =>
    categories.filter((cat) => String(cat.parentCategory) === String(parentId));

  // Handle slider
  const handleSlider = ([min, max]) => {
    setLocalFilters((prev) => ({
      ...prev,
      minPrice: min,
      maxPrice: max,
    }));
  };

  // Handle search input
  const handleSearch = (e) => {
    setLocalFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  // Apply button handler
  const handleApply = (e) => {
    e.preventDefault();
    setFilters({ ...localFilters, page: 1 });
  };

  return (
    <aside className="animal__sidebar">
      <div className="animal__widget">
        <h4 className="animal__widget-title">Search</h4>
        <div className="sidebar-search-form">
          <form onSubmit={handleApply}>
            <input
              type="text"
              placeholder="Type Keywords. . ."
              value={localFilters.search}
              onChange={handleSearch}
            />
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
            value={[localFilters.minPrice, localFilters.maxPrice]}
            onChange={handleSlider}
            allowCross={false}
          />
          <div style={{ marginTop: "12px", fontWeight: "bold" }}>
            Selected: ${localFilters.minPrice} - ${localFilters.maxPrice}
          </div>
        </div>
      </div>
      <div className="animal__widget">
        <h4 className="animal__widget-title">Categories</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            {catLoading && <li>Loading...</li>}
            {!catLoading &&
              categories
                .filter((cat) => !cat.parentCategory)
                .map((parent) => (
                  <li key={parent._id}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`parent_cat_${parent._id}`}
                        checked={localFilters.categories.includes(parent._id)}
                        onChange={() => handleCheckbox("categories", parent._id)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`parent_cat_${parent._id}`}
                      >
                        {parent.name}
                      </label>
                    </div>
                    {/* Show children if parent is checked */}
                    {localFilters.categories.includes(parent._id) &&
                      getChildren(parent._id).length > 0 && (
                        <ul className="list-wrap" style={{ marginLeft: 20 }}>
                          {getChildren(parent._id).map((child) => (
                            <li key={child._id}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`child_cat_${child._id}`}
                                  checked={localFilters.categories.includes(child._id)}
                                  onChange={() => handleCheckbox("categories", child._id)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`child_cat_${child._id}`}
                                >
                                  {child.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
          </ul>
        </div>
      </div>
      {/* Pet Types */}
      <div className="animal__widget">
        <h4 className="animal__widget-title">Pet Types</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            {PET_TYPES.map((type) => (
              <li key={type}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`petType_${type}`}
                    checked={localFilters.petType.includes(type)}
                    onChange={() => handleCheckbox("petType", type)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`petType_${type}`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Breeds */}
      <div className="animal__widget">
        <h4 className="animal__widget-title">Breeds</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            {BREEDS.map((breed) => (
              <li key={breed}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`breed_${breed}`}
                    checked={localFilters.breed.includes(breed)}
                    onChange={() => handleCheckbox("breed", breed)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`breed_${breed}`}
                  >
                    {breed}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Gender */}
      <div className="animal__widget">
        <h4 className="animal__widget-title">Gender</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            {GENDERS.map((gender) => (
              <li key={gender}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`gender_${gender}`}
                    checked={localFilters.gender.includes(gender)}
                    onChange={() => handleCheckbox("gender", gender)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`gender_${gender}`}
                  >
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Location */}
      <div className="animal__widget">
        <h4 className="animal__widget-title">Location</h4>
        <div className="courses-cat-list">
          <ul className="list-wrap">
            {LOCATIONS.map((loc) => (
              <li key={loc}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`loc_${loc}`}
                    checked={localFilters.location.includes(loc)}
                    onChange={() => handleCheckbox("location", loc)}
                  />
                  <label className="form-check-label" htmlFor={`loc_${loc}`}>
                    {loc}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Apply Button */}
      <div style={{ textAlign: "center", margin: "16px 0" }}>
        <button className="btn btn-primary" onClick={handleApply}>
          Apply
        </button>
      </div>
    </aside>
  );
};

export default ProductFilters;