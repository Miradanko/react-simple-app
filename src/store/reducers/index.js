import { combineReducers } from 'redux';
import products from './products/productsReducer';
import cart from './cart/cartReducer';
import favorites from './favorites/favoritesReducer';
import loading from './loading/loadingReducer';
import currentProduct from './currentProduct/currentProductReducer';
import openingModal from "./openModal/openingModalReducer";
import isToDelete from './deleteCart/deleteCartReducer';
import purchase from './purchase/setPurchasePeducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    products,
    favorites,
    cart,
    loading,
    currentProduct,
    openingModal,
    isToDelete,
    purchase,
    form: formReducer
})

export default rootReducer;