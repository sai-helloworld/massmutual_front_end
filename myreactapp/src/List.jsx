// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export default function List({ searchQuery, filters }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     message: "",
//     top: 0,
//     left: 0,
//   });
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     try {
//       const result = await axios.get(
//         "http://localhost:8080/api/policies/brought/all"
//       );
//       const updatedPolicies = result.data.map((policy) => {
//         const startDate = new Date(policy.broughtDate); // Parse broughtDate
//         if (isNaN(startDate)) {
//           console.error("Invalid date for policy:", policy);
//           return {
//             ...policy,
//             renewalDate: "Invalid date",
//             status: "Invalid date", // Set status to Invalid date if the date is invalid
//           };
//         }

//         // Calculate renewalDate by adding period (months) to startDate
//         startDate.setMonth(startDate.getMonth() + policy.period);
//         const renewalDate = startDate.toISOString().split("T")[0];
//         const currentDate = new Date();

//         // Determine the status based on the renewal date
//         const status =
//           new Date(renewalDate) > currentDate ? "Active" : "Expired";

//         return {
//           ...policy,
//           renewalDate: renewalDate,
//           status: status, // Set the status based on the renewal date
//         };
//       });
//       setPolicies(updatedPolicies);
//       setFilteredPolicies(updatedPolicies);
//     } catch (error) {
//       console.error("Error loading policies:", error);
//     }
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchQuery, filters, policies]);

//   const applyFilters = () => {
//     let filtered = policies;

//     // Apply search query filter
//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Apply policy status filter
//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) =>
//           policy.status.toLowerCase() === filters.filterValue.toLowerCase()
//       );
//     }

//     // Apply renewal date filter
//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();

//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const daysUntilExpiration =
//           (renewalDate - currentDate) / (1000 * 60 * 60 * 24);

//         // Check if the renewal date is active and within the specified days
//         return renewalDate > currentDate && daysUntilExpiration <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getExpiringDate = (broughtDate, period) => {
//     const startDate = new Date(broughtDate); // Parse broughtDate

//     // Check if the startDate is valid
//     if (isNaN(startDate)) {
//       return "Invalid date";
//     }

//     startDate.setMonth(startDate.getMonth() + period); // Add period in months
//     return startDate.toISOString().split("T")[0]; // Return only the date part
//   };

//   const isExpiringSoon = (expiringDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(expiringDate); // Parse renewalDate

//     // Check if renewalDate is valid before calculating the difference
//     if (isNaN(renewal)) {
//       return false; // Do not highlight if renewalDate is invalid
//     }

//     const daysUntilExpiration = (renewal - currentDate) / (1000 * 60 * 60 * 24);

//     // Return true if the policy is expiring in the next 15 days
//     return daysUntilExpiration <= 15 && daysUntilExpiration >= 0;
//   };

//   const isExpired = (expiringDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(expiringDate); // Parse renewalDate

//     // Check if renewalDate is valid before calculating expiration
//     if (isNaN(renewal)) {
//       return false;
//     }

//     // Return true if the policy has already expired
//     return renewal < currentDate;
//   };

//   // Function to handle navigating to the renewal form
//   const handleNavigate = (policyId) => {
//     navigate(`/renewal/${policyId}`); // This ensures the correct URL structure
//   };

//   // Function to show the tooltip
//   const showTooltip = (event, message) => {
//     setTooltip({
//       visible: true,
//       message: message,
//       top: event.clientY + window.scrollY + 10, // Adjust for scroll
//       left: event.clientX + window.scrollX + 10, // Adjust for scroll
//     });
//   };

//   // Function to hide the tooltip
//   const hideTooltip = () => {
//     setTooltip({ ...tooltip, visible: false });
//   };

//   return (
//     <>
//       <div className="container list">
//         <div className="py-4">
//           <table className="table border shadow ">
//             <thead>
//               <tr>
//                 <th scope="col" className="table_border">
//                   Transaction ID
//                 </th>
//                 <th scope="col" className="table_border">
//                   Policy ID
//                 </th>
//                 <th scope="col" className="table_border">
//                   Holder Name
//                 </th>
//                 <th scope="col" className="table_border">
//                   Status
//                 </th>
//                 <th scope="col" className="table_border">
//                   Brought Date
//                 </th>
//                 <th scope="col" className="table_border">
//                   Period (Months)
//                 </th>
//                 <th scope="col" className="table_border">
//                   Last Renewal Date
//                 </th>
//                 <th scope="col" className="table_border">
//                   Expiring Date
//                 </th>
//                 <th scope="col" className="table_border">
//                   Renewal Forms
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPolicies.map((policy, index) => {
//                 const expiringDate = getExpiringDate(
//                   policy.lastRenewalDate
//                     ? policy.lastRenewalDate
//                     : policy.broughtDate,
//                   policy.period
//                 );
//                 const highlightClass = isExpired(expiringDate)
//                   ? "expired_highlight"
//                   : isExpiringSoon(expiringDate)
//                   ? "highlight"
//                   : "";

//                 return (
//                   <tr
//                     key={index}
//                     className={highlightClass}
//                     onMouseEnter={(e) => {
//                       // Prevent tooltip for "Renewal Forms" column
//                       if (
//                         !e.target
//                           .closest("td")
//                           .classList.contains("renewal_form_column")
//                       ) {
//                         if (isExpired(expiringDate)) {
//                           showTooltip(e, "This policy has expired!");
//                         } else if (isExpiringSoon(expiringDate)) {
//                           showTooltip(
//                             e,
//                             "This policy is expiring within 15 days!"
//                           );
//                         }
//                       }
//                     }}
//                     onMouseLeave={hideTooltip} // Hide tooltip on mouse leave
//                   >
//                     <th scope="row">{policy.transactionId}</th>
//                     <th scope="row">{policy.policyId}</th>
//                     <td className="table_row_elem table_data">
//                       {policy.holderName}
//                     </td>
//                     <td className="table_row_elem table_data">
//                       {policy.status}
//                     </td>
//                     <td className="table_row_elem table_data">
//                       {policy.broughtDate.split("T")[0]}{" "}
//                       {/* Display only date */}
//                     </td>
//                     <td className="table_row_elem table_data">
//                       {policy.period}
//                     </td>
//                     <td className="table_row_elem table_data">
//                       {policy.lastRenewalDate
//                         ? policy.lastRenewalDate.split("T")[0] // Extracting only the date
//                         : "Not renewed yet"}{" "}
//                     </td>

//                     <td className="table_row_elem table_data">
//                       {expiringDate}
//                     </td>
//                     <td
//                       className="table_row_elem table_data renewal_form_column"
//                       onClick={() => handleNavigate(policy.transactionId)} // Navigate to renewal form on click
//                     >
//                       <button className="table_button">Renewal Form</button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           {tooltip.visible && (
//             <div
//               className="tooltip"
//               style={{
//                 position: "absolute",
//                 top: tooltip.top,
//                 left: tooltip.left,
//                 zIndex: 1000,
//               }}
//             >
//               {tooltip.message}
//             </div>
//           )}
//         </div>
//       </div>
//       <div>
//         <div className="send_button">Send Mails</div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function List({ searchQuery, filters }) {
  const [policies, setPolicies] = useState([]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    message: "",
    top: 0,
    left: 0,
  });
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/policies/brought/all"
      );
      const updatedPolicies = result.data.map((policy) => {
        const startDate = new Date(policy.broughtDate); // Parse broughtDate
        if (isNaN(startDate)) {
          console.error("Invalid date for policy:", policy);
          return {
            ...policy,
            renewalDate: "Invalid date",
            status: "Invalid date", // Set status to Invalid date if the date is invalid
          };
        }

        // Calculate renewalDate by adding period (months) to startDate
        startDate.setMonth(startDate.getMonth() + policy.period);
        const renewalDate = startDate.toISOString().split("T")[0];
        const currentDate = new Date();

        // Determine the status based on the renewal date
        const status =
          new Date(renewalDate) > currentDate ? "Active" : "Expired";

        return {
          ...policy,
          renewalDate: renewalDate,
          status: status, // Set the status based on the renewal date
        };
      });
      setPolicies(updatedPolicies);
      setFilteredPolicies(updatedPolicies);
    } catch (error) {
      console.error("Error loading policies:", error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [searchQuery, filters, policies]);

  const applyFilters = () => {
    let filtered = policies;

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter((policy) =>
        policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply policy status filter
    if (filters.filterType === "policy-status" && filters.filterValue) {
      filtered = filtered.filter(
        (policy) =>
          policy.status.toLowerCase() === filters.filterValue.toLowerCase()
      );
    }

    // Apply renewal date filter
    if (filters.filterType === "renewal-date" && filters.filterValue) {
      const days = parseInt(filters.filterValue, 10);
      const currentDate = new Date();

      filtered = filtered.filter((policy) => {
        const renewalDate = new Date(policy.renewalDate);
        const daysUntilExpiration =
          (renewalDate - currentDate) / (1000 * 60 * 60 * 24);

        // Check if the renewal date is active and within the specified days
        return renewalDate > currentDate && daysUntilExpiration <= days;
      });
    }

    setFilteredPolicies(filtered);
  };

  const getExpiringDate = (broughtDate, period) => {
    const startDate = new Date(broughtDate); // Parse broughtDate

    // Check if the startDate is valid
    if (isNaN(startDate)) {
      return "Invalid date";
    }

    startDate.setMonth(startDate.getMonth() + period); // Add period in months
    return startDate.toISOString().split("T")[0]; // Return only the date part
  };

  const isExpiringSoon = (expiringDate) => {
    const currentDate = new Date();
    const renewal = new Date(expiringDate); // Parse renewalDate

    // Check if renewalDate is valid before calculating the difference
    if (isNaN(renewal)) {
      return false; // Do not highlight if renewalDate is invalid
    }

    const daysUntilExpiration = (renewal - currentDate) / (1000 * 60 * 60 * 24);

    // Return true if the policy is expiring in the next 15 days
    return daysUntilExpiration <= 15 && daysUntilExpiration >= 0;
  };

  const isExpired = (expiringDate) => {
    const currentDate = new Date();
    const renewal = new Date(expiringDate); // Parse renewalDate

    // Check if renewalDate is valid before calculating expiration
    if (isNaN(renewal)) {
      return false;
    }

    // Return true if the policy has already expired
    return renewal < currentDate;
  };

  // Function to handle navigating to the renewal form
  const handleNavigate = (policyId) => {
    navigate(`/renewal/${policyId}`); // This ensures the correct URL structure
  };

  // Function to handle sending expiration emails
  const handleSendExpirationEmails = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/policies/send-expiration-emails"
      );
      alert("Emails have been sent for expired policies!");
    } catch (error) {
      console.error("Error sending expiration emails:", error);
      alert("Failed to send emails.");
    }
  };

  // Function to show the tooltip
  const showTooltip = (event, message) => {
    setTooltip({
      visible: true,
      message: message,
      top: event.clientY + window.scrollY + 10, // Adjust for scroll
      left: event.clientX + window.scrollX + 10, // Adjust for scroll
    });
  };

  // Function to hide the tooltip
  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <>
      <div className="information">
        <div className="information_0">
          <div className="information_0_0"> </div>
          <div className="information_0_1">Expring with in 15-days</div>
        </div>
        <div className="information_1">
          <div className="information_1_0"> </div>
          <div className="information_1_1">Expired</div>
        </div>
      </div>
      <div className="container list">
        <div className="py-4">
          <table className="table border shadow ">
            <thead>
              <tr>
                <th scope="col" className="table_border">
                  Transaction ID
                </th>
                <th scope="col" className="table_border">
                  Policy ID
                </th>
                <th scope="col" className="table_border">
                  Holder Name
                </th>
                <th scope="col" className="table_border">
                  Status
                </th>
                <th scope="col" className="table_border">
                  Brought Date
                </th>
                <th scope="col" className="table_border">
                  Period (Months)
                </th>
                <th scope="col" className="table_border">
                  Last Renewal Date
                </th>
                <th scope="col" className="table_border">
                  Expiring Date
                </th>
                <th scope="col" className="table_border">
                  Renewal Forms
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPolicies.map((policy, index) => {
                const expiringDate = getExpiringDate(
                  policy.lastRenewalDate
                    ? policy.lastRenewalDate
                    : policy.broughtDate,
                  policy.period
                );
                const highlightClass = isExpired(expiringDate)
                  ? "expired_highlight"
                  : isExpiringSoon(expiringDate)
                  ? "highlight"
                  : "";

                return (
                  <tr
                    key={index}
                    className={highlightClass}
                    onMouseEnter={(e) => {
                      // Prevent tooltip for "Renewal Forms" column
                      if (
                        !e.target
                          .closest("td")
                          .classList.contains("renewal_form_column")
                      ) {
                        if (isExpired(expiringDate)) {
                          showTooltip(e, "This policy has expired!");
                        } else if (isExpiringSoon(expiringDate)) {
                          showTooltip(
                            e,
                            "This policy is expiring within 15 days!"
                          );
                        }
                      }
                    }}
                    onMouseLeave={hideTooltip} // Hide tooltip on mouse leave
                  >
                    <th scope="row">{policy.transactionId}</th>
                    <th scope="row">{policy.policyId}</th>
                    <td className="table_row_elem table_data">
                      {policy.holderName}
                    </td>
                    <td className="table_row_elem table_data">
                      {policy.status}
                    </td>
                    <td className="table_row_elem table_data">
                      {policy.broughtDate.split("T")[0]}{" "}
                      {/* Display only date */}
                    </td>
                    <td className="table_row_elem table_data">
                      {policy.period}
                    </td>
                    <td className="table_row_elem table_data">
                      {policy.lastRenewalDate
                        ? policy.lastRenewalDate.split("T")[0] // Extracting only the date
                        : "Not renewed yet"}{" "}
                    </td>

                    <td className="table_row_elem table_data">
                      {expiringDate}
                    </td>
                    <td
                      className="table_row_elem table_data renewal_form_column"
                      onClick={() => handleNavigate(policy.transactionId)} // Navigate to renewal form on click
                    >
                      <button className="table_button">Renew</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button onClick={handleSendExpirationEmails} className="send_button">
            Send Mails
          </button>
        </div>
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              top: tooltip.top,
              left: tooltip.left,
              position: "absolute",
              backgroundColor: "#333",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              whiteSpace: "nowrap",
              zIndex: 1000,
            }}
          >
            {tooltip.message}
          </div>
        )}
      </div>
    </>
  );
}
