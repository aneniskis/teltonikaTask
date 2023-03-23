import React from "react";
import { BiSearch } from "react-icons/bi";
import "./_search.scss";

export const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <BiSearch size={18} className="search__icon" />
      <input
        type="text"
        placeholder="Search Users"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
