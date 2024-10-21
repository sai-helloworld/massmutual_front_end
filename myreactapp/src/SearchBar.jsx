import { useState } from "react";
// import SearchIcon from "./assets/image.png";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // Local state to store the search input

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value); // Call the parent's onSearch function with the query
    }
  };

  return (
    <input
      type="text"
      className="search_bar"
      name="Search"
      id="Search"
      placeholder="Search"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
