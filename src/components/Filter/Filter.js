import React from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../../store/actions/actions';
import './Filter.scss';

const Filter = (props) => {
    const { products, filterProducts, filteredProducts, color, sort, sortProducts, filterCallback } = props;

    return (
        <div className="filter">
            <div>{`${filteredProducts.length} products found`}</div>
            <div>
                <label>
                    {" "}
                    Filter  color&nbsp;	
                    <select value={color} onChange={e => {
                        filterProducts(products, e.target.value);
                        filterCallback();
                    }} className="filter__select">
                        <option className="option" value="">Select color</option>
                        <option value="DARK BEIGE">DARK BEIGE</option>
                        <option value="ORANGE">ORANGE</option>
                        <option value="GREY">GREY</option>
                        <option value="SAND">SAND</option>
                        <option value="BLACK">BLACK</option>
                        <option value="MUSTARD YELLOW">MUSTARD YELLOW</option>
                        <option value="GREEN">GREEN</option>
                        <option value="LIGHT BLUE">LIGHT BLUE</option>
                        <option value="MOLE">MOLE</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    {" "}
                    Sort by&nbsp;	
                    <select value={sort} onChange={e => {
                        sortProducts(filteredProducts, e.target.value)
                    }} className="filter__select">
                        <option className="option" value="">Select</option>
                        <option value="lowestprice">Lowest to highest</option>
                        <option value="highestprice">Highest to lowest</option>
                    </select>
                </label>
            </div>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        products: store.products.products,
        filteredProducts: store.products.filteredProducts,
        color: store.products.color,
        sort: store.products.sort
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterProducts: (products, color) => dispatch(filterProducts(products, color)),
        sortProducts: (products, sort) => dispatch(sortProducts(products, sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);