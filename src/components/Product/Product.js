import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button/Button';
import Favorites from '../Favorites/Favorites';

import './Product.scss';

const Product = (props) => {
    const { openingModal, saveCurProd, product, header, isFav, isInCart, onSaveToFav } = props;

    if(!product) {
        return null
    }

    const openModal = (product) => {
        console.log(window.pageYOffset);
        openingModal(true);
        saveCurProd(product)
    };

    return (
        <div className='products'>
            <div className='products-img'>
                <img src={product.image} className='products-img-item' alt={product.article}></img>
            </div>
            <div className='products-description'>
                <div className='products-description-name'>{product.name}</div>
                <div className='products-description-price'>${product.price}</div>
                <div className='products-description-color'>
                    <div className='products-description-color-container'>
                        <div className='products-description-color-container-square' style={{ backgroundColor: product.colorId }}></div>
                        {product.color}
                    </div>
                    <div className='action-block'>
                        <Favorites isFav={isFav} onClick={() => onSaveToFav(product)} />
                        <Button isInCart={isInCart} text={header} onClick={() => openModal(product)} />
                    </div>
                </div>
            </div>
        </div>
    )
};


Product.propTypes = {
    onSaveToFav: propTypes.func,
    product: propTypes.object,
    openingModal: propTypes.func,
    isFav: propTypes.bool,
    isInCart: propTypes.bool,
    saveCurProd: propTypes.func
}

export default Product;