import React from "react";

const CloseButton = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.21335 7.69812L12.9231 13L13.796 12.4144L7.96515 7.00001L13.796 1.58565L12.9231 1.00001L7.21335 6.30191L0.872924 0.414368L0 1.00001L6.46154 7.00001L0 13L0.872925 13.5856L7.21335 7.69812Z"
        fill="black"
      />
    </svg>
  );
};

export default CloseButton;
