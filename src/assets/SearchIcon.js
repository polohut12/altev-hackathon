import React from "react";

const SearchIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.6" cx="6" cy="6" r="5.5" fill="white" stroke="black" />
      <line
        opacity="0.6"
        x1="10.3536"
        y1="9.64645"
        x2="16.3536"
        y2="15.6464"
        stroke="black"
      />
    </svg>
  );
};

export default SearchIcon;
