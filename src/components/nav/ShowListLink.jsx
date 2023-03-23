import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ShowLink } from "./ShowLink";

export const ShowListLink = ({ categoryList, category }) => {
  const navigate = useNavigate();

  const [showList, setShowList] = useState(false);
  const onChangeHandler = () => {
    setShowList(!showList);
  };

  return (
    <div className="categoryLink">
      <ShowLink
        onChangeHandler={onChangeHandler}
        categoryName={Object.keys(category)}
      />
      {showList && (
        <ul className="linkItem__list active">
          {categoryList.map((sub, i) =>
            Object.keys(sub).map((subName, i) => (
              <li
                className="linkItem__listItem"
                onClick={() =>
                  navigate(`/userList/${Object.keys(category)[0]}/${subName}`, {
                    state: {
                      category: Object.keys(category)[0],
                      subCategory: subName,
                      subSubCategory1: Object.entries(sub)[0][1][0],
                      subSubCategory2: Object.entries(sub)[0][1][1],
                    },
                  })
                }
                key={`${uuidv4()}+ ${i}`}
              >
                {subName}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
