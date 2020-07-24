import Actions from "../../constants/constants";

const favorites = (state = JSON.parse(localStorage.getItem('favorites')) || [], action) => {
    switch (action.type) {
        case Actions.SET_FAVORITES:
            return action.payload;
        default:
            return state
    }
};

export default favorites;