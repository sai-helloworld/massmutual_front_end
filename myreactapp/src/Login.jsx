// import { IoMdPerson } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdOutlineEmail } from "react-icons/md";
// import { useState } from "react";
// // import "./Login.css"; // Import the CSS file

// function Login() {
//   const [action, setAction] = useState("Sign Up");
//   return (
//     <div>
//       <div className="container_center">
//         <div className="form_container">
//           <h1 className="form_heading">
//             <b>{action}</b>
//           </h1>
//           <div className="input_cluster">
//             {action === "Login" ? (
//               <div></div>
//             ) : (
//               <div className="input_group">
//                 <IoMdPerson className="icon" />
//                 <input
//                   type="text"
//                   className="input_field"
//                   placeholder="Your Name"
//                 />
//               </div>
//             )}
//             <div className="input_group">
//               <MdOutlineEmail className="icon" />
//               <input
//                 type="email"
//                 className="input_field"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div className="input_group">
//               <RiLockPasswordFill className="icon" />
//               <input
//                 type="password"
//                 className="input_field"
//                 placeholder="Your Password"
//               />
//             </div>
//             {action === "Login" ? (
//               <div className="forgot_password">
//                 <p>
//                   Forgot password?
//                   <span className="forgot_link">Click Here</span>
//                 </p>
//               </div>
//             ) : (
//               <div></div>
//             )}
//             <div className="button_group">
//               <button
//                 className="primary_button login_buttons"
//                 onClick={() => setAction("Sign Up")}
//               >
//                 Sign Up
//               </button>
//               <button
//                 className="primary_button login_buttons"
//                 onClick={() => setAction("Login")}
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;

// import { IoMdPerson } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdOutlineEmail } from "react-icons/md";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function Login() {
//   const [action, setAction] = useState("Login"); // Default to "Login"
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState(""); // For sign-up
//   const navigate = useNavigate(); // Initialize the navigate hook for redirection

//   // Function to handle form submission
//   // const handleSubmit = async () => {
//   //   if (action === "Login") {
//   //     try {
//   //       const response = await fetch("http://localhost:8080/api/agents/login", {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({ email, password }),
//   //       });

//   //       if (response.ok) {
//   //         navigate("/list");
//   //       } else {
//   //         alert("Invalid login credentials!");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error during login:", error);
//   //     }
//   //   } else {
//   //     try {
//   //       const response = await fetch(
//   //         "http://localhost:8080/api/agents/register",
//   //         {
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //           },
//   //           body: JSON.stringify({ name, email, password }),
//   //         }
//   //       );

//   //       if (response.ok) {
//   //         alert("Registration successful!");
//   //         setAction("Login"); // Switch to Login after successful registration
//   //       } else {
//   //         alert("Registration failed!");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error during registration:", error);
//   //     }
//   //   }
//   // };
//   const handleSubmit = async () => {
//     if (action === "Login") {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/agents/login?email=${encodeURIComponent(
//             email
//           )}&password=${encodeURIComponent(password)}`,
//           {
//             method: "POST",
//           }
//         );

//         if (response.ok) {
//           // Redirect to List page upon successful login
//           navigate("/list");
//         } else {
//           alert("Invalid login credentials!");
//         }
//       } catch (error) {
//         console.error("Error during login:", error);
//       }
//     } else {
//       // Registration flow (unchanged)
//       try {
//         const response = await fetch(
//           "http://localhost:8080/api/agents/register",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name, email, password }),
//           }
//         );

//         if (response.ok) {
//           alert("Registration successful!");
//           setAction("Login"); // Switch to Login after successful registration
//         } else {
//           alert("Registration failed!");
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="container_center">
//         <div className="form_container">
//           <h1 className="form_heading">
//             <b>{action}</b> {/* This will show either "Login" or "Sign Up" */}
//           </h1>
//           <div className="input_cluster">
//             {action === "Sign Up" && (
//               <div className="input_group">
//                 <IoMdPerson className="icon" />
//                 <input
//                   type="text"
//                   className="input_field"
//                   placeholder="Your Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)} // Set name for sign-up
//                 />
//               </div>
//             )}
//             <div className="input_group">
//               <MdOutlineEmail className="icon" />
//               <input
//                 type="email"
//                 className="input_field"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Set email
//               />
//             </div>
//             <div className="input_group">
//               <RiLockPasswordFill className="icon" />
//               <input
//                 type="password"
//                 className="input_field"
//                 placeholder="Your Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Set password
//               />
//             </div>
//             {action === "Login" && (
//               <div className="forgot_password">
//                 <p>
//                   Forgot password?
//                   <span className="forgot_link">Click Here</span>
//                 </p>
//               </div>
//             )}
//             <div className="button_group">
//               <button
//                 className="primary_button login_buttons"
//                 onClick={handleSubmit} // Handle form submission
//               >
//                 {action === "Login" ? "Login" : "Register"}
//               </button>
//               <button
//                 className="secondary_button toggle_buttons"
//                 onClick={() =>
//                   setAction(action === "Login" ? "Sign Up" : "Login")
//                 } // Toggle between Login and Sign Up
//               >
//                 {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { IoMdPerson } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdOutlineEmail } from "react-icons/md";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function Login() {
//   const [action, setAction] = useState("Login"); // Default to "Login"
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState(""); // For sign-up
//   const [message, setMessage] = useState(""); // State for displaying messages
//   const navigate = useNavigate(); // Initialize the navigate hook for redirection

//   const handleSubmit = async () => {
//     setMessage(""); // Reset message before each submission
//     if (action === "Login") {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/agents/login?email=${encodeURIComponent(
//             email
//           )}&password=${encodeURIComponent(password)}`,
//           {
//             method: "POST",
//           }
//         );

//         if (response.ok) {
//           // Redirect to List page upon successful login
//           navigate("/list");
//         } else {
//           setMessage("Invalid login credentials!"); // Set error message
//         }
//       } catch (error) {
//         console.error("Error during login:", error);
//         setMessage("An error occurred during login."); // Set error message
//       }
//     } else {
//       try {
//         const response = await fetch(
//           "http://localhost:8080/api/agents/register",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name, email, password }),
//           }
//         );

//         if (response.ok) {
//           setMessage("Registration successful!"); // Set success message
//           setAction("Login"); // Switch to Login after successful registration
//         } else {
//           setMessage("Registration failed!"); // Set error message
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//         setMessage("An error occurred during registration."); // Set error message
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="container_center">
//         <div className="form_container">
//           <h1 className="form_heading">
//             <b>{action}</b> {/* This will show either "Login" or "Sign Up" */}
//           </h1>
//           <div className="input_cluster">
//             {action === "Sign Up" && (
//               <div className="input_group">
//                 <IoMdPerson className="icon" />
//                 <input
//                   type="text"
//                   className="input_field"
//                   placeholder="Your Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)} // Set name for sign-up
//                 />
//               </div>
//             )}
//             <div className="input_group">
//               <MdOutlineEmail className="icon" />
//               <input
//                 type="email"
//                 className="input_field"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Set email
//               />
//             </div>
//             <div className="input_group">
//               <RiLockPasswordFill className="icon" />
//               <input
//                 type="password"
//                 className="input_field"
//                 placeholder="Your Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Set password
//               />
//             </div>
//             {action === "Login" && (
//               <div className="forgot_password">
//                 <p>
//                   Forgot password?
//                   <span className="forgot_link">Click Here</span>
//                 </p>
//               </div>
//             )}
//             <div className="button_group">
//               <button
//                 className="primary_button login_buttons"
//                 onClick={handleSubmit} // Handle form submission
//               >
//                 {action === "Login" ? "Login" : "Register"}
//               </button>
//               <button
//                 className="secondary_button toggle_buttons"
//                 onClick={() =>
//                   setAction(action === "Login" ? "Sign Up" : "Login")
//                 } // Toggle between Login and Sign Up
//               >
//                 {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
//               </button>
//             </div>
//             {message && (
//               <div className="message_display">
//                 <p>{message}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { IoMdPerson } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdOutlineEmail } from "react-icons/md";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function Login() {
//   const [action, setAction] = useState("Login"); // Default to "Login"
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState(""); // For sign-up
//   const [message, setMessage] = useState(""); // State for displaying messages
//   const [messageType, setMessageType] = useState(""); // State for message type ('success' or 'error')
//   const navigate = useNavigate(); // Initialize the navigate hook for redirection

//   const handleSubmit = async () => {
//     setMessage(""); // Reset message before each submission
//     if (action === "Login") {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/agents/login?email=${encodeURIComponent(
//             email
//           )}&password=${encodeURIComponent(password)}`,
//           {
//             method: "POST",
//           }
//         );

//         if (response.ok) {
//           // Redirect to List page upon successful login
//           navigate("/list");
//         } else {
//           setMessage("Invalid login credentials!"); // Set error message
//           setMessageType("error"); // Message type is error
//         }
//       } catch (error) {
//         console.error("Error during login:", error);
//         setMessage("An error occurred during login."); // Set error message
//         setMessageType("error"); // Message type is error
//       }
//     } else {
//       try {
//         const response = await fetch(
//           "http://localhost:8080/api/agents/register",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name, email, password }),
//           }
//         );

//         if (response.ok) {
//           setMessage("Registration successful!"); // Set success message
//           setMessageType("success"); // Message type is success
//           setAction("Login"); // Switch to Login after successful registration
//         } else {
//           setMessage("Registration failed!"); // Set error message
//           setMessageType("error"); // Message type is error
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//         setMessage("An error occurred during registration."); // Set error message
//         setMessageType("error"); // Message type is error
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="container_center">
//         <div className="form_container">
//           <h1 className="form_heading">
//             <b>{action}</b> {/* This will show either "Login" or "Sign Up" */}
//           </h1>
//           <div className="input_cluster">
//             {action === "Sign Up" && (
//               <div className="input_group">
//                 <IoMdPerson className="icon" />
//                 <input
//                   type="text"
//                   className="input_field"
//                   placeholder="Your Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)} // Set name for sign-up
//                 />
//               </div>
//             )}
//             <div className="input_group">
//               <MdOutlineEmail className="icon" />
//               <input
//                 type="email"
//                 className="input_field"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Set email
//               />
//             </div>
//             <div className="input_group">
//               <RiLockPasswordFill className="icon" />
//               <input
//                 type="password"
//                 className="input_field"
//                 placeholder="Your Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Set password
//               />
//             </div>
//             {action === "Login" && (
//               <div className="forgot_password">
//                 <p>
//                   Forgot password?
//                   <span className="forgot_link">Click Here</span>
//                 </p>
//               </div>
//             )}
//             <div className="button_group">
//               <button
//                 className="primary_button login_buttons"
//                 onClick={handleSubmit} // Handle form submission
//               >
//                 {action === "Login" ? "Login" : "Register"}
//               </button>
//               <button
//                 className="secondary_button toggle_buttons"
//                 onClick={() =>
//                   setAction(action === "Login" ? "Sign Up" : "Login")
//                 } // Toggle between Login and Sign Up
//               >
//                 {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
//               </button>
//             </div>

//             {/* Display message below buttons */}
//             {message && (
//               <div
//                 className={
//                   messageType === "success"
//                     ? "success_message"
//                     : "message_display"
//                 }
//               >
//                 <p>{message}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import LoginImage from "./assets/6b1b22573f9f3d4bba11a9fa5cb45652.jpg";

function Login({ onLogin }) {
  // Accept onLogin as a prop
  const [action, setAction] = useState("Login"); // Default to "Login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For sign-up
  const [message, setMessage] = useState(""); // State for displaying messages
  const [messageType, setMessageType] = useState(""); // State for message type ('success' or 'error')
  const navigate = useNavigate(); // Initialize the navigate hook for redirection

  const handleSubmit = async () => {
    setMessage(""); // Reset message before each submission
    if (action === "Login") {
      try {
        const response = await fetch(
          `http://localhost:8080/api/agents/login?email=${encodeURIComponent(
            email
          )}&password=${encodeURIComponent(password)}`,
          {
            method: "POST",
          }
        );

        if (response.ok) {
          onLogin(); // Call the onLogin function passed as a prop
          navigate("/"); // Redirect to the home page upon successful login
        } else {
          setMessage("Invalid login credentials!"); // Set error message
          setMessageType("error"); // Message type is error
        }
      } catch (error) {
        console.error("Error during login:", error);
        setMessage("An error occurred during login."); // Set error message
        setMessageType("error"); // Message type is error
      }
    } else {
      try {
        const response = await fetch(
          "http://localhost:8080/api/agents/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          }
        );

        if (response.ok) {
          setMessage("Registration successful!"); // Set success message
          setMessageType("success"); // Message type is success
          setAction("Login"); // Switch to Login after successful registration
        } else {
          setMessage("Registration failed!"); // Set error message
          setMessageType("error"); // Message type is error
        }
      } catch (error) {
        console.error("Error during registration:", error);
        setMessage("An error occurred during registration."); // Set error message
        setMessageType("error"); // Message type is error
      }
    }
  };

  return (
    <div>
      <div className="container_center">
        <img src={LoginImage} alt="Retirement Insurance Policy" />
        <div className="form_container">
          <h1 className="form_heading">
            <b>{action}</b> {/* This will show either "Login" or "Sign Up" */}
          </h1>
          <div className="input_cluster">
            {action === "Sign Up" && (
              <div className="input_group">
                <IoMdPerson className="icon" />
                <input
                  type="text"
                  className="input_field"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Set name for sign-up
                />
              </div>
            )}
            <div className="input_group">
              <MdOutlineEmail className="icon" />
              <input
                type="email"
                className="input_field"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Set email
              />
            </div>
            <div className="input_group">
              <RiLockPasswordFill className="icon" />
              <input
                type="password"
                className="input_field"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Set password
              />
            </div>
            {action === "Login" && (
              <div className="forgot_password">
                <p>
                  Forgot password?
                  <span className="forgot_link">Click Here</span>
                </p>
              </div>
            )}
            <div className="button_group">
              <button
                className="primary_button login_buttons"
                onClick={handleSubmit} // Handle form submission
              >
                {action === "Login" ? "Login" : "Register"}
              </button>
              <button
                className="secondary_button toggle_buttons"
                onClick={() =>
                  setAction(action === "Login" ? "Sign Up" : "Login")
                } // Toggle between Login and Sign Up
              >
                {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
              </button>
            </div>

            {/* Display message below buttons */}
            {message && (
              <div
                className={
                  messageType === "success"
                    ? "success_message"
                    : "message_display"
                }
              >
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
