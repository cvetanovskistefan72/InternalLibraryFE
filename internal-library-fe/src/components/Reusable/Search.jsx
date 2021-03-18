import React from "react";

const Search = ({ search, setSearch ,label}) => {
  return (
    <div class="input-field search">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        id={label}
        type="text"
        class="validate"
      />
      <label for={label}>{label}</label>
    </div>
  );
};

export default Search;
