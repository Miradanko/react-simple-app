import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import CartCard from '../../components/CartCard/CartCard';
import FormikForm from '../../forms/FormikForm/FormikForm';
import { clearCart, getTotal } from '../../store/actions/actions';
import Button from '../../components/Button/Button';
import './Cart.scss';

const Cart = (props) => {
    const { cart, clearCart, total, getTotal } = props;
    useEffect(() => {
        getTotal()
    }, [getTotal])       
 
    const cartProducts = cart.map(cartProduct => {
        return <CartCard key={cartProduct.article} cartProduct={cartProduct} />
    });

    const handleClearCart = () => {
        clearCart();
        localStorage.removeItem('cart');
        getTotal();
        props.history.push('/')
    }
    if(cart===[]) {
        console.log(123)
        props.history.push('/')
    }


    return (
        <div className='products-cart'>
            {cartProducts.length ? <FormikForm className='submit-form' /> : null}
            <div className='products'>
                {cart.length ? cartProducts : <div className='no-prod'>No products in Cart</div>}
            </div>
            <footer className='cart-footer'>
                <div className='total-button'>
                    <div>
                        <h4 className='total'>
                            total <span>${total}.00</span>
                        </h4>
                    </div>
                    {cart.length ? <Button className='clearCart' text='Clear Cart' onClick={handleClearCart} /> : null}
                </div>
            </footer>
        </div>
    )
};

Cart.propTypes = {
    cart: propTypes.array,
    onSaveToFav: propTypes.func
}

const mapStateToProps = (store) => {
    return {
        cart: store.cart.cartArray,
        total: store.cart.totalPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
        getTotal: () => dispatch(getTotal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
