// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function Home({ searchQuery }) {
// //   // Accept the searchQuery prop
// //   const [users, setUsers] = useState([]);
// //   const [filteredUsers, setFilteredUsers] = useState([]);

// //   useEffect(() => {
// //     loadUsers();
// //   }, []);

// //   const loadUsers = async () => {
// //     const result = await axios.get("http://localhost:8080/api/policies");
// //     setUsers(result.data);
// //     setFilteredUsers(result.data);
// //   };

// //   useEffect(() => {
// //     // Filter users whenever searchQuery changes
// //     const filtered = users.filter((user) =>
// //       user.username.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     setFilteredUsers(filtered);
// //   }, [searchQuery, users]);

// //   return (
// //     <div className="container list">
// //       <div className="py-4">
// //         <table className="table border shadow">
// //           <thead>
// //             <tr>
// //               <th scope="col" className="table_id table_point">
// //                 Policy ID
// //               </th>
// //               <th scope="col" className="table_point">
// //                 Policy Name
// //               </th>
// //               <th scope="col" className="table_point">
// //                 Holder Name
// //               </th>
// //               <th scope="col" className="table_point">
// //                 Status
// //               </th>
// //               <th scope="col" className="table_point">
// //                 Date
// //               </th>
// //               <th scope="col" className="table_point">
// //                 Tenure
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filteredUsers.map((user, index) => (
// //               <tr key={index}>
// //                 <th scope="row" className="table_row_elem">
// //                   {index + 1}
// //                 </th>
// //                 <td className="table_row_elem" style={{ textAlign: "center" }}>
// //                   {user.name}
// //                 </td>
// //                 <td className="table_row_elem" style={{ textAlign: "center" }}>
// //                   {user.username}
// //                 </td>
// //                 <td className="table_row_elem" style={{ textAlign: "center" }}>
// //                   {user.email}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home({ searchQuery }) {
//   // Accept the searchQuery prop
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);

//   // Load policies on component mount
//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   // Fetch the policies from the backend
//   const loadPolicies = async () => {
//     const result = await axios.get("http://localhost:8080/api/policies");
//     setPolicies(result.data);
//     setFilteredPolicies(result.data); // Set initial filtered data
//   };

//   // Filter policies based on search query
//   useEffect(() => {
//     const filtered = policies.filter(
//       (policy) =>
//         policy.policyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredPolicies(filtered);
//   }, [searchQuery, policies]);

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col" className="table_id table_point">
//                 Policy ID
//               </th>
//               <th scope="col" className="table_point">
//                 Policy Name
//               </th>
//               <th scope="col" className="table_point">
//                 Holder Name
//               </th>
//               <th scope="col" className="table_point">
//                 Status
//               </th>
//               <th scope="col" className="table_point">
//                 Activated Date
//               </th>
//               <th scope="col" className="table_point">
//                 Period (Months)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => (
//               <tr key={index}>
//                 <th scope="row" className="table_row_elem">
//                   {policy.tid}
//                 </th>
//                 <td className="table_row_elem" style={{ textAlign: "center" }}>
//                   {policy.policyName}
//                 </td>
//                 <td className="table_row_elem" style={{ textAlign: "center" }}>
//                   {policy.holderName}
//                 </td>
//                 <td className="table_row_elem" style={{ textAlign: "center" }}>
//                   {policy.status}
//                 </td>
//                 <td className="table_row_elem" style={{ textAlign: "center" }}>
//                   {policy.sDate}
//                 </td>
//                 <td className="table_row_elem" style={{ textAlign: "center" }}>
//                   {policy.period}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home({ searchQuery }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     const result = await axios.get("http://localhost:8080/api/policies");
//     setPolicies(result.data);
//     setFilteredPolicies(result.data);
//   };

//   useEffect(() => {
//     const filtered = policies.filter((policy) =>
//       policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredPolicies(filtered);
//   }, [searchQuery, policies]);

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Policy Name</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Date</th>
//               <th scope="col">Tenure</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => (
//               <tr key={index}>
//                 <th scope="row">{policy.tid}</th>
//                 <td>{policy.policyName}</td>
//                 <td>{policy.holderName}</td>
//                 <td>{policy.status}</td>
//                 <td>{policy.sdate}</td>
//                 <td>{policy.period}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FilterComponent from "./FilterComponent"; // Import the Filter component

// export default function Home({ searchQuery }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);
//   const [filters, setFilters] = useState({}); // State to store filter criteria

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     const result = await axios.get("http://localhost:8080/api/policies");
//     setPolicies(result.data);
//     setFilteredPolicies(result.data);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchQuery, filters, policies]);

//   // Function to apply filters and search query together
//   const applyFilters = () => {
//     let filtered = policies;

//     // Apply search query filtering
//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Apply status filter
//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     // Apply renewal date filter
//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       filtered = filtered.filter(
//         (policy) =>
//           Math.abs(
//             new Date(policy.renewalDate).getTime() - new Date().getTime()
//           ) /
//             (1000 * 60 * 60 * 24) <
//           days
//       );
//     }

//     setFilteredPolicies(filtered);
//   };

//   // Function to handle filter changes from the FilterComponent
//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <FilterComponent onFilterChange={handleFilterChange} />{" "}
//         {/* Include FilterComponent */}
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Policy Name</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Date</th>
//               <th scope="col">Tenure</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => (
//               <tr key={index}>
//                 <th scope="row">{policy.tid}</th>
//                 <td>{policy.policyName}</td>
//                 <td>{policy.holderName}</td>
//                 <td>{policy.status}</td>
//                 <td>{policy.sdate}</td>
//                 <td>{policy.period}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home({ searchQuery, filters }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     const result = await axios.get("http://localhost:8080/api/policies");
//     setPolicies(result.data);
//     setFilteredPolicies(result.data);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchQuery, filters, policies]);

//   // Function to apply filters and search query together
//   const applyFilters = () => {
//     let filtered = policies;

//     // Apply search query filtering
//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Apply status filter
//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     // Apply renewal date filter
//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       filtered = filtered.filter(
//         (policy) =>
//           Math.abs(
//             new Date(policy.renewalDate).getTime() - new Date().getTime()
//           ) /
//             (1000 * 60 * 60 * 24) <
//           days
//       );
//     }

//     setFilteredPolicies(filtered);
//   };

//   return (
//     <div className="container list">
//       <div className="py-4">
//         {/* Remove the FilterComponent from here */}
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Policy Name</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Date</th>
//               <th scope="col">Tenure</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => (
//               <tr key={index}>
//                 <th scope="row">{policy.tid}</th>
//                 <td>{policy.policyName}</td>
//                 <td>{policy.holderName}</td>
//                 <td>{policy.status}</td>
//                 <td>{policy.sdate}</td>
//                 <td>{policy.period}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Home({ searchQuery, filters }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     const result = await axios.get("http://localhost:8080/api/policies");
//     const updatedPolicies = result.data.map((policy) => {
//       const renewalDate = new Date(policy.sdate);
//       renewalDate.setMonth(renewalDate.getMonth() + policy.period);
//       return {
//         ...policy,
//         renewalDate: renewalDate.toISOString().split("T")[0],
//       };
//     });
//     setPolicies(updatedPolicies);
//     setFilteredPolicies(updatedPolicies);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchQuery, filters, policies]);

//   const applyFilters = () => {
//     let filtered = policies;

//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();
//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const differenceInDays =
//           Math.abs(renewalDate - currentDate) / (1000 * 60 * 60 * 24);
//         return differenceInDays <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);
//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };

//   const isExpiringSoon = (renewalDate) => {
//     const currentDate = new Date();
//     const daysUntilExpiration =
//       (new Date(renewalDate) - currentDate) / (1000 * 60 * 60 * 24);
//     return daysUntilExpiration <= 15;
//   };

//   const openRenewalForm = (policyId) => {
//     // Navigate to the renewal form page for the specific policy
//     navigate(`/renewal-form/${policyId}`);
//   };

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col" className="table_data">
//                 Policy ID
//               </th>
//               <th scope="col">Policy Name</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Date</th>
//               <th scope="col">Tenure</th>
//               <th scope="col">Renewal Date</th>
//               <th scope="col">Renewal Forms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => {
//               const highlight = isExpiringSoon(policy.renewalDate)
//                 ? "highlight"
//                 : "";
//               return (
//                 <tr key={index} className={highlight}>
//                   <th scope="row">{policy.tid}</th>
//                   <td className="table_data">{policy.policyName}</td>
//                   <td className="table_data">{policy.holderName}</td>
//                   <td className="table_data">{policy.status}</td>
//                   <td className="table_data">{policy.sdate}</td>
//                   <td className="table_data">{policy.period}</td>
//                   <td className="table_data">
//                     {getRenewalDate(policy.sdate, policy.period)}
//                   </td>
//                   <td className="table_data">
//                     <button
//                       className="table_button"
//                       onClick={() => openRenewalForm(policy.tid)}
//                     >
//                       Renewal Form
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export default function List({ searchQuery, filters }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     const result = await axios.get(
//       "http://localhost:8080/api/policies/brought/all"
//     );
//     const updatedPolicies = result.data.map((policy) => {
//       const renewalDate = new Date(policy.sdate);
//       renewalDate.setMonth(renewalDate.getMonth() + policy.period);
//       return {
//         ...policy,
//         renewalDate: renewalDate.toISOString().split("T")[0],
//       };
//     });
//     setPolicies(updatedPolicies);
//     setFilteredPolicies(updatedPolicies);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchQuery, filters, policies]);

//   const applyFilters = () => {
//     let filtered = policies;

//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();
//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const differenceInDays =
//           Math.abs(renewalDate - currentDate) / (1000 * 60 * 60 * 24);
//         return differenceInDays <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);
//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };

//   const isExpiringSoon = (renewalDate) => {
//     const currentDate = new Date();
//     const daysUntilExpiration =
//       (new Date(renewalDate) - currentDate) / (1000 * 60 * 60 * 24);
//     return daysUntilExpiration <= 15;
//   };

//   // Function to handle navigating to the renewal form
//   const handleNavigate = (policyId) => {
//     navigate(`/renewal/${policyId}`); // This ensures the correct URL structure
//   };

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Policy ID</th>
//               {/* <th scope="col">Policy Name</th> */}
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Date</th>
//               <th scope="col">Tenure</th>
//               <th scope="col">Renewal Date</th>
//               <th scope="col">Renewal Forms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => {
//               const highlight = isExpiringSoon(policy.renewalDate)
//                 ? "highlight"
//                 : "";
//               return (
//                 <tr key={index} className={highlight}>
//                   <th scope="row">{policy.tid}</th>
//                   {/* <td className="table_row_elem table_data">
//                     {policy.policyName}
//                   </td> */}
//                   <td className="table_row_elem table_data">
//                     {policy.holderName}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.status}</td>
//                   <td className="table_row_elem table_data">{policy.sdate}</td>
//                   <td className="table_row_elem table_data">{policy.period}</td>
//                   <td className="table_row_elem table_data">
//                     {getRenewalDate(policy.sdate, policy.period)}
//                   </td>
//                   <td className="table_row_elem table_data">
//                     <button
//                       className="table_button"
//                       onClick={() => handleNavigate(policy.transactionId)} // Navigate to renewal form
//                     >
//                       Renewal Form
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export default function List({ searchQuery, filters }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);
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
//         // Check if policy.sdate is valid
//         const startDate = new Date(policy.sdate);
//         if (isNaN(startDate)) {
//           console.error("Invalid date for policy:", policy);
//           return {
//             ...policy,
//             renewalDate: "Invalid date",
//           };
//         }

//         // Calculate renewalDate if sdate is valid
//         startDate.setMonth(startDate.getMonth() + policy.period);
//         return {
//           ...policy,
//           renewalDate: startDate.toISOString().split("T")[0],
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

//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();
//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const differenceInDays =
//           Math.abs(renewalDate - currentDate) / (1000 * 60 * 60 * 24);
//         return differenceInDays <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);

//     // Check if the startDate is valid
//     if (isNaN(startDate)) {
//       return "Invalid date";
//     }

//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };

//   const isExpiringSoon = (renewalDate) => {
//     const currentDate = new Date();
//     const daysUntilExpiration =
//       (new Date(renewalDate) - currentDate) / (1000 * 60 * 60 * 24);
//     return daysUntilExpiration <= 15;
//   };

//   // Function to handle navigating to the renewal form
//   const handleNavigate = (policyId) => {
//     navigate(`/renewal/${policyId}`); // This ensures the correct URL structure
//   };

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Transaction ID</th>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Date</th>
//               <th scope="col">Tenure</th>
//               <th scope="col">Expiring Date</th>
//               <th scope="col">Renewal Forms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => {
//               const highlight = isExpiringSoon(policy.renewalDate)
//                 ? "highlight"
//                 : "";
//               return (
//                 <tr key={index} className={highlight}>
//                   <th scope="row">{policy.transactionId}</th>
//                   <th scope="row">{policy.policyId}</th>
//                   <td className="table_row_elem table_data">
//                     {policy.holderName}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.status}</td>
//                   <td className="table_row_elem table_data">
//                     {policy.broughtDate}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.period}</td>
//                   <td className="table_row_elem table_data">
//                     {getRenewalDate(policy.broughtDate, policy.period)}
//                   </td>
//                   <td className="table_row_elem table_data">
//                     <button
//                       className="table_button"
//                       onClick={() => handleNavigate(policy.transactionId)} // Navigate to renewal form
//                     >
//                       Renewal Form
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export default function List({ searchQuery, filters }) {
//   const [policies, setPolicies] = useState([]);
//   const [filteredPolicies, setFilteredPolicies] = useState([]);
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
//           };
//         }

//         // Calculate renewalDate by adding period (months) to startDate
//         startDate.setMonth(startDate.getMonth() + policy.period);
//         return {
//           ...policy,
//           renewalDate: startDate.toISOString().split("T")[0],
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

//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();
//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const differenceInDays =
//           Math.abs(renewalDate - currentDate) / (1000 * 60 * 60 * 24);
//         return differenceInDays <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getRenewalDate = (broughtDate, period) => {
//     const startDate = new Date(broughtDate); // Parse broughtDate

//     // Check if the startDate is valid
//     if (isNaN(startDate)) {
//       return "Invalid date";
//     }

//     startDate.setMonth(startDate.getMonth() + period); // Add period in months
//     return startDate.toISOString().split("T")[0]; // Return only the date part
//   };

//   const isExpiringSoon = (renewalDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(renewalDate); // Parse renewalDate

//     // Check if renewalDate is valid before calculating the difference
//     if (isNaN(renewal)) {
//       return false; // Do not highlight if renewalDate is invalid
//     }

//     const daysUntilExpiration = (renewal - currentDate) / (1000 * 60 * 60 * 24);

//     // Return true if the policy is expiring in the next 15 days (and not already expired)
//     return daysUntilExpiration <= 15 && daysUntilExpiration >= 0;
//   };

//   // Function to handle navigating to the renewal form
//   const handleNavigate = (policyId) => {
//     navigate(`/renewal/${policyId}`); // This ensures the correct URL structure
//   };

//   return (
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Transaction ID</th>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Brought Date</th>
//               <th scope="col">Period (Months)</th>
//               <th scope="col">Renewal Date</th>
//               <th scope="col">Renewal Forms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => {
//               const highlight = isExpiringSoon(
//                 getRenewalDate(policy.broughtDate, policy.period)
//               )
//                 ? "highlight" // Add a CSS class to highlight the row
//                 : "";
//               return (
//                 <tr key={index} className={highlight}>
//                   <th scope="row">{policy.transactionId}</th>
//                   <th scope="row">{policy.policyId}</th>
//                   <td className="table_row_elem table_data">
//                     {policy.holderName}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.status}</td>
//                   <td className="table_row_elem table_data">
//                     {policy.broughtDate.split("T")[0]} {/* Display only date */}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.period}</td>
//                   <td className="table_row_elem table_data">
//                     {getRenewalDate(policy.broughtDate, policy.period)}
//                   </td>
//                   <td className="table_row_elem table_data">
//                     <button
//                       className="table_button"
//                       onClick={() => handleNavigate(policy.transactionId)} // Navigate to renewal form
//                     >
//                       Renewal Form
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

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
//           };
//         }

//         // Calculate renewalDate by adding period (months) to startDate
//         startDate.setMonth(startDate.getMonth() + policy.period);
//         return {
//           ...policy,
//           renewalDate: startDate.toISOString().split("T")[0],
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

//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();
//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const differenceInDays =
//           Math.abs(renewalDate - currentDate) / (1000 * 60 * 60 * 24);
//         return differenceInDays <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getRenewalDate = (broughtDate, period) => {
//     const startDate = new Date(broughtDate); // Parse broughtDate

//     // Check if the startDate is valid
//     if (isNaN(startDate)) {
//       return "Invalid date";
//     }

//     startDate.setMonth(startDate.getMonth() + period); // Add period in months
//     return startDate.toISOString().split("T")[0]; // Return only the date part
//   };

//   const isExpiringSoon = (renewalDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(renewalDate); // Parse renewalDate

//     // Check if renewalDate is valid before calculating the difference
//     if (isNaN(renewal)) {
//       return false; // Do not highlight if renewalDate is invalid
//     }

//     const daysUntilExpiration = (renewal - currentDate) / (1000 * 60 * 60 * 24);

//     // Return true if the policy is expiring in the next 15 days
//     return daysUntilExpiration <= 15 && daysUntilExpiration >= 0;
//   };

//   const isExpired = (renewalDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(renewalDate); // Parse renewalDate

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
//   // const showTooltip = (event, message) => {
//   //   setTooltip({
//   //     visible: true,
//   //     message: message,
//   //     top: event.clientY + 10,
//   //     left: event.clientX + 10,
//   //   });
//   // };

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
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Transaction ID</th>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Brought Date</th>
//               <th scope="col">Period (Months)</th>
//               <th scope="col">Renewal Date</th>
//               <th scope="col">Renewal Forms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => {
//               const renewalDate = getRenewalDate(
//                 policy.broughtDate,
//                 policy.period
//               );
//               const highlightClass = isExpired(renewalDate)
//                 ? "expired_highlight"
//                 : isExpiringSoon(renewalDate)
//                 ? "highlight"
//                 : "";

//               return (
//                 <tr
//                   key={index}
//                   className={highlightClass}
//                   onMouseEnter={(e) => {
//                     // Prevent tooltip for "Renewal Forms" column
//                     if (
//                       !e.target
//                         .closest("td")
//                         .classList.contains("renewal_form_column")
//                     ) {
//                       if (isExpired(renewalDate)) {
//                         showTooltip(e, "This policy has expired!");
//                       } else if (isExpiringSoon(renewalDate)) {
//                         showTooltip(
//                           e,
//                           "This policy is expiring within 15 days!"
//                         );
//                       }
//                     }
//                   }}
//                   onMouseLeave={hideTooltip} // Hide tooltip on mouse leave
//                 >
//                   <th scope="row">{policy.transactionId}</th>
//                   <th scope="row">{policy.policyId}</th>
//                   <td className="table_row_elem table_data">
//                     {policy.holderName}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.status}</td>
//                   <td className="table_row_elem table_data">
//                     {policy.broughtDate.split("T")[0]} {/* Display only date */}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.period}</td>
//                   <td className="table_row_elem table_data">{renewalDate}</td>
//                   <td className="table_row_elem table_data renewal_form_column">
//                     <button
//                       className="table_button"
//                       onClick={() => handleNavigate(policy.transactionId)}
//                     >
//                       Renewal Form
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Tooltip for expired or expiring soon policies */}
//       {tooltip.visible && (
//         <div
//           className="tooltip"
//           style={{ position: "absolute", top: tooltip.top, left: tooltip.left }}
//         >
//           {tooltip.message}
//         </div>
//       )}
//     </div>
//   );
// }

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

//     if (searchQuery) {
//       filtered = filtered.filter((policy) =>
//         policy.holderName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filters.filterType === "policy-status" && filters.filterValue) {
//       filtered = filtered.filter(
//         (policy) => policy.status.toLowerCase() === filters.filterValue
//       );
//     }

//     if (filters.filterType === "renewal-date" && filters.filterValue) {
//       const days = parseInt(filters.filterValue, 10);
//       const currentDate = new Date();
//       filtered = filtered.filter((policy) => {
//         const renewalDate = new Date(policy.renewalDate);
//         const differenceInDays =
//           Math.abs(renewalDate - currentDate) / (1000 * 60 * 60 * 24);
//         return differenceInDays <= days;
//       });
//     }

//     setFilteredPolicies(filtered);
//   };

//   const getRenewalDate = (broughtDate, period) => {
//     const startDate = new Date(broughtDate); // Parse broughtDate

//     // Check if the startDate is valid
//     if (isNaN(startDate)) {
//       return "Invalid date";
//     }

//     startDate.setMonth(startDate.getMonth() + period); // Add period in months
//     return startDate.toISOString().split("T")[0]; // Return only the date part
//   };

//   const isExpiringSoon = (renewalDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(renewalDate); // Parse renewalDate

//     // Check if renewalDate is valid before calculating the difference
//     if (isNaN(renewal)) {
//       return false; // Do not highlight if renewalDate is invalid
//     }

//     const daysUntilExpiration = (renewal - currentDate) / (1000 * 60 * 60 * 24);

//     // Return true if the policy is expiring in the next 15 days
//     return daysUntilExpiration <= 15 && daysUntilExpiration >= 0;
//   };

//   const isExpired = (renewalDate) => {
//     const currentDate = new Date();
//     const renewal = new Date(renewalDate); // Parse renewalDate

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
//     <div className="container list">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Transaction ID</th>
//               <th scope="col">Policy ID</th>
//               <th scope="col">Holder Name</th>
//               <th scope="col">Status</th>
//               <th scope="col">Brought Date</th>
//               <th scope="col">Period (Months)</th>
//               <th scope="col">Renewal Date</th>
//               <th scope="col">Renewal Forms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPolicies.map((policy, index) => {
//               const renewalDate = getRenewalDate(
//                 policy.broughtDate,
//                 policy.period
//               );
//               const highlightClass = isExpired(renewalDate)
//                 ? "expired_highlight"
//                 : isExpiringSoon(renewalDate)
//                 ? "highlight"
//                 : "";

//               return (
//                 <tr
//                   key={index}
//                   className={highlightClass}
//                   onMouseEnter={(e) => {
//                     // Prevent tooltip for "Renewal Forms" column
//                     if (
//                       !e.target
//                         .closest("td")
//                         .classList.contains("renewal_form_column")
//                     ) {
//                       if (isExpired(renewalDate)) {
//                         showTooltip(e, "This policy has expired!");
//                       } else if (isExpiringSoon(renewalDate)) {
//                         showTooltip(
//                           e,
//                           "This policy is expiring within 15 days!"
//                         );
//                       }
//                     }
//                   }}
//                   onMouseLeave={hideTooltip} // Hide tooltip on mouse leave
//                 >
//                   <th scope="row">{policy.transactionId}</th>
//                   <th scope="row">{policy.policyId}</th>
//                   <td className="table_row_elem table_data">
//                     {policy.holderName}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.status}</td>
//                   <td className="table_row_elem table_data">
//                     {policy.broughtDate.split("T")[0]} {/* Display only date */}
//                   </td>
//                   <td className="table_row_elem table_data">{policy.period}</td>
//                   <td className="table_row_elem table_data">{renewalDate}</td>
//                   <td className="table_row_elem table_data renewal_form_column">
//                     <button
//                       className="table_button"
//                       onClick={() => handleNavigate(policy.transactionId)}
//                     >
//                       Renewal Form
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Tooltip for expired or expiring soon policies */}
//       {tooltip.visible && (
//         <div
//           className="tooltip"
//           style={{ position: "absolute", top: tooltip.top, left: tooltip.left }}
//         >
//           {tooltip.message}
//         </div>
//       )}
//     </div>
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

  const getRenewalDate = (broughtDate, period) => {
    const startDate = new Date(broughtDate); // Parse broughtDate

    // Check if the startDate is valid
    if (isNaN(startDate)) {
      return "Invalid date";
    }

    startDate.setMonth(startDate.getMonth() + period); // Add period in months
    return startDate.toISOString().split("T")[0]; // Return only the date part
  };

  const isExpiringSoon = (renewalDate) => {
    const currentDate = new Date();
    const renewal = new Date(renewalDate); // Parse renewalDate

    // Check if renewalDate is valid before calculating the difference
    if (isNaN(renewal)) {
      return false; // Do not highlight if renewalDate is invalid
    }

    const daysUntilExpiration = (renewal - currentDate) / (1000 * 60 * 60 * 24);

    // Return true if the policy is expiring in the next 15 days
    return daysUntilExpiration <= 15 && daysUntilExpiration >= 0;
  };

  const isExpired = (renewalDate) => {
    const currentDate = new Date();
    const renewal = new Date(renewalDate); // Parse renewalDate

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
          <div className="infomation_0_0">Expired:</div>
          <div className="information_0_1"></div>
        </div>
        <div className="information_1">
          <div className="information_1_0">Expiring with-in 15 days:</div>
          <div className="information_1_1"></div>
        </div>
      </div>
      <div className="container list">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Policy ID</th>
                <th scope="col">Holder Name</th>
                <th scope="col">Status</th>
                <th scope="col">Brought Date</th>
                <th scope="col">Period (Months)</th>
                <th scope="col">Renewal Date</th>
                <th scope="col">Renewal Forms</th>
              </tr>
            </thead>
            <tbody>
              {filteredPolicies.map((policy, index) => {
                const renewalDate = getRenewalDate(
                  policy.broughtDate,
                  policy.period
                );
                const highlightClass = isExpired(renewalDate)
                  ? "expired_highlight"
                  : isExpiringSoon(renewalDate)
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
                        if (isExpired(renewalDate)) {
                          showTooltip(e, "This policy has expired!");
                        } else if (isExpiringSoon(renewalDate)) {
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
                    <td className="table_row_elem table_data">{renewalDate}</td>
                    <td className="table_row_elem table_data renewal_form_column">
                      <button
                        className="table_button"
                        onClick={() => handleNavigate(policy.transactionId)}
                      >
                        Renewal Form
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Tooltip for expired or expiring soon policies */}
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              position: "absolute",
              top: tooltip.top,
              left: tooltip.left,
            }}
          >
            {tooltip.message}
          </div>
        )}
      </div>
    </>
  );
}
