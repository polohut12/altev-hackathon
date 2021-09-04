import React from "react";
import Header from "../commons/Header";
import Todo from "../commons/Todo";
import SearchIcon from "../../assets/SearchIcon";
import AddIcon from "../../assets/AddIcon";

const TodoList = () => {
  return (
    <div className="bg-white rounded-3xl max-w-sm w-full">
      <Header
        title="Your Schedule"
        description="For Tuesday you have 10 tasks"
      />
      <div className="p-5 flex justify-between items-center">
        <div className="flex border border-gray-400 rounded-full py-1 px-2 justify-between items-center">
          <input className="outline-none" />
          <SearchIcon />
        </div>
        <div className="border border-gray-300 p-2 rounded-lg">
          <AddIcon className="text-lightBlue-400" />
        </div>
      </div>
      <hr className="ml-5 bg-gradient-to-r h-1 from-lightBlue-400 to-white  border-none" />
      <div className="p-5 overflow-y-scroll" style={{ height: "75%" }}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default TodoList;
