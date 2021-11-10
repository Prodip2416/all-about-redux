import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const taskObj = useSelector(state => state);
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                {
                    taskObj.taskItem.map((task) => <TodoItem task={task} />)
                }
            </div>
        </div>
    );
};

export default TodoList;