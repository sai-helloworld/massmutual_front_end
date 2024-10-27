// import { useState } from "react";

// export default function FilterComponent({ onFilterChange }) {
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState("");
//   const [locked, setLocked] = useState(false);
//   const [renewalValue, setRenewalValue] = useState(0);

//   const handleToggleClick = () => {
//     setLocked(!locked);
//     setShowFilters(!locked ? true : false);
//   };

//   const handleFilterSelect = (filter) => {
//     setSelectedFilter(selectedFilter === filter ? "" : filter);
//     if (onFilterChange) {
//       onFilterChange({ filterType: filter, filterValue: null });
//     }
//   };

//   const handleStatusChange = (e) => {
//     if (onFilterChange) {
//       onFilterChange({
//         filterType: "policy-status",
//         filterValue: e.target.value,
//       });
//     }
//   };

//   const handleRenewalChange = (e) => {
//     const value = e.target.value;
//     setRenewalValue(value);
//     if (onFilterChange) {
//       onFilterChange({
//         filterType: "renewal-date",
//         filterValue: value,
//       });
//     }
//   };

//   const clearFilters = () => {
//     setSelectedFilter("");
//     setRenewalValue(0);
//     if (onFilterChange) {
//       onFilterChange({ filterType: "clear", filterValue: null });
//     }
//   };

//   return (
//     <>
//       <div className="filter">
//         <button className="filter__toggle" onClick={handleToggleClick}>
//           Filter by
//         </button>

//         {showFilters && (
//           <div className="filter__options">
//             <button
//               className="filter__option"
//               onClick={() => handleFilterSelect("policy-status")}
//             >
//               Policy Status
//             </button>

//             {/* Dropdown for Policy Status */}
//             <div
//               className={`filter__dropdown ${
//                 selectedFilter === "policy-status" ? "open" : ""
//               }`}
//             >
//               <h2 className="filter__title">Filter by Policy Status</h2>
//               <div className="filter__options--status">
//                 <label>
//                   <input
//                     type="radio"
//                     name="status"
//                     value="active"
//                     onChange={handleStatusChange}
//                   />
//                   Active
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="status"
//                     value="expired"
//                     onChange={handleStatusChange}
//                   />
//                   Expired
//                 </label>
//               </div>
//             </div>

//             <button
//               className="filter__option"
//               onClick={() => handleFilterSelect("renewal-date")}
//             >
//               Renewal Date
//             </button>

//             {/* Dropdown for Renewal Date */}
//             <div
//               className={`filter__dropdown ${
//                 selectedFilter === "renewal-date" ? "open" : ""
//               }`}
//             >
//               <h2 className="filter__title">Filter by Renewal Date</h2>
//               <input
//                 type="range"
//                 id="renewal-date"
//                 min="0"
//                 max="50"
//                 step="5"
//                 value={renewalValue}
//                 onChange={handleRenewalChange}
//               />
//               <div className="filter__range-value">
//                 Expiring within <span id="renewal-value">{renewalValue}</span>{" "}
//                 days.
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <button onClick={() => clearFilters()} className="Filter">
//         Clear Filters
//       </button>
//     </>
//   );
// }

import { useState } from "react";

export default function FilterComponent({ onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [locked, setLocked] = useState(false);
  const [renewalValue, setRenewalValue] = useState(0);

  const handleToggleClick = () => {
    setLocked(!locked);
    setShowFilters(true); // Always set to true to ensure it opens
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(selectedFilter === filter ? "" : filter);
    if (onFilterChange) {
      onFilterChange({ filterType: filter, filterValue: null });
    }
  };

  const handleStatusChange = (e) => {
    if (onFilterChange) {
      onFilterChange({
        filterType: "policy-status",
        filterValue: e.target.value,
      });
    }
  };

  const handleRenewalChange = (e) => {
    const value = e.target.value;
    setRenewalValue(value);
    if (onFilterChange) {
      onFilterChange({
        filterType: "renewal-date",
        filterValue: value,
      });
    }
  };

  const clearFilters = () => {
    setSelectedFilter("");
    setRenewalValue(0);
    setShowFilters(false); // Hide the filter options container
    if (onFilterChange) {
      onFilterChange({ filterType: "clear", filterValue: null });
    }
  };

  return (
    <>
      <div className="filter">
        <button className="filter__toggle" onClick={handleToggleClick}>
          Filter by
        </button>

        {showFilters && (
          <div className="filter__options">
            <button
              className="filter__option"
              onClick={() => handleFilterSelect("policy-status")}
            >
              Policy Status
            </button>

            {/* Dropdown for Policy Status */}
            <div
              className={`filter__dropdown ${
                selectedFilter === "policy-status" ? "open" : ""
              }`}
            >
              <h2 className="filter__title">Filter by Policy Status</h2>
              <div className="filter__options--status">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    onChange={handleStatusChange}
                  />
                  Active
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="expired"
                    onChange={handleStatusChange}
                  />
                  Expired
                </label>
              </div>
            </div>

            <button
              className="filter__option"
              onClick={() => handleFilterSelect("renewal-date")}
            >
              Renewal Date
            </button>

            {/* Dropdown for Renewal Date */}
            <div
              className={`filter__dropdown ${
                selectedFilter === "renewal-date" ? "open" : ""
              }`}
            >
              <h2 className="filter__title">Filter by Renewal Date</h2>
              <input
                type="range"
                id="renewal-date"
                min="0"
                max="50"
                step="5"
                value={renewalValue}
                onChange={handleRenewalChange}
              />
              <div className="filter__range-value">
                Expiring within <span id="renewal-value">{renewalValue}</span>{" "}
                days.
              </div>
            </div>
          </div>
        )}
      </div>
      <button onClick={clearFilters} className="Filter">
        Clear Filters
      </button>
    </>
  );
}
