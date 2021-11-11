import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CompA = () => {
    const items = useSelector(state=>state.itemReducer);
    const users = useSelector(state=>state.userReducer);
    const dispatch= useDispatch();
    return (
        <div>
            <h1>This is component A</h1>
            <h3>Total Number of Item Is : {items.items.length}</h3>
            <h3>Total Number of User Is : {users.users.length}</h3>
            <button onClick={()=>dispatch({type:'ADD_ITEM'})}>Add Item</button>
            <button onClick={()=>dispatch({type:'ADD_USER'})}>Add User</button>
        </div>
    );
};

export default CompA;