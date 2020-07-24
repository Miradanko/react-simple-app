import Actions from "../../constants/constants";

const loading = (state = true, action) => {
    switch (action.type) {
        case Actions.SET_LOADING:
            return action.payload
        default:
            return state
    }
}

export default loading;