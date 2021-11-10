import React from 'react';
import { useDispatch } from 'react-redux';

const Items = () => {
    const dispatch = useDispatch();

    const additem = () => {
        dispatch({type:'ADD_ITEM'})
    }
    const removeItem = () => {
        dispatch({type:'REMOVE_ITEM'})
    }

    return (
        <div>
            <h2>This is Item Component</h2>
            <button onClick={additem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
        </div>
    );
};

export default Items;