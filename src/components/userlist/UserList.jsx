import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  FILTER_USERS,
  selectUsers,
} from "../../redux/features/user/filterSlice";
import { Search } from "../seach/Search";
import "./_userList.scss";
import { useParams } from "react-router-dom";
import { UserTableRows } from "./UserTableRows";
import { ExportButton } from "./exportButton/ExportButton";

export const UserList = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const { users } = useSelector((state) => state.users);
  const { category, subCategory, subSubCategory1, subSubCategory2 } =
    location.state;

  const dispatch = useDispatch();

  const filteredUser = useSelector(selectUsers);

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [dispatch, users, search]);

  return (
    <section className="container">
      <div className="title">
        <h2>
          Tables of users whose category -{" "}
          <span className="title__category">{category}</span> and sub-category -{" "}
          <span className="title__category">{subCategory}</span>.
        </h2>
      </div>
      <div className="searchbox">
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        <ExportButton users={users} />
      </div>

      <UserTableRows
        filteredUser={filteredUser}
        subSubCategory={subSubCategory1}
      />
      <UserTableRows
        filteredUser={filteredUser}
        subSubCategory={subSubCategory2}
      />
    </section>
  );
};
