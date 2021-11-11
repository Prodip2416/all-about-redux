const initData = {
    cart:[]
}

export const cartReducers = (state=initData,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }
        case 'DELETE_FROM_CART':
            return {
                ...state,
                cart:state.cart.filter((item)=> item.name != action.payload.name)
            }
        default:
            return state;
    }
}