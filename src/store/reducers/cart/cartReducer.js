import Actions from "../../constants/constants";

const cart = (state = {
    cartArray: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0,
    totalAmount: 0
}, action) => {
    switch (action.type) {
        case Actions.SET_CART:
            return { ...state, cartArray: action.payload };
        case Actions.CLEAR_CART:
            return { ...state, cartArray: [] };
        case Actions.INCREASE_AMOUNT:
            const cart = state.cartArray.map((cartItem) => {
                if (cartItem.article === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            });
            return { ...state, cartArray: cart };
        case Actions.DECREASE_AMOUNT:
            const cartt = state.cartArray.map((cartItem) => {
                if (cartItem.article === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            });
            return { ...state, cartArray: cartt };
        case Actions.GET_TOTAL:
            let { total, amount } = state.cartArray.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem;
                const itemTotal = price * amount;

                cartTotal.total +=itemTotal;
                cartTotal.amount += amount;
                return cartTotal
            }, {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed())
            return {...state, totalPrice: total, totalAmount: amount}
        default:
            return state
    }
};

export default cart;