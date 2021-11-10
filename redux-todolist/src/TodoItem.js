import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoItem = ({ task }) => {
    const [showUpdate, setShowUpdate] = useState('none');
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();

    const deleteTask = (task) => {
        dispatch({ type: 'DELETE_TASK', payload: task })
    }
    const handleEdit = () => {
        setShowUpdate('inline');
    }
    const updateTask = (oldTask) => {
        dispatch({ type: 'UPDATE_TASK', payload: { oldTask: oldTask, newTask: newTask } });
        setShowUpdate('none');
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <h1 className="text-left">{task}</h1>
                <input type="text" style={{ display: showUpdate }} value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
                <button className="btn btn-success m-1" style={{ display: showUpdate }} onClick={() => updateTask(task)}>Update</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-danger" onClick={() => { deleteTask(task) }}>Delete</button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoItem;