import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import './Dialog.scss';

const Dialog = (props) => {
    const { header, onClose, onSubmit, currentProduct } = props;
    const arrayActionsButtons = [
        (<button onClick={onSubmit} key='OK'>OK</button>),
        (<button onClick={onClose} key='Cancel'>Cancel</button>)
    ];
    let dialog = (
        <>
            <div onClick={onClose} className='backdrop'></div>
            <div className='dialog'>
                <button className='dialog-button' onClick={onClose}>x</button>
                <p>{header}</p>
                <div className='prod-row'>
                    <img src={currentProduct.image} className='prod-item' alt={currentProduct.article}></img>
                    <div>
                        <div className='products-description-name'>{currentProduct.name}</div>
                        <div className='products-description-price'>{currentProduct.price}</div>
                        <div className='products-description-color'>
                            <div className='products-description-color-container'>
                                <div className='products-description-color-container-square' style={{ backgroundColor: currentProduct.colorId }}></div>
                                {currentProduct.color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dialog-button-action'>{arrayActionsButtons}</div>
            </div>
        </>
    );

    return (
        <div>
            {dialog}
        </div>
    )
};

Dialog.propTypes = {
    header: propTypes.string,
    onClose: propTypes.func,
    onSubmit: propTypes.func,
    currentProduct: propTypes.object
};

Dialog.defaulsProps = {
    header: 'Добавить товар в корзину?'
}

const mapStateToProps = store => {
    return {
        currentProduct: store.currentProduct
    }
}


export default connect(mapStateToProps)(Dialog);