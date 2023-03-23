import React, { useState } from "react";
import { nameValidation, validateEmail } from "../../validation/validation";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USERS } from "../../redux/features/user/userSlice";
import { toast } from "react-toastify";
import "./_createUser.scss";
import { NavLink } from "react-router-dom";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  age: "",
  gender: "",
  category: "",
  subCategory: "",
  subSubCategory: "",
};

export const CreateUser = () => {
  const [formData, setFormData] = useState(initialState);
  const {
    name,
    lastName,
    email,
    age,
    gender,
    category,
    subCategory,
    subSubCategory,
  } = formData;
  const [categoryValue, setCategoryValue] = useState(null);
  const [subCategoryValue, setSubCategoryValue] = useState(null);
  const [subSubCategoryValue, setSubSubCategoryValue] = useState(null);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { users } = useSelector((state) => state.users);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !lastName ||
      !age ||
      !gender ||
      !category ||
      !subCategory ||
      !subSubCategory
    ) {
      return toast.error("All Fields are required");
    }
    if (name.length < 2 || name.length > 15) {
      return toast.error("Name must be from 3 to 15 characters");
    }
    if (!nameValidation(name)) {
      return toast.error("The name must contain only alphabetic characters ");
    }
    if (!nameValidation(lastName)) {
      return toast.error(
        "The last name must contain only alphabetic characters "
      );
    }
    if (lastName.length < 2 || lastName.length > 15) {
      return toast.error("Name must be from 3 to 15 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (Number(age) < 18 || Number(age) > 110) {
      return toast.error(
        "The user must be an adult aged 18 or  less than 110 "
      );
    }

    const userData = {
      name: name.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email,
      age,
      gender,
      category,
      subCategory,
      subSubCategory,
    };
    console.log(userData);
    console.log(subCategoryValue);
    await dispatch(ADD_USERS(userData));
    setFormData(initialState);
    setCategoryValue(null);
    setSubCategoryValue(null);
    setSubSubCategoryValue(null);
    toast.success("New User was added");
  };

  return (
    <section className="createUser">
      {!categories.length && (
        <div className="createUser__noUser">
          <h2>
            To add a new user, you first need to create a category for them.
          </h2>
          <NavLink className="navLink" to={"/"}>
            Create new Categories
          </NavLink>
        </div>
      )}
      {categories.length ? (
        <div className="createUser__form">
          <h2 className="createUser__title">Add new user</h2>
          <form onSubmit={handleSubmit} className="createUser__formGrid">
            <div className="createUser__formRow">
              <div className="createUser__formGroup">
                <input
                  placeholder="Name"
                  className="createUser__formGroup--input"
                  name="name"
                  type="text"
                  value={name}
                  required
                  onChange={handleInputChange}
                />
                <label className="createUser__formGroup--label">Name</label>
              </div>
              <div className="createUser__formGroup">
                <input
                  placeholder="Last Name"
                  className="createUser__formGroup--input"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={handleInputChange}
                />
                <label className="createUser__formGroup--label">
                  Last Name
                </label>
              </div>
              <div className="createUser__formGroup">
                <input
                  placeholder="Email"
                  name="email"
                  className="createUser__formGroup--input"
                  type="text"
                  value={email}
                  onChange={handleInputChange}
                />
                <label className="createUser__formGroup--label">Email</label>
              </div>
              <div className="createUser__formGroup">
                <input
                  className="createUser__formGroup--input"
                  placeholder="Age"
                  name="age"
                  type="number"
                  step="1"
                  value={age}
                  onChange={handleInputChange}
                />
                <label className="createUser__formGroup--label"> Age</label>
              </div>
              <div className="createUser__formGroup">
                <label className="createUser__formGroup--label">Gender</label>
                <select
                  className="createUser__formGroup--input"
                  value={gender}
                  name="gender"
                  id="gender"
                  onChange={handleInputChange}
                >
                  <option value="">--Please select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="createUser__formGroup">
                <label className="createUser__formGroup--label">
                  {" "}
                  User category
                </label>
                <select
                  className="createUser__formGroup--input"
                  value={category}
                  name="category"
                  id="category"
                  onChange={(e) => {
                    handleInputChange(e), setCategoryValue(e.target.value);
                  }}
                >
                  <option value="">--Please select--</option>
                  {categories.map((object, i) => (
                    <option
                      key={`${object} + ${i}`}
                      value={Object.keys(object)}
                    >
                      {Object.keys(object)}
                    </option>
                  ))}
                </select>
              </div>
              {categoryValue && (
                <div className="createUser__formGroup">
                  <label className="createUser__formGroup--label">
                    {" "}
                    Sub category
                  </label>
                  <select
                    className="createUser__formGroup--input"
                    value={subCategory}
                    name="subCategory"
                    id="subCategory"
                    onChange={(e) => {
                      handleInputChange(e), setSubCategoryValue(e.target.value);
                    }}
                  >
                    <option value="">--Please select--</option>
                    {categories
                      .filter((key) => Object.keys(key)[0] === categoryValue)
                      .map((object, i) =>
                        Object.entries(object)[0][1].map((key, i) => (
                          <option
                            key={`${key} + ${i}`}
                            value={Object.keys(key)}
                          >
                            {Object.keys(key)}
                          </option>
                        ))
                      )}
                  </select>
                </div>
              )}
              {subCategoryValue && (
                <div className="createUser__formGroup">
                  <label className="createUser__formGroup--label">
                    {" "}
                    Sub-sub-category
                  </label>
                  <select
                    className="createUser__formGroup--input"
                    value={subSubCategory}
                    name="subSubCategory"
                    id="subSubCategory"
                    onChange={(e) => {
                      handleInputChange(e),
                        setSubSubCategoryValue(e.target.value);
                    }}
                  >
                    <option value="">--Please select--</option>
                    {categories
                      .filter((key) => Object.keys(key)[0] === categoryValue)
                      .map((object, i) =>
                        Object.entries(object)[0][1]
                          .filter(
                            (key, i) => Object.keys(key)[0] === subCategoryValue
                          )
                          .map((elem) =>
                            Object.entries(elem)[0][1].map((subSub, i) => (
                              <option key={`${subSub} + ${i}`} value={subSub}>
                                {subSub}
                              </option>
                            ))
                          )
                      )}
                  </select>
                </div>
              )}
            </div>
            <div className="createUser__button">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
