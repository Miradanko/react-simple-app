import Actions from "../../constants/constants";

const isToDelete = (state = false, action)  => {
    switch (action.type) {
        case Actions.DELETE_CART_CARD:
            return action.payload;
        default:
            return state
    }
};

export default isToDelete;