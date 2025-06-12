import React, { useState } from "react";
import MobileFilter from "./MobileFilter";
import MobileFilterButton from "./MobileFilterButton";

const FilterWrapper = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <>
      <MobileFilterButton onClick={() => setIsMobileFilterOpen(true)} />
      <MobileFilter
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
      />
    </>
  );
};

export default FilterWrapper;
