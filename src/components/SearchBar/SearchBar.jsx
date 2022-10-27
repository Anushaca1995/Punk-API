import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { searchTerm, handleInput } = props;
  return (
    <form className="searchBar" action="" name="form">
      <label htmlFor="search"></label>
      <input
        className="searchBar__input" name="search"
        type="text"
        placeholder="Search..."
        onInput={handleInput}
        value={searchTerm}
      />
    </form>
  );
};

export default SearchBar;