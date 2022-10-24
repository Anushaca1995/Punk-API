import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { searchTerm, handleInput } = props;
  return (
    <form className="searchBar" action="">
      <label htmlFor="search"></label>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search..."
        onInput={handleInput}
        value={searchTerm}
      />
    </form>
  );
};

export default SearchBar;