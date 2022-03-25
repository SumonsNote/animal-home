import React from 'react';
import './AnimalCart.css'

const AnimalCart = (props) => {
    return (
        <div className='cart-container'>
            <h2>Animal Cart</h2>
            <p>{props.cart}</p>
        </div>
    );
};

export default AnimalCart;