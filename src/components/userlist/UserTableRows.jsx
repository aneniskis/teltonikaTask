import React from "react";
import { v4 as uuidv4 } from "uuid";

export const UserTableRows = ({ filteredUser, subSubCategory }) => {
  return (
    <div className="table">
      <div className="table__title">
        <h4>User with sub-sub-category - {subSubCategory}</h4>
      </div>
      <div className="table__header">
        <span>Name</span>
        <span>Last Name</span>
        <span>Email</span>
        <span>Age</span>
        <span>Gender</span>
      </div>
      <div className="table__list">
        {filteredUser.map((user) => {
          if (user.subSubCategory === subSubCategory) {
            return (
              <div key={uuidv4()} className="table__header">
                <span>
                  {user.name.split("")[0].toUpperCase() + user.name.slice(1)}
                </span>
                <span>
                  {user.lastName.split("")[0].toUpperCase() +
                    user.lastName.slice(1)}
                </span>
                <span>{user.email}</span>
                <span>{user.age}</span>
                <span>{user.gender}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
