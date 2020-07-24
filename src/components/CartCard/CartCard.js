import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Dialog from '../Dialog/Dialog';
import { deleteCartCart, setCart, setCurrentProduct, decreaseAmount, increaseAmount, getTotal } from '../../store/actions/actions';
import './CartCard.scss';

const CartCard = (props) => {
    const { isToDelete, setOpenModalDeleteCart, saveToCart, saveCurProd,
        currentProduct, cartProduct, cart,
        increaseAmount, decreaseAmount, getTotal } = props;

    const openModalDelete = (product) => {
        setOpenModalDeleteCart(true);
        saveCurProd(product);
    };
    const onClose = () => {
        setOpenModalDeleteCart(false);
    };
    const onDelete = (product) => {
        let newCart = [...cart];
        const indexCart = newCart.indexOf(product);

        if (indexCart !== -1) {
            newCart.splice(indexCart, 1)
        }
        localStorage.setItem('cart', JSON.stringify(newCart));

        saveCurProd(product);
        setOpenModalDeleteCart(false);
        saveToCart(newCart);
        getTotal()
    };
    const handleIncrease = (product) => {
        increaseAmount(product);
        getTotal()
    };
    const handleDecrease = (product) => {
        decreaseAmount(product);
        getTotal()
    }
    const dialogDetele = (
        <Dialog
            header='Do you really want to delete product from cart?'
            onClose={onClose}
            onSubmit={() => onDelete(currentProduct)}
            currentProduct={currentProduct}
        >
        </Dialog>
    );

    if (isToDelete) {
        return dialogDetele
    }
    return (
        <div className='cart-card'>
            <div className='cart-action'>
                <div className='cart-action-delete' onClick={() => openModalDelete(cartProduct)}>
                    <img src="https://img.icons8.com/small/16/000000/delete-sign.png" alt={cartProduct.article} />
                </div>
            </div>
            <div className='products'>
                <div className='products-img'>
                    <img src={cartProduct.image} className='products-img-item' alt={cartProduct.article}></img>
                </div>
                <div className='products-description'>
                    <div className='products-description-name'>{cartProduct.name}</div>
                    <div className='products-description-price'>${cartProduct.price}</div>
                    <div className='cart-card-footer'>
                        <div className='products-description-color'>
                            <div className='products-description-color-container'>
                                <div className='products-description-color-container-square' style={{ backgroundColor: cartProduct.colorId }}></div>
                                {cartProduct.color}
                            </div>
                        </div>
                        <div className='amount'>
                            <button className='back-next' disabled={cartProduct.amount === 1} onClick={() => handleDecrease(cartProduct.article)}>
                                <img alt='back' src="https://img.icons8.com/ios/17/000000/previous.png"/>
                            </button>
                            <p className='amount'>{cartProduct.amount}</p>
                            <button className='back-next next' onClick={() => handleIncrease(cartProduct.article)}>
                                <img alt='next' src="https://img.icons8.com/ios/17/000000/next.png"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

CartCard.propTypes = {
    onSaveToFav: propTypes.func,
    isFav: propTypes.bool,
    cartProduct: propTypes.object,
    isToDelete: propTypes.bool,
    setOpenModalDeleteCart: propTypes.func,
    saveToCart: propTypes.func,
    saveCurProd: propTypes.func,
    currentProduct: propTypes.object,
    cart: propTypes.array
}

const mapStateToProps = store => {
    return {
        isToDelete: store.isToDelete,
        cart: store.cart.cartArray,
        currentProduct: store.currentProduct
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenModalDeleteCart: (card) => dispatch(deleteCartCart(card)),
        saveToCart: (cartItem) => dispatch(setCart(cartItem)),
        saveCurProd: (product) => dispatch(setCurrentProduct(product)),
        increaseAmount: (item) => dispatch(increaseAmount(item)),
        decreaseAmount: (count) => dispatch(decreaseAmount(count)),
        getTotal: () => dispatch(getTotal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);