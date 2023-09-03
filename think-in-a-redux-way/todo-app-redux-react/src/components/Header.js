import React, { useState } from "react";
import doubleTick from "../images/double-tick.png";
import notes from "../images/notes.png";
import { useDispatch } from "react-redux";
import {
  addTodos,
  allCompletedTodos,
  clearCompletedTodos,
} from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (title == "") {
      alert("Please enter title");
      return;
    }
    dispatch(
      addTodos({
        title: title,
        completed: false,
        color: ["red"],
      })
    );
    setTitle("");
  };
  const handleComplete = () => {
    dispatch(allCompletedTodos());
  };
  const handleClear = () => {
    dispatch(clearCompletedTodos());
  };
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
          onClick={handleClick}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span onClick={handleComplete}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClear}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
