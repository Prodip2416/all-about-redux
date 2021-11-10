import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const taskList = useSelector(state => state);
    return (
        <div>
            <h1>Redux TodoList - Total Task Remained : {taskList.taskItem.length} </h1>
        </div>
    );
};

export default Navbar;