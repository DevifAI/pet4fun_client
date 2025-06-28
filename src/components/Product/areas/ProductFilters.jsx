import React, { useState, useEffect } from "react";


const ProductFilters = ({ filters, activeFilters, onFilterChange }) => {
  // Initialize with default values
  const defaultMin = filters.price?.min || 0;
  const defaultMax = Math.max(filters.price?.max || 1000, defaultMin + 10); // Ensure max > min

  // Local state for slider values
  const [sliderValues, setSliderValues] = useState([
    activeFilters.minPrice || defaultMin,
    activeFilters.maxPrice || defaultMax,
  ]);

  // Update slider values when filters change from outside
  useEffect(() => {
    setSliderValues([
      activeFilters.minPrice || defaultMin,
      activeFilters.maxPrice || defaultMax,
    ]);
  }, [activeFilters.minPrice, activeFilters.maxPrice, defaultMin, defaultMax]);

  // Handle price range change
  const handlePriceChange = (e, thumbIndex) => {
    const newValue = parseInt(e.target.value);
    const newValues = [...sliderValues];
    newValues[thumbIndex] = newValue;
    
    // Ensure min <= max
    if (thumbIndex === 0 && newValue > sliderValues[1]) {
      newValues[1] = newValue;
    } else if (thumbIndex === 1 && newValue < sliderValues[0]) {
      newValues[0] = newValue;
    }
    
    setSliderValues(newValues);
    onFilterChange({
      minPrice: newValues[0] === defaultMin ? undefined : newValues[0],
      maxPrice: newValues[1] === defaultMax ? undefined : newValues[1],
    });
  };

  // Handle brand filter change
  const handleBrandChange = (brand) => {
    onFilterChange({
      brand: activeFilters.brand === brand ? "" : brand,
      page: 1 // Reset to first page when filter changes
    });
  };

  // Handle type filter change
  const handleTypeChange = (type) => {
    onFilterChange({
      type: activeFilters.type === type ? "" : type,
      page: 1
    });
  };

  // Handle usage filter change
  const handleUsageChange = (usage) => {
    onFilterChange({
      usage: activeFilters.usage === usage ? "" : usage,
      page: 1
    });
  };

  // Calculate progress bar width and position
  const progressLeft = ((sliderValues[0] - defaultMin) / (defaultMax - defaultMin)) * 100;
  const progressWidth = ((sliderValues[1] - sliderValues[0]) / (defaultMax - defaultMin)) * 100;

  return (
    <aside className="animal__sidebar">
      {/* Price Filter */}
      <div className="animal__widget">
        <h4 className="animal__widget-title">Price Range</h4>
        <div className="price_filter" style={{ padding: "10px 0" }}>
          <div className="price-range-slider">
            <div className="slider-container">
              <div 
                className="slider-progress" 
                style={{
                  left: `${progressLeft}%`,
                  width: `${progressWidth}%`
                }}
              />
              <input
                type="range"
                min={defaultMin}
                max={defaultMax}
                value={sliderValues[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="slider-thumb thumb--left"
              />
              <input
                type="range"
                min={defaultMin}
                max={defaultMax}
                value={sliderValues[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="slider-thumb thumb--right"
              />
            </div>
            <div className="price-values">
              <span>₹{sliderValues[0]}</span>
              <span>₹{sliderValues[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      {filters.brands?.length > 0 && (
        <div className="animal__widget">
          <h4 className="animal__widget-title">Brands</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              {filters.brands.map((brand) => (
                <li key={brand.name}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`brand_${brand.name}`}
                      checked={activeFilters.brand === brand.name}
                      onChange={() => handleBrandChange(brand.name)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`brand_${brand.name}`}
                    >
                      {brand.name} ({brand.count})
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Type Filter */}
      {filters.types?.length > 0 && (
        <div className="animal__widget">
          <h4 className="animal__widget-title">Types</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              {filters.types.map((type) => (
                <li key={type}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`type_${type}`}
                      checked={activeFilters.type === type}
                      onChange={() => handleTypeChange(type)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`type_${type}`}
                    >
                      {type}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Usage Filter */}
      {filters.usages?.length > 0 && (
        <div className="animal__widget">
          <h4 className="animal__widget-title">Usages</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              {filters.usages.map((usage) => (
                <li key={usage}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`usage_${usage}`}
                      checked={activeFilters.usage === usage}
                      onChange={() => handleUsageChange(usage)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`usage_${usage}`}
                    >
                      {usage}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ProductFilters;