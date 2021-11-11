const initData = {
    users:['Hulk','IronMan','SuperMan','Avenger','ShoktiMan']
}

export const userReducers =(state=initData,action)=>{
    switch(action.type){
        case 'ADD_USER':
            return{
                ...state,
                users: [...state.users,'new user']
            }
        default:
            return state;
    }
}