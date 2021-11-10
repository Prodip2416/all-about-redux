const initState = {
    cartCount: 0
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { cartCount: ++state.cartCount }
        case 'REMOVE_ITEM':
            return { cartCount: --state.cartCount }
        default:
            return state;
    }
}