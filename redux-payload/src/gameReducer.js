const initData = {
    gameName: 'Football',
    playerName:'Messi',
    userName : 'Alexgender'
}

export const gameReducer = (state = initData, action) => {
    switch(action.type){
        case 'CHANGE_GAME_NAME':
            return {
                ...state,
                gameName : action.payload
            }
        case 'CHANGE_PLAYER_NAME':
            return {
                ...state,
                playerName : action.payload
            }
        case 'CHANGE_USERNAME':
            return {
                ...state,
                userName : action.payload.username
            }
        default:
            return state;
    }
}