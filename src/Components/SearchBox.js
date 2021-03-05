import React from "react";
import "../Style/SearchBox.css";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
function SearchBox() {
  return (
    <div className="SearchBox">
      <FaSearch className="icon" />
      <input className="Search__Title" type="text" placeholder="Title" />
      <FaLocationArrow className="icon" />
      <input className="Search__Location" type="text" placeholder="Location" />
      <button className="Search__Button">Search</button>
    </div>
  );
}

export default SearchBox;
