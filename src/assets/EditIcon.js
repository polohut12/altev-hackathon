import React from "react";

const EditButton = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0938 2.06063C13.8882 1.86537 13.5549 1.86537 13.3494 2.06063L3.67322 11.253C3.5471 11.3728 3.49789 11.5381 3.52729 11.6951L3.58107 11.9821L3.34464 12.1679C3.27606 12.2218 3.21933 12.2951 3.18492 12.39L1.39115 17.3418C1.24849 17.7356 1.64553 18.1128 2.06009 17.9773L7.2725 16.2732C7.44536 16.2167 7.55873 16.0924 7.60519 15.9447L7.6827 15.6984L7.93863 15.615C8.01131 15.5913 8.07991 15.5519 8.13916 15.4957L17.8153 6.30327C18.0209 6.10801 18.0209 5.79143 17.8153 5.59617L14.0938 2.06063ZM12.6051 1.35352C13.2218 0.767739 14.2214 0.767739 14.8381 1.35352L18.5597 4.88906C19.1763 5.47484 19.1763 6.42459 18.5597 7.01038L9.02214 16.071H19.4737V18.071H8.94729V16.1422L8.88349 16.2028C8.77323 16.3075 8.65023 16.3938 8.51909 16.4613C8.34563 16.7988 8.03641 17.081 7.61502 17.2188L2.40262 18.9229C1.15895 19.3295 -0.0321802 18.1979 0.395812 17.0164L2.18958 12.0646C2.25391 11.887 2.34884 11.7292 2.46654 11.5941C2.4699 11.215 2.62373 10.8358 2.92891 10.5459L12.6051 1.35352Z"
        fill="black"
      />
    </svg>
  );
};

export default EditButton;