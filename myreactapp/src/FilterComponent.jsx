// // import { useState } from "react";

// // export default function FilterComponent() {
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [selectedFilter, setSelectedFilter] = useState("");

// //   const toggleFilters = () => setShowFilters(!showFilters);

// //   const selectFilter = (filter) => {
// //     setSelectedFilter(filter);
// //     setShowFilters(false);
// //   };

// //   return (
// //     <div className="filter-container">
// //       <div className="filter-toggle" onClick={toggleFilters}>
// //         Filter by
// //       </div>
// //       {showFilters && (
// //         <div className="filter-options">
// //           <div onClick={() => selectFilter("policy-status")}>
// //             Filter by Policy Status
// //           </div>
// //           <div onClick={() => selectFilter("renewal-date")}>
// //             Filter by Renewal Date
// //           </div>
// //           <div onClick={() => selectFilter("customer-name")}>
// //             Filter by Customer Name
// //           </div>
// //         </div>
// //       )}
// //       {selectedFilter === "policy-status" && (
// //         <div className="filter2">
// //           <h2>Filter by Policy Status</h2>
// //           <div className="filter-options">
// //             <label>
// //               <input type="checkbox" name="status" value="active" />
// //               Active
// //             </label>
// //             <label>
// //               <input type="checkbox" name="status" value="expired" />
// //               Expired
// //             </label>
// //           </div>
// //         </div>
// //       )}
// //       {selectedFilter === "renewal-date" && (
// //         <div className="filter2">
// //           <h2>Filter by Renewal Date</h2>
// //           <input
// //             type="range"
// //             id="renewal-date"
// //             min="0"
// //             max="50"
// //             step="5"
// //             defaultValue="0"
// //           />
// //           <div className="range-value">
// //             Expiring within <span id="renewal-value">0</span> days.
// //           </div>
// //         </div>
// //       )}
// //       {selectedFilter === "customer-name" && (
// //         <div className="filter2">
// //           <h2>Filter by Customer Name</h2>
// //           <select name="customer" id="customer-name">
// //             <option value="best_first">Customer 1</option>
// //             <option value="best_last">Customer 2</option>
// //             <option value="four_stars">Customer 3</option>
// //             <option value="three_stars">Customer 4</option>
// //           </select>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // import { useState } from "react";

// // export default function FilterComponent() {
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [selectedFilter, setSelectedFilter] = useState("");

// //   const handleMouseEnter = () => setShowFilters(true);
// //   const handleMouseLeave = () => setShowFilters(false);

// //   const selectFilter = (filter) => {
// //     setSelectedFilter(filter);
// //     setShowFilters(false);
// //   };

// //   return (
// //     <div className="filter-container">
// //       <div
// //         className="filter-toggle"
// //         onMouseEnter={handleMouseEnter}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         Filter by
// //         {showFilters && (
// //           <div className="filter-options">
// //             <div onClick={() => selectFilter("policy-status")}>
// //               Filter by Policy Status
// //             </div>
// //             <div onClick={() => selectFilter("renewal-date")}>
// //               Filter by Renewal Date
// //             </div>
// //             <div onClick={() => selectFilter("customer-name")}>
// //               Filter by Customer Name
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {selectedFilter === "policy-status" && (
// //         <div className="filter2">
// //           <h2>Filter by Policy Status</h2>
// //           <div className="filter-options">
// //             <label>
// //               <input type="checkbox" name="status" value="active" />
// //               Active
// //             </label>
// //             <label>
// //               <input type="checkbox" name="status" value="expired" />
// //               Expired
// //             </label>
// //           </div>
// //         </div>
// //       )}
// //       {selectedFilter === "renewal-date" && (
// //         <div className="filter2">
// //           <h2>Filter by Renewal Date</h2>
// //           <input
// //             type="range"
// //             id="renewal-date"
// //             min="0"
// //             max="50"
// //             step="5"
// //             defaultValue="0"
// //           />
// //           <div className="range-value">
// //             Expiring within <span id="renewal-value"></span> days.
// //           </div>
// //         </div>
// //       )}
// //       {selectedFilter === "customer-name" && (
// //         <div className="filter2">
// //           <h2>Filter by Customer Name</h2>
// //           <select name="customer" id="customer-name">
// //             <option value="best_first">Customer 1</option>
// //             <option value="best_last">Customer 2</option>
// //             <option value="four_stars">Customer 3</option>
// //             <option value="three_stars">Customer 4</option>
// //           </select>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // import { useState } from "react";

// // export default function FilterComponent() {
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [selectedFilter, setSelectedFilter] = useState("");
// //   const [locked, setLocked] = useState(false); // To manage click toggle

// //   const handleMouseEnter = () => {
// //     if (!locked) {
// //       setShowFilters(true);
// //     }
// //   };

// //   const handleMouseLeave = () => {
// //     if (!locked) {
// //       setShowFilters(false);
// //     }
// //   };

// //   const handleToggleClick = () => {
// //     setLocked(!locked); // Toggle lock state on click
// //     setShowFilters(!locked ? true : false); // Keep filters open if locking, otherwise close them
// //   };

// //   const handleFilterSelect = (filter) => {
// //     setSelectedFilter(filter);
// //     setShowFilters(false);
// //     setLocked(false); // Reset lock after selection
// //   };

// //   return (
// //     <div className="filter">
// //       <button
// //         className="filter__toggle"
// //         onClick={handleToggleClick}
// //         onMouseEnter={handleMouseEnter}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         Filter by
// //       </button>

// //       {showFilters && (
// //         <div className="filter__options">
// //           <button
// //             className="filter__option"
// //             onClick={() => handleFilterSelect("policy-status")}
// //           >
// //             Policy Status
// //           </button>
// //           <button
// //             className="filter__option"
// //             onClick={() => handleFilterSelect("renewal-date")}
// //           >
// //             Renewal Date
// //           </button>
// //           {/* <button
// //             className="filter__option"
// //             onClick={() => handleFilterSelect("customer-name")}
// //           >
// //             Customer Name
// //           </button> */}
// //         </div>
// //       )}

// //       {selectedFilter === "policy-status" && (
// //         <div className="filter__section">
// //           <h2 className="filter__title">Filter by Policy Status</h2>
// //           <div className="filter__options--status">
// //             <label>
// //               <input type="radio" name="status" value="active" />
// //               Active
// //             </label>
// //             <label>
// //               <input type="radio" name="status" value="expired" />
// //               Expired
// //             </label>
// //           </div>
// //         </div>
// //       )}
// //       {selectedFilter === "renewal-date" && (
// //         <div className="filter__section">
// //           <h2 className="filter__title">Filter by Renewal Date</h2>
// //           <input
// //             type="range"
// //             id="renewal-date"
// //             min="0"
// //             max="50"
// //             step="5"
// //             defaultValue="0"
// //             onChange={(e) => {
// //               document.getElementById("renewal-value").innerText =
// //                 e.target.value;
// //             }}
// //           />
// //           <div className="filter__range-value">
// //             Expiring within
// //             <span id="renewal-value">0</span>
// //             days.
// //           </div>
// //         </div>
// //       )}

// //       {/* {selectedFilter === "customer-name" && (
// //         <div className="filter__section">
// //           <h2 className="filter__title">Filter by Customer Name</h2>
// //           <select name="customer" id="customer-name">
// //             <option value="customer_1">Customer 1</option>
// //             <option value="customer_2">Customer 2</option>
// //             <option value="customer_3">Customer 3</option>
// //             <option value="customer_4">Customer 4</option>
// //           </select>
// //         </div>
// //       )} */}
// //     </div>
// //   );
// // }

// import { useState } from "react";

// export default function FilterComponent({ onFilterChange }) {
//   // Accept the onFilterChange prop
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState("");
//   const [locked, setLocked] = useState(false);

//   const handleMouseEnter = () => {
//     if (!locked) {
//       setShowFilters(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!locked) {
//       setShowFilters(false);
//     }
//   };

//   const handleToggleClick = () => {
//     setLocked(!locked);
//     setShowFilters(!locked ? true : false);
//   };

//   const handleFilterSelect = (filter) => {
//     setSelectedFilter(filter);
//     setShowFilters(false);
//     setLocked(false);
//     if (onFilterChange) {
//       onFilterChange({ filterType: filter, filterValue: null }); // Notify parent
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
//     if (onFilterChange) {
//       onFilterChange({
//         filterType: "renewal-date",
//         filterValue: e.target.value,
//       });
//     }
//   };

//   return (
//     <div className="filter">
//       <button
//         className="filter__toggle"
//         onClick={handleToggleClick}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Filter by
//       </button>

//       {showFilters && (
//         <div className="filter__options">
//           <button
//             className="filter__option"
//             onClick={() => handleFilterSelect("policy-status")}
//           >
//             Policy Status
//           </button>
//           <button
//             className="filter__option"
//             onClick={() => handleFilterSelect("renewal-date")}
//           >
//             Renewal Date
//           </button>
//         </div>
//       )}

//       {selectedFilter === "policy-status" && (
//         <div className="filter__section">
//           <h2 className="filter__title">Filter by Policy Status</h2>
//           <div className="filter__options--status">
//             <label>
//               <input
//                 type="radio"
//                 name="status"
//                 value="active"
//                 onChange={handleStatusChange}
//               />
//               Active
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="status"
//                 value="expired"
//                 onChange={handleStatusChange}
//               />
//               Expired
//             </label>
//           </div>
//         </div>
//       )}

//       {selectedFilter === "renewal-date" && (
//         <div className="filter__section">
//           <h2 className="filter__title">Filter by Renewal Date</h2>
//           <input
//             type="range"
//             id="renewal-date"
//             min="0"
//             max="50"
//             step="5"
//             defaultValue="0"
//             onChange={handleRenewalChange}
//           />
//           <div className="filter__range-value">
//             Expiring within
//             <span id="renewal-value">0</span>
//             days.
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";

export default function FilterComponent({ onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [locked, setLocked] = useState(false);
  const [renewalValue, setRenewalValue] = useState(0); // State to track the renewal date range value

  const handleMouseEnter = () => {
    if (!locked) {
      setShowFilters(true);
    }
  };

  const handleMouseLeave = () => {
    if (!locked) {
      setShowFilters(false);
    }
  };

  const handleToggleClick = () => {
    setLocked(!locked);
    setShowFilters(!locked ? true : false);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setShowFilters(false);
    setLocked(false);
    if (onFilterChange) {
      onFilterChange({ filterType: filter, filterValue: null }); // Notify parent
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
    setRenewalValue(value); // Update the renewal value state
    if (onFilterChange) {
      onFilterChange({
        filterType: "renewal-date",
        filterValue: value,
      });
    }
  };

  return (
    <div className="filter">
      <button
        className="filter__toggle"
        onClick={handleToggleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
          <button
            className="filter__option"
            onClick={() => handleFilterSelect("renewal-date")}
          >
            Renewal Date
          </button>
        </div>
      )}

      {selectedFilter === "policy-status" && (
        <div className="filter__section">
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
      )}

      {selectedFilter === "renewal-date" && (
        <div className="filter__section">
          <h2 className="filter__title">Filter by Renewal Date</h2>
          <input
            type="range"
            id="renewal-date"
            min="0"
            max="50"
            step="5"
            value={renewalValue} // Bind the value to state
            onChange={handleRenewalChange}
          />
          <div className="filter__range-value">
            Expiring within <span id="renewal-value">{renewalValue}</span> days.
          </div>
        </div>
      )}
    </div>
  );
}
