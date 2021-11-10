import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const addTaskItem = () => {
        dispatch({ type: 'ADD_TASK', payload: taskName });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <input type="text" onChange={(e) => { setTaskName(e.target.value) }} value={taskName} placeholder="Add New Task" className="form-control w-75" style={{ display: 'inline' }} />
                <button className="btn btn-success" onClick={addTaskItem}> Add Task</button>
            </div>
        </div>
    );
};

export default AddTask;