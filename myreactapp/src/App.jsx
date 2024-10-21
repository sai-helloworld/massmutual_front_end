// // import { useState } from "react";
// // import Navbar from "./Navbar.jsx";
// // import Polices from "./PoliciesList.jsx";
// // import MainHeading from "./MainHeading.jsx";
// // import SearchBar from "./SearchBar.jsx";
// // import FilterComponent from "./FilterComponent";
// // import Home from "./List.jsx";

// // function App() {
// //   const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

// //   // This function will update the searchQuery state
// //   const handleSearch = (query) => {
// //     setSearchQuery(query);
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <MainHeading />
// //       <div className="search_container">
// //         {/* Pass the handleSearch function to SearchBar */}
// //         <SearchBar onSearch={handleSearch} />
// //         <FilterComponent />
// //       </div>
// //       <Polices />
// //       {/* Pass the searchQuery to Home */}
// //       <Home searchQuery={searchQuery} />
// //     </>
// //   );
// // }

// // export default App;

// // import { useState } from "react";
// // import Navbar from "./Navbar.jsx";
// // import Polices from "./PoliciesList.jsx";
// // import MainHeading from "./MainHeading.jsx";
// // import SearchBar from "./SearchBar.jsx";
// // import FilterComponent from "./FilterComponent";
// // import Home from "./List.jsx";

// // function App() {
// //   const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
// //   const [filters, setFilters] = useState({}); // State to hold filters

// //   // Function to update the searchQuery state
// //   const handleSearch = (query) => {
// //     setSearchQuery(query);
// //   };

// //   // Function to update the filters state
// //   const handleFilterChange = (filterData) => {
// //     setFilters(filterData);
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <MainHeading />
// //       <div className="search_container">
// //         {/* Pass the handleSearch function to SearchBar */}
// //         <SearchBar onSearch={handleSearch} />
// //         {/* Pass handleFilterChange to FilterComponent */}
// //         <FilterComponent onFilterChange={handleFilterChange} />
// //       </div>
// //       <Polices />
// //       {/* Pass both searchQuery and filters to Home */}
// //       <Home searchQuery={searchQuery} filters={filters} />
// //     </>
// //   );
// // }

// // export default App;
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom"; // Import Routes and Route
// import Navbar from "./Navbar.jsx";
// import Polices from "./PoliciesList.jsx";
// import MainHeading from "./MainHeading.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FilterComponent from "./FilterComponent";
// import Home from "./List.jsx";
// import RenewalForm from "./components/RenewalForm.jsx"; // Import RenewalForm

// function App() {
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
//   const [filters, setFilters] = useState({}); // State to hold filters

//   // Function to update the searchQuery state
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Function to update the filters state
//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   return (
//     <>
//       <Navbar />
//       <MainHeading />
//       <div className="search_container">
//         {/* Pass the handleSearch function to SearchBar */}
//         <SearchBar onSearch={handleSearch} />
//         {/* Pass handleFilterChange to FilterComponent */}
//         <FilterComponent onFilterChange={handleFilterChange} />
//       </div>
//       <Polices />

//       {/* Define routes here */}
//       <Routes>
//         {/* The Home component, passing searchQuery and filters as props */}
//         <Route
//           path="/"
//           element={<Home searchQuery={searchQuery} filters={filters} />}
//         />

//         {/* Define the route for the renewal form */}
//         <Route path="/renewal/:policyId" element={<RenewalForm />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
// import Navbar from "./Navbar.jsx";
// import HomePage from "./Home.jsx";
// import Polices from "./PoliciesList.jsx";
// import MainHeading from "./MainHeading.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FilterComponent from "./FilterComponent";
// import List from "./List.jsx";
// import RenewalForm from "./components/RenewalForm.jsx"; // Import RenewalForm
// import Login from "./Login.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";
// function App() {
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
//   const [filters, setFilters] = useState({}); // State to hold filters

//   const location = useLocation(); // Get current route location

//   // Function to update the searchQuery state
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Function to update the filters state
//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   return (
//     <>
//       <Navbar />
//       <HomePage />
//       <MainHeading />
//       {/* Conditionally render the search container based on the current route */}
//       {!location.pathname.startsWith("/renewal/") && (
//         <div className="search_container">
//           {/* Pass the handleSearch function to SearchBar */}
//           <SearchBar onSearch={handleSearch} />
//           {/* Pass handleFilterChange to FilterComponent */}
//           <FilterComponent onFilterChange={handleFilterChange} />
//         </div>
//       )}

//       {!location.pathname.startsWith("/login/") && <Login />}
//       <Polices />

//       <Routes>
//         {/* The Home component, passing searchQuery and filters as props */}
//         <Route
//           path="/"
//           element={<List searchQuery={searchQuery} filters={filters} />}
//         />

//         {/* Define the route for the renewal form */}
//         <Route path="/renewal/:policyId" element={<RenewalForm />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
// import Navbar from "./Navbar.jsx";
// import HomePage from "./Home.jsx";
// import MainHeading from "./MainHeading.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FilterComponent from "./FilterComponent";
// import List from "./List.jsx";
// import RenewalForm from "./components/RenewalForm.jsx"; // Import RenewalForm
// import Login from "./Login.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

// function App() {
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
//   const [filters, setFilters] = useState({}); // State to hold filters

//   const location = useLocation(); // Get current route location

//   // Function to update the searchQuery state
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Function to update the filters state
//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Conditionally render other components except on About and Contact pages */}
//       {location.pathname !== "/about" && location.pathname !== "/contact" && (
//         <>
//           <MainHeading />
//           {!location.pathname.startsWith("/renewal/") && (
//             <div className="search_container">
//               {/* Pass the handleSearch function to SearchBar */}
//               <SearchBar onSearch={handleSearch} />
//               {/* Pass handleFilterChange to FilterComponent */}
//               <FilterComponent onFilterChange={handleFilterChange} />
//             </div>
//           )}
//           {!location.pathname.startsWith("/login/") && <Login />}
//         </>
//       )}

//       {/* Define the routes for About, Contact, and other pages */}
//       <Routes>
//         {/* Home route */}
//         <Route path="/home" element={<HomePage />} />

//         <Route
//           path="/policies"
//           element={<List searchQuery={searchQuery} filters={filters} />}
//         />
//         {/* Route for the renewal form */}
//         <Route path="/renewal/:policyId" element={<RenewalForm />} />

//         {/* Route for the About page */}
//         <Route path="/about" element={<About />} />

//         {/* Route for the Contact page */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
// import Navbar from "./Navbar.jsx";
// import HomePage from "./Home.jsx";
// // import Polices from "./PoliciesList.jsx";
// import MainHeading from "./MainHeading.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FilterComponent from "./FilterComponent";
// import List from "./List.jsx";
// import RenewalForm from "./components/RenewalForm.jsx"; // Import RenewalForm
// import Login from "./Login.jsx"; // Assuming this is your login page
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

// function App() {
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
//   const [filters, setFilters] = useState({}); // State to hold filters
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

//   const location = useLocation(); // Get current route location

//   // Function to update the searchQuery state
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Function to update the filters state
//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   // Function to handle login
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

//       {/* Conditionally render other components except on About and Contact pages */}
//       {location.pathname !== "/about" && location.pathname !== "/contact" && (
//         <>
//           <HomePage />
//           <MainHeading />
//           {!location.pathname.startsWith("/renewal/") && (
//             <div className="search_container">
//               {/* Pass the handleSearch function to SearchBar */}
//               <SearchBar onSearch={handleSearch} />
//               {/* Pass handleFilterChange to FilterComponent */}
//               <FilterComponent onFilterChange={handleFilterChange} />
//             </div>
//           )}
//           {/* Only show Login page if user is not logged in */}
//           {!location.pathname.startsWith("/login/") && !isLoggedIn && (
//             <Login onLogin={handleLogin} />
//           )}
//           {/* <Polices /> */}
//         </>
//       )}

//       {/* Define the routes for About, Contact, and other pages */}
//       <Routes>
//         {/* Home route */}
//         <Route
//           path="/"
//           element={<List searchQuery={searchQuery} filters={filters} />}
//         />

//         {/* Route for the renewal form */}
//         <Route path="/renewal/:policyId" element={<RenewalForm />} />

//         {/* Route for the About page */}
//         <Route path="/about" element={<About />} />

//         {/* Route for the Contact page */}
//         <Route path="/contact" element={<Contact />} />

//         {/* Route for the Login page */}
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar.jsx";
// import HomePage from "./Home.jsx";
// import MainHeading from "./MainHeading.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FilterComponent from "./FilterComponent";
// import List from "./List.jsx";
// import RenewalForm from "./components/RenewalForm.jsx";
// import Login from "./Login.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filters, setFilters] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false); // New state to control login visibility

//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize navigate hook

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setShowLogin(false); // Hide login after successful login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const toggleLogin = () => {
//     setShowLogin((prev) => !prev); // Toggle login visibility
//   };

//   // Function to handle navigation to protected routes
//   const handleProtectedRoute = (path) => {
//     if (isLoggedIn) {
//       navigate(path);
//     } else {
//       alert("You need to log in to access this page!");
//     }
//   };

//   return (
//     <>
//       <Navbar
//         isLoggedIn={isLoggedIn}
//         onLogout={handleLogout}
//         onLoginClick={toggleLogin}
//       />

//       {/* Conditionally render other components except on About and Contact pages */}
//       {location.pathname !== "/about" && location.pathname !== "/contact" && (
//         <>
//           {location.pathname === "/policies" && ( // Only show search bar on List page
//             <>
//               <MainHeading />
//               <div className="search_container">
//                 <SearchBar onSearch={handleSearch} />
//                 <FilterComponent onFilterChange={handleFilterChange} />
//               </div>
//             </>
//           )}
//           {/* Show Login only when the showLogin state is true */}
//           {showLogin && !isLoggedIn && <Login onLogin={handleLogin} />}
//         </>
//       )}

//       {/* Define the routes for About, Contact, and other pages */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/policies"
//           element={
//             <div onClick={() => handleProtectedRoute("/policies")}>
//               <List searchQuery={searchQuery} filters={filters} />
//             </div>
//           }
//         />
//         <Route
//           path="/renewal/:policyId"
//           element={
//             <div onClick={() => handleProtectedRoute(`/renewal/${policyId}`)}>
//               <RenewalForm />
//             </div>
//           }
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Navbar.jsx";
// import HomePage from "./Home.jsx";
// import MainHeading from "./MainHeading.jsx";
// import SearchBar from "./SearchBar.jsx";
// import FilterComponent from "./FilterComponent";
// import List from "./List.jsx";
// import RenewalForm from "./components/RenewalForm.jsx";
// import Login from "./Login.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";
// import PrivateRoute from "./PrivateRoute.jsx"; // Import the PrivateRoute component
// import Footer from "./Footer.jsx";
// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filters, setFilters] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false); // New state to control login visibility

//   const location = useLocation();

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const handleFilterChange = (filterData) => {
//     setFilters(filterData);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setShowLogin(false); // Hide login after successful login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const toggleLogin = () => {
//     setShowLogin((prev) => !prev); // Toggle login visibility
//   };

//   return (
//     <>
//       <Navbar
//         isLoggedIn={isLoggedIn}
//         onLogout={handleLogout}
//         onLoginClick={toggleLogin}
//       />

//       {/* Conditionally render other components except on About and Contact pages */}
//       {location.pathname !== "/about" && location.pathname !== "/contact" && (
//         <>
//           {location.pathname === "/policies" && ( // Only show search bar on List page
//             <>
//               <MainHeading />
//               <div className="search_container">
//                 <SearchBar onSearch={handleSearch} />
//                 <FilterComponent onFilterChange={handleFilterChange} />
//               </div>
//             </>
//           )}
//           {/* Show Login only when the showLogin state is true */}
//           {showLogin && !isLoggedIn && <Login onLogin={handleLogin} />}
//         </>
//       )}

//       {/* Define the routes for About, Contact, and other pages */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/policies"
//           element={
//             <PrivateRoute
//               element={<List searchQuery={searchQuery} filters={filters} />}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route
//           path="/renewal/:policyId"
//           element={
//             <PrivateRoute element={<RenewalForm />} isLoggedIn={isLoggedIn} />
//           }
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import HomePage from "./Home.jsx";
import MainHeading from "./MainHeading.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterComponent from "./FilterComponent";
import List from "./List.jsx";
import RenewalForm from "./components/RenewalForm.jsx";
import Login from "./Login.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import PrivateRoute from "./PrivateRoute.jsx"; // Import the PrivateRoute component
import Footer from "./Footer.jsx";
import About1 from "./About1.jsx";
import Legacy from "./Legacy.jsx";
import Paper from "./Paper.jsx";
import MassMutualLandingPage from "./MassMutualLandingPage";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // New state to control login visibility

  const location = useLocation();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterData) => {
    setFilters(filterData);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false); // Hide login after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev); // Toggle login visibility
  };

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLoginClick={toggleLogin}
      />

      {/* Conditionally render other components except on About and Contact pages */}
      {location.pathname !== "/about" && location.pathname !== "/contact" && (
        <>
          {location.pathname === "/policies" && ( // Only show search bar on List page
            <>
              <MainHeading />
              <div className="search_container">
                <SearchBar onSearch={handleSearch} />
                <FilterComponent onFilterChange={handleFilterChange} />
              </div>
            </>
          )}
          {/* Show Login only when the showLogin state is true */}
          {showLogin && !isLoggedIn && <Login onLogin={handleLogin} />}
        </>
      )}

      {/* Define the routes for About, Contact, and other pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <MassMutualLandingPage />
            </>
          }
        />
        <Route
          path="/policies"
          element={
            <PrivateRoute
              element={<List searchQuery={searchQuery} filters={filters} />}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/renewal/:policyId"
          element={
            <PrivateRoute element={<RenewalForm />} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About1></About1>
              <Legacy></Legacy>
              <Paper />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
