const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return { ...state, cart: []};
        default: console.log("default clear cart");;
    }

    switch(action.type) {
        case 'REMOVE':
            return {
                ...state,
                cart: [state.cart.filter((cartItem) => cartItem.id !== action.payload)]
            }

        default: console.log("default remove item");;
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
        default: console.log("default increase item");;
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
            }).filter((cartItem) => cartItem.amount !== 0)
            return {
                ...state,
                cart: tempCart
            }
        default: console.log("default decrease item");;
    }

    switch(action.type) {
        case 'GET_TOTAL':
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                  const { price, amount } = cartItem
                  const itemTotal = price * amount

                  cartTotal.total += itemTotal
                  cartTotal.amount += amount
                  return cartTotal
                },
                {
                  total: 0,
                  amount: 0,
                }
              )
              total = parseFloat(total.toFixed(2))

              return { ...state, total, amount }

                default: return console.log('Total amount changed');
    }

    return state;
}

export default reducer;