import React from 'react';
import { useSelector } from 'react-redux';

const ListToDo = () => {
    const allTask = useSelector(state=>state.task);
    const taskList = allTask.taskList.map((task)=>{
        return <h1>{task}</h1>
    })
    return (
        <div>
            <h3>List Todo Component</h3>
            {taskList}
        </div>
    );
};

export default ListToDo;