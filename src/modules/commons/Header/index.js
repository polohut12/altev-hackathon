import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-b from-lightBlue-400 justify-between via-lightBlue-400 to-white h-32 rounded-3xl p-5 flex gap-5">
      <div className="w-8 flex flex-col items-center py-5">
        <div
          style={{ width: "100%" }}
          className="h-1 bg-white mb-1 rounded-full"
        />
        <div
          style={{ width: "80%" }}
          className="h-1 bg-white mb-1 rounded-full"
        />
        <div
          style={{ width: "60%" }}
          className="h-1 bg-white mb-1 rounded-full"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-gray-100 font-semibold">{title}</h1>
        {description && <p className="text-gray-100 text-xs">{description}</p>}
      </div>
      <div className="py-5">
        <div className="text-2xl font-semibold text-lightBlue-400 p-2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
          A
        </div>
      </div>
    </div>
  );
};

export default Header;
