import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotal } from '../../store/actions/actions';
import './Header.scss';

const Header = (props) => {
    const { amount } = props;
    useEffect(() => {
        getTotal()
    })

    return (
        <div className='header' id='header'>
            <div>
                <NavLink exact to='/react-simple-app'>
                    <img src="https://img.icons8.com/ios/35/000000/home.png" alt='main-icon' />
                </NavLink>
            </div>
            <div>
                <NavLink exact to='/favorites'>
                    <img src="https://img.icons8.com/dotty/40/000000/window-favorite.png" alt='favorites-icon' />
                </NavLink>
            </div>
            <div>
                <NavLink exact to='/cart'>
                    <img src="https://img.icons8.com/dotty/40/000000/favorite-cart.png" alt='cart-icon' />
                    <div className='round'>{amount}</div>
                </NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        amount: store.cart.totalAmount
    }
}

export default connect(mapStateToProps, null)(Header);