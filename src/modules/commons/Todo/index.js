import React, { useState } from "react";
import EditIcon from "../../../assets/EditIcon";
import CancelIcon from "../../../assets/CancelIcon";

const Todo = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-5  bg-gradient-to-b hover:from-lightBlue-400  hover:to-white  rounded-lg shadow-lg"
    >
      <p className={hover ? "text-sm text-gray-100" : "text-sm"}>test</p>
      <h3
        className={
          hover
            ? "text-2xl font-semibold text-gray-100"
            : "text-2xl font-semibold "
        }
      >
        test
      </h3>
      {hover && (
        <div className="p-3 flex justify-end gap-5">
          <div className="w-10 h-10 border flex items-center justify-center rounded-lg bg-gray-100 border-gray-300">
            <EditIcon />
          </div>
          <div className="w-10 h-10 border flex items-center justify-center rounded-lg bg-gray-100 border-gray-300">
            <CancelIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
