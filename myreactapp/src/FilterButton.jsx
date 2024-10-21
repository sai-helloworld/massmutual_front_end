import React from "react";

const FilterButton = ({ toggleMenu }) => {
  return (
    <div className="Filter" align="center" onClick={toggleMenu}>
      Filter
    </div>
  );
};

export default FilterButton;
