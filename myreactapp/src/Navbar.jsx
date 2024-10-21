// import Profile from "./assets/mass_logo.jpg";

// function Navbar() {
//   return (
//     <>
//       <nav>
//         <img src={Profile} width="200px" height="50px"></img>
//         <ul>
//           <li>Home</li>
//           <li>Polices</li>
//           <li>Renewal Form</li>
//           <li>About</li>
//           <li>
//             <div className="Contact_button">Contact</div>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import Profile from "./assets/mass_logo.jpg";

// function Navbar() {
//   return (
//     <>
//       <nav>
//         <img src={Profile} width="200px" height="50px" alt="Profile logo"></img>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/policies">Policies</Link>
//           </li>
//           <li>
//             <Link to="/renewal">Renewal Form</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>{" "}
//           {/* Update this */}
//           <li>
//             <Link to="/contact">
//               {" "}
//               {/* Update this */}
//               <div className="Contact_button">Contact</div>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Profile from "./assets/massmutual_logo.png";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <>
      <nav>
        <img src={Profile} width="350px" alt="Profile logo"></img>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/policies">Policies</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* Conditional rendering for Login/Logout */}
            {isLoggedIn ? (
              <div className="contact_button" onClick={onLogout}>
                Logout
              </div>
            ) : (
              <Link to="/login">
                <div className="contact_button">Login</div>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
