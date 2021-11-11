import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Add Todo Component</h3>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="write your todo" />
            <button onClick={() => dispatch({ type: 'ADD_TASK', payload: taskName })}>Add Todo</button>
        </div>
    );
};

export default AddTodo;