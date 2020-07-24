import React from 'react';
import propTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
    const { text, onClick, isInCart } = props;
    const isAdded = 'btn-delete'
    const notAdded = 'btn';
    return (
        <div>
            <button className={isInCart ? isAdded : notAdded} onClick={onClick}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: propTypes.string,
    onClick: propTypes.func.isRequired,
    isInCart: propTypes.bool
};

Button.defaultProps = {
    text: 'Add to cart',
    isInCart: false
}

export default Button;