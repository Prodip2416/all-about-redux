import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CompB = () => {
    const [gameName, setGameName] = useState('');
    const [playerName, setPlayerName] = useState('');
    const dispatch = useDispatch();

    const changeGameName = () => {
        dispatch({ type: 'CHANGE_GAME_NAME', payload: gameName })
    }
    const changePlayerName = () => {
        dispatch({ type: 'CHANGE_PLAYER_NAME', payload: playerName })
    }

    return (
        <div style={{ backgroundColor: 'cyan', padding: '20px' }}>
            <h1>This is component B</h1>
            <input type="text" value={gameName} onChange={(e) => { setGameName(e.target.value) }} />
            <button onClick={changeGameName}>Change Game Name</button>
            <br></br>
            <input type="text" value={playerName} onChange={(e) => { setPlayerName(e.target.value) }} />
            <button onClick={changePlayerName}>Change Player Name</button>
        </div>
    );
};

export default CompB;