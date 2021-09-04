import React from "react";

const AddIcon = ({ className }) => {
  return (
    <svg
      width="16"
      className={className}
      height="16"
      viewBox="0 0 16 16"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8"
        y1="4.37114e-08"
        x2="8"
        y2="16"
        stroke="currentColor"
        stroke-width="2"
      />
      <line x1="16" y1="8" y2="8" stroke-width="2" stroke="currentColor" />
    </svg>
  );
};

export default AddIcon;
