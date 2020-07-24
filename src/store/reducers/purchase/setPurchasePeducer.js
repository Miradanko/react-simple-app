import Actions from '../../constants/constants';

const purchase = (state = {userData: [], products: []}, action) => {
    switch (action.type) {
        case Actions.SET_PURCHASE_DATA:
            return action.payload;
        default:
            return state
    }
};

export default purchase;