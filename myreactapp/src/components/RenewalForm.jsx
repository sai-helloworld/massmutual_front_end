// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// export default function RenewalForm() {
//   const { policyId } = useParams();
//   const [policyDetails, setPolicyDetails] = useState(null);
//   const [updatedPolicyDetails, setUpdatedPolicyDetails] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [creditCardNo, setCreditCardNo] = useState("");
//   const [upiMobileNo] = useState("1234567890");
//   const [transactionNo, setTransactionNo] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [showBill, setShowBill] = useState(false);

//   const navigate = useNavigate();
//   const billRef = useRef(); // Reference for the bill

//   useEffect(() => {
//     loadPolicyDetails();
//   }, []);

//   // Fetch policy details
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

//   // Fetch updated policy details after renewal
//   const fetchUpdatedPolicyDetails = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8080/api/policies/details/${policyId}`
//       );
//       setUpdatedPolicyDetails(result.data);
//     } catch (error) {
//       console.error("Error fetching updated policy details:", error);
//     }
//   };

//   // Handle policy renewal with confirmation
//   const handleRenewPolicy = async () => {
//     const confirmRenewal = window.confirm(
//       "Are you sure you want to renew the policy?"
//     );

//     if (!confirmRenewal) {
//       console.log("Policy renewal was canceled by the user.");
//       return; // Exit if the user does not confirm
//     }

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

//       setSuccessMessage("Your Policy has been successfully renewed!");
//       await fetchUpdatedPolicyDetails(); // Fetch updated details
//       setShowBill(true); // Show the bill after renewal
//       console.log("Policy renewal successful.");
//     } catch (error) {
//       console.error("Error renewing policy:", error);
//     }
//   };

//   // Print only the bill container
//   const handlePrint = () => {
//     const printContent = billRef.current.innerHTML;
//     const originalContent = document.body.innerHTML;

//     document.body.innerHTML = printContent;
//     window.print();
//     document.body.innerHTML = originalContent; // Restore original content after printing
//     window.location.reload(); // Reload to prevent losing app state
//   };

//   if (!policyDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <p className="Renewal_Heading">Policy Details</p>
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
//               <b>₹{policyDetails.broughtPrice}</b>
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
//               <b>₹{policyDetails.policyPrice}</b>
//             </div>
//             <div>
//               <p>Policy Period (Available):</p>
//               <b>{policyDetails.policyPeriod} months</b>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="button_container">
//         <button className="submit_payment_button" onClick={handleRenewPolicy}>
//           Renew Policy
//         </button>
//       </div>

//       {/* Conditionally show the bill */}
//       {showBill && updatedPolicyDetails && (
//         <>
//           <div ref={billRef} className="container2">
//             <div className="card cart">
//               <label className="title">
//                 <b style={{ fontSize: "20px" }}>CheckOut Bill</b>
//               </label>
//               <div className="steps">
//                 <div className="step">
//                   <div>
//                     <span>Address</span>
//                     <p>{updatedPolicyDetails.holderAddress}</p>
//                     <p>{updatedPolicyDetails.email}</p>
//                   </div>
//                   <hr />
//                   <div>
//                     <span>
//                       <b>Updated Details</b>
//                     </span>
//                     <p>Status: {updatedPolicyDetails.policyStatus}</p>
//                     <p>Period: {updatedPolicyDetails.policyPeriod} Months</p>
//                   </div>
//                   <hr />
//                   <div className="payments">
//                     <span>PAYMENT</span>
//                     <div className="details">
//                       <span>Subtotal:</span>
//                       <span>
//                         <pre>₹ {updatedPolicyDetails.policyPrice}</pre>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card checkout">
//               <div className="footer">
//                 <label className="price">
//                   ₹{updatedPolicyDetails.policyPrice}
//                 </label>
//                 <button className="checkout-btn" onClick={handlePrint}>
//                   Print Bill
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// // Helper function to calculate renewal date
// const getRenewalDate = (sdate, period) => {
//   const startDate = new Date(sdate);
//   startDate.setMonth(startDate.getMonth() + period);
//   return startDate.toISOString().split("T")[0];
// };

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function RenewalForm() {
  const { policyId } = useParams();
  const [policyDetails, setPolicyDetails] = useState(null);
  const [updatedPolicyDetails, setUpdatedPolicyDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCardNo, setCreditCardNo] = useState("");
  const [transactionNo, setTransactionNo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showBill, setShowBill] = useState(false);

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

  // Handle policy renewal with confirmation
  const handleRenewPolicy = async () => {
    const confirmRenewal = window.confirm(
      "Are you sure you want to renew the policy?"
    );

    if (!confirmRenewal) return; // Exit if the user does not confirm

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

      // Delay to allow DOM update before scrolling
      setTimeout(() => {
        if (billRef.current) {
          billRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);

      console.log("Policy renewal successful.");
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
        <p className="Renewal_Heading">Policy Details</p>
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
      <div className="button_container">
        <button className="submit_payment_button" onClick={handleRenewPolicy}>
          Renew Policy
        </button>
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
