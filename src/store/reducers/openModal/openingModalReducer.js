import Actions from '../../constants/constants';

const openingModal = (state = false, action) => {
    switch (action.type) {
        case Actions.SET_OPEN_MODAL:
            return action.payload;
        default:
            return state
    }
};

export default openingModal;