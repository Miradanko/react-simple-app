import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTotal } from '../../store/actions/actions';
import Pagination from '../../components/Pagination/Pagination';
import Filter from '../../components/Filter/Filter';
import { Link } from 'react-scroll';

import Product from '../../components/Product';
import './Products.scss';

const Products = (props) => {

    const { products, favorites, onSaveToFav, cart, getTotal } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        getTotal()
    }, [getTotal]);

    //Get current posts

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const resetCurrentPage = () => setCurrentPage(1);

    const favoritesArticle = favorites.map(fav => fav.article);
    const cartArticle = cart.map(cartItem => cartItem.article);
    const productCards = currentPosts.map(product => {
        const isFav = favoritesArticle.includes(product.article);
        const isInCart = cartArticle.includes(product.article)
        return <Product isFav={isFav} isInCart={isInCart} key={product.article} product={product} onSaveToFav={onSaveToFav} />
    });

    return (
        <div className="container">
            <Filter filterCallback={resetCurrentPage} />
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
            <div className='products'>
                {productCards}
            </div>
            <Link activeClass="active" to="header" smooth={true} offset={-10} duration={500}>
                <div className="arrow-7">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </div>
    )
};

Products.propTypes = {
    products: propTypes.array.isRequired,
    onSaveToFav: propTypes.func,
    favorites: propTypes.array,
    cart: propTypes.array
}

Products.defaultProps = {
    products: []
}

const mapStateToProps = (store) => {
    return {
        products: store.products.filteredProducts,
        cart: store.cart.cartArray,
        favorites: store.favorites,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTotal: () => dispatch(getTotal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);