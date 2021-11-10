import React from 'react';
import { useSelector } from 'react-redux';

const CompA = () => {
    const gameData = useSelector(state => state);
    return (
        <div>
            <h1>The given name in game-reducer is : <span style={{color:'red'}}>{gameData.gameName}</span></h1>
            <h1>The given name in player-reducer is : <span style={{color:'red'}}>{gameData.playerName}</span></h1>
            <h1>The given UserName is : <span style={{color:'red'}}>{gameData.userName}</span></h1>
        </div>
    );
};

export default CompA;