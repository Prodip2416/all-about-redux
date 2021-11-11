const initData = {
    items:['Iphone 10','MI A2','Samsung']
}

export const itemReducers =(state=initData,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                items: [...state.items,'new item']
            }
        default:
            return state;
    }
}