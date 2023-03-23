import React from "react";
import "./_header.scss";
import { BiWorld } from "react-icons/bi";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <BiWorld className="header__icon" />
        <h2 className="header__title">UserLand</h2>
      </div>
    </header>
  );
};
