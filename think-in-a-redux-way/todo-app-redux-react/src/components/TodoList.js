import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filterByStatus = (todo) => {
    if (filters.status == "All") {
      return true;
    } else if (filters.status == "Incomplete") {
      return !todo.completed;
    } else if (filters.status == "Complete") {
      return todo.completed;
    }
  };
  const filterByColor = (todo) => {
    if (filters.color) {
      if (todo.color.includes(filters.color)) {
        return true;
      }
    } else {
      return true;
    }
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => {
          return <Todo todo={todo} />;
        })}
    </div>
  );
};

export default TodoList;
