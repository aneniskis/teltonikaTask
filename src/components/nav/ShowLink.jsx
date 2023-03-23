import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { shortenText } from "../../validation/validation";

export const ShowLink = ({ categoryName, onChangeHandler }) => {
  const [showIcon, setShowIcon] = useState(true);

  return (
    <>
      <div
        className="linkItem"
        onClick={(e) => {
          setShowIcon(!showIcon), onChangeHandler(e);
        }}
      >
        <p className="linkItem__title">{shortenText(categoryName[0], 15)}</p>
        {showIcon ? (
          <IoIosArrowDown className="linkItem__icon" />
        ) : (
          <IoIosArrowUp className="linkItem__icon" />
        )}
      </div>
    </>
  );
};
