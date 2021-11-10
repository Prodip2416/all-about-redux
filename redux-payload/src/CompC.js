import React from 'react';
import { useDispatch } from 'react-redux';

const CompC = () => {
    const dispatch = useDispatch();
    const changeUsername = () => {
        const user = {
            username: 'Piter',
            userID: 1234,
            userEmail: 'piter@gmail.com'
        }
        dispatch({ type: 'CHANGE_USERNAME', payload: user })
    }
    return (
        <div>
            <h2>This is Component C</h2>
            <button onClick={changeUsername}>Change Username</button>
        </div>
    );
};

export default CompC;