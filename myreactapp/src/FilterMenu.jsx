const FilterMenu = ({ selectFilter }) => {
  return (
    <div className="filter-menu hidden">
      <button onClick={() => selectFilter("policyStatus")}>
        Policy Status
      </button>
      <button onClick={() => selectFilter("renewalDate")}>Renewal Date</button>
      {/* <button onClick={() => selectFilter("customerName")}>
        Customer Name
      </button> */}
    </div>
  );
};

export default FilterMenu;
