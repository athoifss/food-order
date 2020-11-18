import React from "react";
import "./styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  function handleSearch(e) {
    props.handleSearch(e.target.value);
  }

  function handleHomeClick() {
    window.location.href = "/";
  }
  return (
    <header>
      <div className="logo" onClick={handleHomeClick}>
        Mom's Recipes
      </div>
      <div className="searchBar">
        <form onChange={handleSearch}>
          <div className="input">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <input type="text" placeholder="Search recipes"></input>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
