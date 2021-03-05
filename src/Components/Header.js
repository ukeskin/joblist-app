import React from "react";
import SearchBox from "./SearchBox";
import "../Style/Header.css";
function Header() {
  return (
    <div className="Header">
      <h2 className="Header__Title">GitHub Jobs</h2>
      <SearchBox />
    </div>
  );
}

export default Header;
