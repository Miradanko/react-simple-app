import React from 'react';
import propTypes from 'prop-types';
import './Favorites.scss';

const Favorites = (props) => {
    const { onClick, isFav } = props;
    const emptyClasses = 'fav fav-star';
    const filledClasses = 'fav fav-star filled';
    return (
        <div className={isFav ? filledClasses : emptyClasses} onClick={onClick}></div>
    )
};

Favorites.propTypes = {
    onClick: propTypes.func,
    isFav: propTypes.bool
}


export default Favorites;