import React from "react";
import cancelImg from "../images/cancel.png";
import { useDispatch } from "react-redux";
import {
  colorSelectedTodos,
  deletedTodos,
  toggledTodos,
} from "../redux/todos/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (id) {
      dispatch(deletedTodos(id));
    }
  };
  const handleStatusChange = (id) => {
    if (id) {
      dispatch(toggledTodos(id));
    }
  };
  const handleColor = (id, color) => {
    dispatch(colorSelectedTodos(id, color));
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          todo.completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleStatusChange(todo.id)}
          className="opacity-0 absolute rounded-full"
        />
        {todo.completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div
        className={`${
          todo.completed
            ? "select-none flex-1 line-through"
            : "select-none flex-1"
        } `}
      >
        {todo?.title}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          todo.color.includes("green") ? "bg-green-500" : ""
        }`}
        onClick={() => handleColor(todo.id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          todo.color.includes("yellow") ? "bg-yellow-500" : ""
        }`}
        onClick={() => handleColor(todo.id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          todo.color.includes("red") ? "bg-red-500" : ""
        }`}
        onClick={() => handleColor(todo.id, "red")}
      ></div>

      <img
        src={cancelImg}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(todo.id)}
      />
    </div>
  );
};

export default Todo;
