import React, { useState } from "react";
import "./_navBar.scss";
import { BiUserPlus, BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ShowListLink } from "./ShowListLink";

export const NavBar = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink
          to={"/createUser"}
          className={({ isActive }) =>
            isActive ? " nav__items active" : "nav__items"
          }
        >
          <BiUserPlus className="nav__icons" />
          <p className="nav__items--titles">New User</p>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " nav__items active" : "nav__items"
          }
        >
          <BiCategory className="nav__icons" />
          <p className="nav__items--titles">New Category</p>
        </NavLink>
        {categories?.map((category, i) => (
          <div className="nav__cat" key={uuidv4()}>
            <ShowListLink
              category={category}
              categoryList={Object.entries(category)[0][1]}
            />
          </div>
        ))}
      </ul>
    </nav>
  );
};
