import Actions from '../constants/constants';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    axios('/products.json')
        .then(result => {
            setTimeout(() => {
                dispatch({ type: Actions.FETCH_PRODUCTS, payload: result.data });
                dispatch({ type: Actions.SET_LOADING, payload: false });
            }, 2000);
        });
};

export const filterProducts = (products, color) => (dispatch) => {
    dispatch ({ type: Actions.FILTER_PRODUCTS_BY_COLOR, payload: {
        color: color,
        products: color === '' ? products : products.filter(item => item.color.indexOf(color.toUpperCase()) >=0 )
    }})
};

export const sortProducts = (products, sort, price) => (dispatch) => {
    const sortedProducts = products.slice();
    if (sort !== '') {
        sortedProducts.sort((a, b) => 
            sort === "lowestprice" ? a.price > b.price ? 1 : -1 : a.price < b.price ? 1 : -1
        )
    } else {
        sortedProducts.sort((a, b) => ( a.article > b.article ? 1 : -1));
    }
    dispatch ({ type: Actions.ORDER_PRODUCTS_BY_PRICE, payload: {
        price: price,
        products : sortedProducts
    }})
}

export const setPurchaseData = (data) => (dispatch) => {
    dispatch ({ type: Actions.SET_PURCHASE_DATA, payload: data})
}

export const setCurrentProduct = (currentProduct) => (dispatch) => {
    dispatch ({ type: Actions.SET_CURRENT_PRODUCT, payload: currentProduct})
}

export const setOpenModal = (isOpen) => (dispatch) => {
    dispatch ({ type: Actions.SET_OPEN_MODAL, payload: isOpen})
};

export const setFavorites = (favs) => (dispatch) => {
    dispatch ({ type: Actions.SET_FAVORITES, payload: favs})
};

export const setCart = (cartCard) => (dispatch) => {
    dispatch ({ type: Actions.SET_CART, payload: cartCard })
};

export const deleteCartCart = (prod) => (dispatch) => {
    dispatch ({ type: Actions.DELETE_CART_CARD, payload: prod })
}

export const decreaseAmount = (article) => (dispatch) => {
    dispatch ({ type: Actions.DECREASE_AMOUNT, payload: article })
}
export const increaseAmount = (article) => (dispatch) => {
    console.log(article)
    dispatch ({ type: Actions.INCREASE_AMOUNT, payload: article })
}
export const clearCart = () => (dispatch) => {
    dispatch ({ type: Actions.CLEAR_CART })
}
export const getTotal = () => (dispatch) => {
    dispatch ({ type: Actions.GET_TOTAL })
}