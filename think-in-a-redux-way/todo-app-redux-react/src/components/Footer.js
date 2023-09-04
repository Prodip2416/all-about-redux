import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  colorSelectFilter,
  statusChanged,
} from "../redux/todos-filter/actions";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const getTaskStatus = (totalItem) => {
    switch (totalItem) {
      case 0:
        return "no task ";
      case 1:
        return "One task ";

      default:
        return `${totalItem} tasks `;
    }
  };
  const handleStatus = (status) => {
    dispatch(statusChanged(status));
  };
  const handleColor = (color) => {
    if (filters.color.includes(color)) {
      dispatch(colorSelectFilter(color, "remove"));
    } else {
      dispatch(colorSelectFilter(color, "add"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>
        {getTaskStatus(todos.filter((todo) => !todo.completed).length)} left
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${filters.status == "All" && "font-bold"}`}
          onClick={() => handleStatus("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status == "Incomplete" && "font-bold"
          }`}
          onClick={() => handleStatus("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status == "Complete" && "font-bold"
          }`}
          onClick={() => handleStatus("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer
           ${filters.color == "green" && "bg-green-500"}`}
          onClick={() => handleColor("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
            filters.color == "red" && "bg-red-500"
          }`}
          onClick={() => handleColor("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${
            filters.color == "yellow" && "bg-yellow-500"
          }`}
          onClick={() => handleColor("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
