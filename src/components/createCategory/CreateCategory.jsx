import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_CATEGORY } from "../../redux/features/category/categoreSlice";
import "./_createCategory.scss";
import { toast } from "react-toastify";

export const CreateCategory = () => {
  const [category, setCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [subsubcategories, setSubsubcategories] = useState([]);

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (index, e) => {
    const newSubcategories = [...subcategories];
    newSubcategories[index] = e.target.value;
    setSubcategories(newSubcategories);
  };

  const handleSubsubcategoryChange = (subcategoryIndex, index, e) => {
    const newSubsubcategories = [...subsubcategories];
    newSubsubcategories[subcategoryIndex][index] = e.target.value;
    setSubsubcategories(newSubsubcategories);
  };

  const handleAddSubcategory = () => {
    setSubcategories([...subcategories, ""]);
    setSubsubcategories([...subsubcategories, []]);
  };

  const handleAddSubsubcategory = (subcategoryIndex) => {
    const newSubsubcategories = [...subsubcategories];
    newSubsubcategories[subcategoryIndex].push("");
    setSubsubcategories(newSubsubcategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      return toast.error("Please create a category");
    }
    if (
      subcategories.length < 2 ||
      subsubcategories[0].length < 2 ||
      subsubcategories[1].length < 2
    ) {
      return toast.error(
        "Sub-categories and sub-sub-categories must be two of each "
      );
    }
    if (!subcategories[0] || !subcategories[1]) {
      return toast.error("Sub-category field is required");
    }
    if (!subsubcategories[0] || !subsubcategories[1]) {
      return toast.error("Sub-sub-category field is required");
    }
    await dispatch(
      ADD_CATEGORY({
        [category]: subcategories.map((subCategory, subIndex) => ({
          [subCategory]: subsubcategories[subIndex] || [],
        })),
      })
    );

    setCategory("");
    setSubcategories([]);
    setSubsubcategories([]);
    toast.success("New Category was added");
  };

  return (
    <div className="category">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__title">
          <h2>
            Create Category, sub-categories and sub-sub-categories for users
          </h2>
        </div>
        <div className="form__group">
          <input
            placeholder="Write Category title here and click on the add Subcategory button below"
            className="form__input"
            type="text"
            value={category}
            onChange={handleCategoryChange}
          />
          <label className="form__label">
            {" "}
            Write Category title here and click on the add Subcategory button
            below
          </label>
          <div className="form__catButton">
            <button
              disabled={subcategories.length >= 2}
              type="button"
              onClick={handleAddSubcategory}
            >
              Add Subcategory
            </button>
          </div>
        </div>
        {subcategories.map((subcategory, subcategoryIndex) => (
          <div key={subcategoryIndex} className="form__group">
            <input
              type="text"
              placeholder="Write SubCategory title here and click on the add SubSubcategory button below"
              className="form__input"
              value={subcategory}
              onChange={(e) => handleSubcategoryChange(subcategoryIndex, e)}
            />
            <label className="form__label">
              Write SubCategory title here and click on the add SubSubcategory
              button below
            </label>
            {subsubcategories[subcategoryIndex].map((subsubcategory, index) => (
              <div key={`${subcategoryIndex}-${index}`} className="form__group">
                <input
                  placeholder="Sub-sub category"
                  className="form__input"
                  type="text"
                  value={subsubcategory}
                  required
                  onChange={(e) =>
                    handleSubsubcategoryChange(subcategoryIndex, index, e)
                  }
                />
                <label className="form__label">Sub-Subcategory:</label>
              </div>
            ))}
            <div className="form__catButton">
              <button
                disabled={subsubcategories[subcategoryIndex].length >= 2}
                type="button"
                onClick={() => handleAddSubsubcategory(subcategoryIndex)}
              >
                Add Sub-Subcategory
              </button>
            </div>
          </div>
        ))}
        <div className="form__submit">
          <button type="submit">Submit category</button>
        </div>
      </form>
    </div>
  );
};
