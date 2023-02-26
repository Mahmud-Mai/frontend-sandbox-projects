const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return { ...state, cart: []}
            break;

        default:
            break;
    }
    switch(action.type) {
        case 'REMOVE':
            return {
                ...state,
                cart: [state.cart.filter((cartItem) => cartItem.id !== action.payload)]
            }
    }
    switch(action.type){
        case 'INCREASE':
            let tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload){
                    return {
                        ...cartItem,
                        amount: cartItem.amount + 1
                    }
                }
                return cartItem
            }) ;
            return {
                ...state,
                cart: tempCart
            }
    }
    switch(action.type){
        case 'DECREASE':
            let tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload){
                    return {
                        ...cartItem,
                        amount: cartItem.amount - 1
                    }
                }
                return cartItem
            }) ;
            return {
                ...state,
                cart: tempCart
            }
    }

    return state
}

export default reducer;