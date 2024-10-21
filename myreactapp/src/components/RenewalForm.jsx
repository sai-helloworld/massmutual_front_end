// import { useParams } from "react-router-dom"; // Import useParams to access route params

// function RenewalForm() {
//   const { policyId } = useParams(); // Get the policyId from the URL

//   return (
//     <div className="form-container">
//       <h2>Renewal Form for Policy {policyId}</h2>
//       <form>
//         <label htmlFor="first-name">First Name</label>
//         <input type="text" id="first-name" name="first-name" required />

//         <label htmlFor="last-name">Last Name</label>
//         <input type="text" id="last-name" name="last-name" required />

//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" required />

//         <label htmlFor="phone">Phone Number</label>
//         <input type="tel" id="phone" name="phone" required />

//         <label htmlFor="order-number">Policy Number</label>
//         <input
//           type="text"
//           id="order-number"
//           name="order-number"
//           value={policyId}
//           readOnly
//         />

//         <label htmlFor="payment-method">Payment Method</label>
//         <select id="payment-method" name="payment-method" required>
//           <option value="credit-card">Credit Card</option>
//           <option value="paypal">PayPal</option>
//           <option value="bank-transfer">Bank Transfer</option>
//         </select>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default RenewalForm;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom"; // To get policyId from URL and navigate

// export default function RenewalForm() {
//   const { policyId } = useParams(); // Retrieve policyId from the URL
//   const [policyDetails, setPolicyDetails] = useState(null); // Store policy details
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadPolicyDetails();
//   }, []);

//   const loadPolicyDetails = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8080/api/policies/details/${policyId}`
//       );
//       setPolicyDetails(result.data); // Store the fetched data
//     } catch (error) {
//       console.error("Error fetching policy details:", error);
//     }
//   };

//   const handleBack = () => {
//     navigate("/"); // Navigate back to the list page
//   };
//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);
//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };
//   // If the data is still being fetched, show a loading message
//   if (!policyDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <p className="Renewal_Heading">Policy Details:</p>
//         <div className="Policy_Container">
//           <p className="Policy_Name">{policyDetails.policyName}</p>
//           <div className="Policy_Inner_Container">
//             <div>
//               <p>HolderName:</p>
//               <b>{policyDetails.holderName}</b>
//             </div>
//             <div>
//               <p>Email:</p>
//               <b>{policyDetails.email}</b>
//             </div>
//             <div>
//               <p>Brought Price:</p>
//               <b>{policyDetails.broughtPrice}</b>
//             </div>

//             <div>
//               <p>Brought Date:</p>
//               <b>{policyDetails.broughtDate}</b>
//             </div>
//             <div>
//               <p>Previous Policy Period:</p>
//               <b>{policyDetails.broughtPeriod} month</b>
//             </div>
//             <div>
//               <p>Renewal Date: </p>
//               <b>
//                 {getRenewalDate(
//                   policyDetails.broughtDate,
//                   policyDetails.policyPeriod
//                 )}
//               </b>
//             </div>
//             <div>
//               <p>Description:</p>
//               <b>{policyDetails.description}</b>
//             </div>
//             <div>
//               <p>Policy Price(available)</p>
//               <b>{policyDetails.policyPrice}</b>
//             </div>
//             <div>
//               <p>Policy Period(Available)</p>
//               <b>{policyDetails.policyPeriod} months</b>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="container mt-4">
//         <h2>Renewal Form for Policy ID: {policyId}</h2>
//         <div className="card shadow p-4">
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="policyName" className="form-label">
//                 Policy Name:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="policyName"
//                 value={policyDetails.policyName}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="holderName" className="form-label">
//                 Holder Name:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="holderName"
//                 value={policyDetails.holderName}
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="holderAddress" className="form-label">
//                 Holder Address:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="holderAddress"
//                 value={policyDetails.holderAddress}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="email" className="form-label">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={policyDetails.email}
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="broughtPrice" className="form-label">
//                 Brought Price:
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="broughtPrice"
//                 value={policyDetails.broughtPrice}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="broughtDate" className="form-label">
//                 Brought Date:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="broughtDate"
//                 value={
//                   new Date(policyDetails.broughtDate)
//                     .toISOString()
//                     .split("T")[0]
//                 } // Formatting date
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="policyPeriod" className="form-label">
//                 Policy Period (months):
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="policyPeriod"
//                 value={policyDetails.policyPeriod}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="description" className="form-label">
//                 Description:
//               </label>
//               <textarea
//                 className="form-control"
//                 id="description"
//                 value={policyDetails.description}
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="renewalPrice" className="form-label">
//                 Renewal Price:
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="renewalPrice"
//                 value={policyDetails.policyPrice}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="renewalPeriod" className="form-label">
//                 Renewal Period (months):
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="renewalPeriod"
//                 value={policyDetails.policyPeriod}
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="d-flex justify-content-end">
//             <button className="btn btn-primary" onClick={handleBack}>
//               Back to Policy List
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom"; // To get policyId from URL and navigate

// export default function RenewalForm() {
//   const { policyId } = useParams(); // Retrieve policyId from the URL
//   const [policyDetails, setPolicyDetails] = useState(null); // Store policy details
//   const navigate = useNavigate();

//   const [paymentMethod, setPaymentMethod] = useState(""); // Store selected payment method
//   const [creditCardNo, setCreditCardNo] = useState(""); // Store credit card number
//   const [upiMobileNo, setUpiMobileNo] = useState("1234567890"); // Example UPI mobile number
//   const [transactionNo, setTransactionNo] = useState(""); // Store transaction number

//   useEffect(() => {
//     loadPolicyDetails();
//   }, []);

//   const loadPolicyDetails = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8080/api/policies/details/${policyId}`
//       );
//       setPolicyDetails(result.data); // Store the fetched data
//     } catch (error) {
//       console.error("Error fetching policy details:", error);
//     }
//   };

//   const handleBack = () => {
//     navigate("/"); // Navigate back to the list page
//   };

//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);
//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };

//   // If the data is still being fetched, show a loading message
//   if (!policyDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <p className="Renewal_Heading">Policy Details:</p>
//         <div className="Policy_Container">
//           <p className="Policy_Name">{policyDetails.policyName}</p>
//           <div className="Policy_Inner_Container">
//             <div>
//               <p>Holder Name:</p>
//               <b>{policyDetails.holderName}</b>
//             </div>
//             <div>
//               <p>Email:</p>
//               <b>{policyDetails.email}</b>
//             </div>
//             <div>
//               <p>Brought Price:</p>
//               <b>{policyDetails.broughtPrice}</b>
//             </div>
//             <div>
//               <p>Brought Date:</p>
//               <b>{policyDetails.broughtDate}</b>
//             </div>
//             <div>
//               <p>Previous Policy Period:</p>
//               <b>{policyDetails.broughtPeriod} month</b>
//             </div>
//             <div>
//               <p>Renewal Date: </p>
//               <b>
//                 {getRenewalDate(
//                   policyDetails.broughtDate,
//                   policyDetails.policyPeriod
//                 )}
//               </b>
//             </div>
//             <div>
//               <p>Description:</p>
//               <b>{policyDetails.description}</b>
//             </div>
//             <div>
//               <p>Policy Price (available):</p>
//               <b>{policyDetails.policyPrice}</b>
//             </div>
//             <div>
//               <p>Policy Period (Available):</p>
//               <b>{policyDetails.policyPeriod} months</b>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="payment_method_container">
//         <h2 className="payment_method_heading">Select Payment Method:</h2>
//         <select
//           className="payment_method_select"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//         >
//           <option className="payment_method_select_options" value="">
//             --Select Payment Method--
//           </option>
//           <option className="payment_method_select_options" value="creditCard">
//             Credit Card
//           </option>
//           <option className="payment_method_select_options" value="upi">
//             UPI
//           </option>
//           <option className=" payment_method_select_options" value="netBanking">
//             Net Banking
//           </option>
//         </select>

//         {paymentMethod === "creditCard" && (
//           <div className="credit_card_input">
//             <label className="credit_card_label">Credit Card Number:</label>
//             <input
//               type="text"
//               className="credit_card_field payment_fields"
//               value={creditCardNo}
//               onChange={(e) => setCreditCardNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "upi" && (
//           <div className="upi_input">
//             <label className="upi_label">UPI Mobile Number:</label>
//             <p className="upi_mobile_no">{upiMobileNo}</p>
//             <label className="transaction_no_label">Transaction Number:</label>
//             <input
//               type="text"
//               className="transaction_no_field  payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "netBanking" && (
//           <div className="net_banking_input">
//             <label className="net_banking_label ">
//               Net Banking Account No:
//             </label>
//             <input
//               type="text"
//               className="net_banking_field payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         <button className="submit_payment_button">Renew Policy</button>
//       </div>
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// export default function RenewalForm() {
//   const { policyId } = useParams(); // Retrieve policyId from the URL
//   const [policyDetails, setPolicyDetails] = useState(null); // Store policy details
//   const navigate = useNavigate();

//   const [paymentMethod, setPaymentMethod] = useState(""); // Store selected payment method
//   const [creditCardNo, setCreditCardNo] = useState(""); // Store credit card number
//   const [upiMobileNo, setUpiMobileNo] = useState("1234567890"); // Example UPI mobile number
//   const [transactionNo, setTransactionNo] = useState(""); // Store transaction number

//   useEffect(() => {
//     loadPolicyDetails();
//   }, []);

//   const loadPolicyDetails = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8080/api/policies/details/${policyId}`
//       );
//       setPolicyDetails(result.data); // Store the fetched data
//     } catch (error) {
//       console.error("Error fetching policy details:", error);
//     }
//   };

//   const handleBack = () => {
//     navigate("/"); // Navigate back to the list page
//   };

//   const handleRenewPolicy = async () => {
//     try {
//       // Prepare data for the API call
//       const renewalData = {
//         paymentMethod,
//         transactionNo,
//         creditCardNo: paymentMethod === "creditCard" ? creditCardNo : null,
//       };

//       // Send PUT request to renew policy
//       await axios.put(
//         `http://localhost:8080/api/policies/update/${policyId}`,
//         renewalData
//       );

//       // After successful renewal, navigate back to the main list
//       navigate("/");
//     } catch (error) {
//       console.error("Error renewing policy:", error);
//     }
//   };

//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);
//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };

//   // If the data is still being fetched, show a loading message
//   if (!policyDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <p className="Renewal_Heading">Policy Details:</p>
//         <div className="Policy_Container">
//           <p className="Policy_Name">{policyDetails.policyName}</p>
//           <div className="Policy_Inner_Container">
//             <div>
//               <p>Holder Name:</p>
//               <b>{policyDetails.holderName}</b>
//             </div>
//             <div>
//               <p>Email:</p>
//               <b>{policyDetails.email}</b>
//             </div>
//             <div>
//               <p>Brought Price:</p>
//               <b>{policyDetails.broughtPrice}</b>
//             </div>
//             <div>
//               <p>Brought Date:</p>
//               <b>{policyDetails.broughtDate}</b>
//             </div>
//             <div>
//               <p>Previous Policy Period:</p>
//               <b>{policyDetails.broughtPeriod} month</b>
//             </div>
//             <div>
//               <p>Renewal Date: </p>
//               <b>
//                 {getRenewalDate(
//                   policyDetails.broughtDate,
//                   policyDetails.policyPeriod
//                 )}
//               </b>
//             </div>
//             <div>
//               <p>Description:</p>
//               <b>{policyDetails.description}</b>
//             </div>
//             <div>
//               <p>Policy Price (available):</p>
//               <b>{policyDetails.policyPrice}</b>
//             </div>
//             <div>
//               <p>Policy Period (Available):</p>
//               <b>{policyDetails.policyPeriod} months</b>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="payment_method_container">
//         <h2 className="payment_method_heading">Select Payment Method:</h2>
//         <select
//           className="payment_method_select"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//         >
//           <option className="payment_method_select_options" value="">
//             --Select Payment Method--
//           </option>
//           <option className="payment_method_select_options" value="creditCard">
//             Credit Card
//           </option>
//           <option className="payment_method_select_options" value="upi">
//             UPI
//           </option>
//           <option className=" payment_method_select_options" value="netBanking">
//             Net Banking
//           </option>
//         </select>

//         {paymentMethod === "creditCard" && (
//           <div className="credit_card_input">
//             <label className="credit_card_label">Credit Card Number:</label>
//             <input
//               type="text"
//               className="credit_card_field payment_fields"
//               value={creditCardNo}
//               onChange={(e) => setCreditCardNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "upi" && (
//           <div className="upi_input">
//             <label className="upi_label">UPI Mobile Number:</label>
//             <p className="upi_mobile_no">{upiMobileNo}</p>
//             <label className="transaction_no_label">Transaction Number:</label>
//             <input
//               type="text"
//               className="transaction_no_field  payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "netBanking" && (
//           <div className="net_banking_input">
//             <label className="net_banking_label ">
//               Net Banking Account No:
//             </label>
//             <input
//               type="text"
//               className="net_banking_field payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         <button className="submit_payment_button" onClick={handleRenewPolicy}>
//           Renew Policy
//         </button>
//       </div>
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// export default function RenewalForm() {
//   const { policyId } = useParams(); // Retrieve policyId from the URL
//   const [policyDetails, setPolicyDetails] = useState(null); // Store policy details
//   const navigate = useNavigate();

//   const [paymentMethod, setPaymentMethod] = useState(""); // Store selected payment method
//   const [creditCardNo, setCreditCardNo] = useState(""); // Store credit card number
//   const [upiMobileNo, setUpiMobileNo] = useState("1234567890"); // Example UPI mobile number
//   const [transactionNo, setTransactionNo] = useState(""); // Store transaction number
//   const [successMessage, setSuccessMessage] = useState(""); // Store success message

//   useEffect(() => {
//     loadPolicyDetails();
//   }, []);

//   const loadPolicyDetails = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8080/api/policies/details/${policyId}`
//       );
//       setPolicyDetails(result.data); // Store the fetched data
//     } catch (error) {
//       console.error("Error fetching policy details:", error);
//     }
//   };

//   const handleBack = () => {
//     navigate("/"); // Navigate back to the list page
//   };

//   const handleRenewPolicy = async () => {
//     try {
//       // Prepare data for the API call
//       const renewalData = {
//         paymentMethod,
//         transactionNo,
//         creditCardNo: paymentMethod === "creditCard" ? creditCardNo : null,
//       };

//       // Send PUT request to renew policy
//       await axios.put(
//         `http://localhost:8080/api/policies/update/${policyId}`,
//         renewalData
//       );

//       // Set success message
//       setSuccessMessage("Successfully renewed!");

//       // Redirect to the list page after a short delay
//       setTimeout(() => {
//         navigate("/"); // Navigate back to the main list
//       }, 2000); // 2 seconds delay
//     } catch (error) {
//       console.error("Error renewing policy:", error);
//     }
//   };

//   const getRenewalDate = (sdate, period) => {
//     const startDate = new Date(sdate);
//     startDate.setMonth(startDate.getMonth() + period);
//     return startDate.toISOString().split("T")[0];
//   };

//   // If the data is still being fetched, show a loading message
//   if (!policyDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <p className="Renewal_Heading">Policy Details:</p>
//         <div className="Policy_Container">
//           <p className="Policy_Name">{policyDetails.policyName}</p>
//           <div className="Policy_Inner_Container">
//             <div>
//               <p>Holder Name:</p>
//               <b>{policyDetails.holderName}</b>
//             </div>
//             <div>
//               <p>Email:</p>
//               <b>{policyDetails.email}</b>
//             </div>
//             <div>
//               <p>Brought Price:</p>
//               <b>{policyDetails.broughtPrice}</b>
//             </div>
//             <div>
//               <p>Brought Date:</p>
//               <b>{policyDetails.broughtDate}</b>
//             </div>
//             <div>
//               <p>Previous Policy Period:</p>
//               <b>{policyDetails.broughtPeriod} month</b>
//             </div>
//             <div>
//               <p>Renewal Date: </p>
//               <b>
//                 {getRenewalDate(
//                   policyDetails.broughtDate,
//                   policyDetails.policyPeriod
//                 )}
//               </b>
//             </div>
//             <div>
//               <p>Description:</p>
//               <b>{policyDetails.description}</b>
//             </div>
//             <div>
//               <p>Policy Price (available):</p>
//               <b>{policyDetails.policyPrice}</b>
//             </div>
//             <div>
//               <p>Policy Period (Available):</p>
//               <b>{policyDetails.policyPeriod} months</b>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="payment_method_container">
//         <h2 className="payment_method_heading">Select Payment Method:</h2>
//         <select
//           className="payment_method_select"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//         >
//           <option className="payment_method_select_options" value="">
//             --Select Payment Method--
//           </option>
//           <option className="payment_method_select_options" value="creditCard">
//             Credit Card
//           </option>
//           <option className="payment_method_select_options" value="upi">
//             UPI
//           </option>
//           <option className=" payment_method_select_options" value="netBanking">
//             Net Banking
//           </option>
//         </select>

//         {paymentMethod === "creditCard" && (
//           <div className="credit_card_input">
//             <label className="credit_card_label">Credit Card Number:</label>
//             <input
//               type="text"
//               className="credit_card_field payment_fields"
//               value={creditCardNo}
//               onChange={(e) => setCreditCardNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "upi" && (
//           <div className="upi_input">
//             <label className="upi_label">UPI Mobile Number:</label>
//             <p className="upi_mobile_no">{upiMobileNo}</p>
//             <label className="transaction_no_label">Transaction Number:</label>
//             <input
//               type="text"
//               className="transaction_no_field  payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "netBanking" && (
//           <div className="net_banking_input">
//             <label className="net_banking_label ">
//               Net Banking Account No:
//             </label>
//             <input
//               type="text"
//               className="net_banking_field payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         <button className="submit_payment_button" onClick={handleRenewPolicy}>
//           Renew Policy
//         </button>

//         {/* Display success message if exists */}
//         {successMessage && <p className="success_message">{successMessage}</p>}
//       </div>
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// export default function RenewalForm() {
//   const { policyId } = useParams();
//   const [policyDetails, setPolicyDetails] = useState(null);
//   const navigate = useNavigate();

//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [creditCardNo, setCreditCardNo] = useState("");
//   const [upiMobileNo, setUpiMobileNo] = useState("1234567890");
//   const [transactionNo, setTransactionNo] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     loadPolicyDetails();
//   }, []);

//   const loadPolicyDetails = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8080/api/policies/details/${policyId}`
//       );
//       setPolicyDetails(result.data);
//     } catch (error) {
//       console.error("Error fetching policy details:", error);
//     }
//   };

//   const handleRenewPolicy = async () => {
//     try {
//       const renewalData = {
//         paymentMethod,
//         transactionNo,
//         creditCardNo: paymentMethod === "creditCard" ? creditCardNo : null,
//       };

//       await axios.put(
//         `http://localhost:8080/api/policies/update/${policyId}`,
//         renewalData
//       );

//       setSuccessMessage("Your Policy Successfully renewed!");

//       setTimeout(() => {
//         navigate("/policies"); // Navigate to the policies page
//       }, 4000); // Redirect after 2 seconds
//     } catch (error) {
//       console.error("Error renewing policy:", error);
//     }
//   };

//   // If the data is still being fetched, show a loading message
//   if (!policyDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <p className="Renewal_Heading">Policy Details:</p>
//         <div className="Policy_Container">
//           <p className="Policy_Name">{policyDetails.policyName}</p>
//           <div className="Policy_Inner_Container">
//             <div>
//               <p>Holder Name:</p>
//               <b>{policyDetails.holderName}</b>
//             </div>
//             <div>
//               <p>Email:</p>
//               <b>{policyDetails.email}</b>
//             </div>
//             <div>
//               <p>Brought Price:</p>
//               <b>{policyDetails.broughtPrice}</b>
//             </div>
//             <div>
//               <p>Brought Date:</p>
//               <b>{policyDetails.broughtDate}</b>
//             </div>
//             <div>
//               <p>Previous Policy Period:</p>
//               <b>{policyDetails.broughtPeriod} month</b>
//             </div>
//             <div>
//               <p>Renewal Date:</p>
//               <b>
//                 {getRenewalDate(
//                   policyDetails.broughtDate,
//                   policyDetails.policyPeriod
//                 )}
//               </b>
//             </div>
//             <div>
//               <p>Description:</p>
//               <b>{policyDetails.description}</b>
//             </div>
//             <div>
//               <p>Policy Price (available):</p>
//               <b>{policyDetails.policyPrice}</b>
//             </div>
//             <div>
//               <p>Policy Period (Available):</p>
//               <b>{policyDetails.policyPeriod} months</b>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="payment_method_container">
//         <h2 className="payment_method_heading">Select Payment Method:</h2>
//         <select
//           className="payment_method_select"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//         >
//           <option className="payment_method_select_options" value="">
//             --Select Payment Method--
//           </option>
//           <option className="payment_method_select_options" value="creditCard">
//             Credit Card
//           </option>
//           <option className="payment_method_select_options" value="upi">
//             UPI
//           </option>
//           <option className="payment_method_select_options" value="netBanking">
//             Net Banking
//           </option>
//         </select>

//         {paymentMethod === "creditCard" && (
//           <div className="credit_card_input">
//             <label className="credit_card_label">Credit Card Number:</label>
//             <input
//               type="text"
//               className="credit_card_field payment_fields"
//               value={creditCardNo}
//               onChange={(e) => setCreditCardNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "upi" && (
//           <div className="upi_input">
//             <label className="upi_label">UPI Mobile Number:</label>
//             <p className="upi_mobile_no">{upiMobileNo}</p>
//             <label className="transaction_no_label">Transaction Number:</label>
//             <input
//               type="text"
//               className="transaction_no_field payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         {paymentMethod === "netBanking" && (
//           <div className="net_banking_input">
//             <label className="net_banking_label">Net Banking Account No:</label>
//             <input
//               type="text"
//               className="net_banking_field payment_fields"
//               value={transactionNo}
//               onChange={(e) => setTransactionNo(e.target.value)}
//             />
//           </div>
//         )}

//         <button className="submit_payment_button" onClick={handleRenewPolicy}>
//           Renew Policy
//         </button>

//         {successMessage && (
//           <div className="renewal_success_message">{successMessage}</div>
//         )}
//       </div>
//     </>
//   );
// }

// const getRenewalDate = (sdate, period) => {
//   const startDate = new Date(sdate);
//   startDate.setMonth(startDate.getMonth() + period);
//   return startDate.toISOString().split("T")[0];
// };

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function RenewalForm() {
  const { policyId } = useParams();
  const [policyDetails, setPolicyDetails] = useState(null);
  const [updatedPolicyDetails, setUpdatedPolicyDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCardNo, setCreditCardNo] = useState("");
  const [upiMobileNo] = useState("1234567890");
  const [transactionNo, setTransactionNo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showBill, setShowBill] = useState(false);

  const navigate = useNavigate();
  const billRef = useRef(); // Reference for the bill

  useEffect(() => {
    loadPolicyDetails();
  }, []);

  // Fetch policy details
  const loadPolicyDetails = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/policies/details/${policyId}`
      );
      setPolicyDetails(result.data);
    } catch (error) {
      console.error("Error fetching policy details:", error);
    }
  };

  // Fetch updated policy details after renewal
  const fetchUpdatedPolicyDetails = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/policies/details/${policyId}`
      );
      setUpdatedPolicyDetails(result.data);
    } catch (error) {
      console.error("Error fetching updated policy details:", error);
    }
  };

  // Handle policy renewal
  const handleRenewPolicy = async () => {
    try {
      const renewalData = {
        paymentMethod,
        transactionNo,
        creditCardNo: paymentMethod === "creditCard" ? creditCardNo : null,
      };

      await axios.put(
        `http://localhost:8080/api/policies/update/${policyId}`,
        renewalData
      );

      setSuccessMessage("Your Policy has been successfully renewed!");
      await fetchUpdatedPolicyDetails(); // Fetch updated details
      setShowBill(true); // Show the bill after renewal
    } catch (error) {
      console.error("Error renewing policy:", error);
    }
  };

  // Print only the bill container
  const handlePrint = () => {
    const printContent = billRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent; // Restore original content after printing
    window.location.reload(); // Reload to prevent losing app state
  };

  if (!policyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p className="Renewal_Heading">Policy Details:</p>
        <div className="Policy_Container">
          <p className="Policy_Name">{policyDetails.policyName}</p>
          <div className="Policy_Inner_Container">
            <div>
              <p>Holder Name:</p>
              <b>{policyDetails.holderName}</b>
            </div>
            <div>
              <p>Email:</p>
              <b>{policyDetails.email}</b>
            </div>
            <div>
              <p>Brought Price:</p>
              <b>₹{policyDetails.broughtPrice}</b>
            </div>
            <div>
              <p>Brought Date:</p>
              <b>{policyDetails.broughtDate}</b>
            </div>
            <div>
              <p>Previous Policy Period:</p>
              <b>{policyDetails.broughtPeriod} month</b>
            </div>
            <div>
              <p>Renewal Date:</p>
              <b>
                {getRenewalDate(
                  policyDetails.broughtDate,
                  policyDetails.policyPeriod
                )}
              </b>
            </div>
            <div>
              <p>Description:</p>
              <b>{policyDetails.description}</b>
            </div>
            <div>
              <p>Policy Price (available):</p>
              <b>₹{policyDetails.policyPrice}</b>
            </div>
            <div>
              <p>Policy Period (Available):</p>
              <b>{policyDetails.policyPeriod} months</b>
            </div>
          </div>
        </div>
      </div>

      <div className="payment_method_container">
        <button className="submit_payment_button" onClick={handleRenewPolicy}>
          Renew Policy
        </button>

        {successMessage && (
          <div className="renewal_success_message">{successMessage}</div>
        )}
      </div>

      {/* Conditionally show the bill */}
      {showBill && updatedPolicyDetails && (
        <>
          <div ref={billRef} className="container2">
            <div className="card cart">
              <label className="title">
                <b style={{ fontSize: "20px" }}>CheckOut Bill</b>
              </label>
              <div className="steps">
                <div className="step">
                  <div>
                    <span>Address</span>
                    <p>{updatedPolicyDetails.holderAddress}</p>
                    <p>{updatedPolicyDetails.email}</p>
                  </div>
                  <hr />
                  <div>
                    <span>
                      <b>Updated Details</b>
                    </span>
                    <p>Status: {updatedPolicyDetails.policyStatus}</p>
                    <p>Period: {updatedPolicyDetails.policyPeriod} Months</p>
                  </div>
                  <hr />
                  <div className="payments">
                    <span>PAYMENT</span>
                    <div className="details">
                      <span>Subtotal:</span>
                      <span>
                        <pre>₹ {updatedPolicyDetails.policyPrice}</pre>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card checkout">
              <div className="footer">
                <label className="price">
                  ₹{updatedPolicyDetails.policyPrice}
                </label>
                <button className="checkout-btn" onClick={handlePrint}>
                  Print Bill
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// Helper function to calculate renewal date
const getRenewalDate = (sdate, period) => {
  const startDate = new Date(sdate);
  startDate.setMonth(startDate.getMonth() + period);
  return startDate.toISOString().split("T")[0];
};

// {
//     "broughtPrice": 500.0,
//     "broughtDate": "2024-10-18T04:29:53.053+00:00",
//     "broughtPeriod": 12,
//     "holderName": "Ava Young",
//     "holderAddress": "456 Elm St",
//     "email": "ava.young@email.com",
//     "policyName": "Rental Property Insurance",
//     "policyPrice": 500.0,
//     "policyPeriod": 12,
//     "description": "Protection for landlords against property damage",
//     "policyStatus": "Active"
// }
