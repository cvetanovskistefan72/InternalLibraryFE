import React from "react";

const Search = ({ search, setSearch ,label}) => {
  return (
    <div className="input-field search">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        id={label}
        type="text"
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Search;
