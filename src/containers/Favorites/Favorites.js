import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import './Favorites.scss';

const Favorites = (props) => {
    const { onSaveToFav, favorites } = props;
    const favoritesArticle = favorites.map(fav => fav.article);
    const favoriteProducts = favorites.map(favProduct => {
        const isFav = favoritesArticle.includes(favProduct.article);
        return <FavoriteCard key={favProduct.article} isFav={isFav} favProduct={favProduct} onSaveToFav={onSaveToFav} />
    })
    return (
        <div className='products'>
            {favorites.length ? favoriteProducts : <div className='no-prod'>No Products in favorites</div>}
        </div>
    )
};

Favorites.propTypes = {
    onSaveToFav: propTypes.func,
    favorites: propTypes.array,
}

const mapStateToProps = (store) => {
    return {
        favorites: store.favorites
    }
}
Favorites.defaultProps = {
    favorites: []
}

export default connect(mapStateToProps, null)(Favorites);