import React from 'react';
import Favorites from '../../components/Favorites/Favorites';
import propTypes from 'prop-types';
import './FavoriteCard.scss';

const FavoriteCard = (props) => {
    const { isFav, onSaveToFav, favProduct } = props;
    return (
        <div className='favorite-card'>
            <div className='favorite-action'>
                <Favorites className='cart-action-fav' isFav={isFav} onClick={() => onSaveToFav(favProduct)} />
            </div>
            <div className='products'>
                <div className='products-img'>
                    <img src={favProduct.image} className='products-img-item' alt={favProduct.article}></img>
                </div>
                <div className='products-description'>
                    <div className='products-description-name'>{favProduct.name}</div>
                    <div className='products-description-price'>${favProduct.price}</div>
                    <div className='products-description-color'>
                        <div className='products-description-color-container'>
                            <div className='products-description-color-container-square' style={{ backgroundColor: favProduct.colorId }}></div>
                            {favProduct.color}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

FavoriteCard.propTypes = {
    isFav: propTypes.bool,
    onSaveToFav: propTypes.func,
    favProduct: propTypes.object
}

export default FavoriteCard;