import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name, img, price} = product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: {price}</p>
            </div>
            <div>
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;