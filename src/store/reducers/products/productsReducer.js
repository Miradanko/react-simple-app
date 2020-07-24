import Actions from '../../constants/constants';

const initState = {
    products: [],
    filteredProducts: [],
    color: '',
    sort: ''
}

const products = (state = initState, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return { ...state, products: action.payload, filteredProducts: action.payload };
        case Actions.FILTER_PRODUCTS_BY_COLOR:
            return { ...state, filteredProducts: action.payload.products, color: action.payload.color };
        case Actions.ORDER_PRODUCTS_BY_PRICE:
            return { ...state, filteredProducts: action.payload.products, sort: action.payload.sort };
        default:
            return state
    }
};

export default products;