import React from 'react';
import './AnimalCart.css'

const AnimalCart = ({cart}) => {
    return (
        <div className='cart-container container-fluid'>
            <h2>Animal Cart</h2>
            <p>Item: {cart}</p>
        </div>
    );
};

export default AnimalCart;