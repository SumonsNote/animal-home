import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AnimalShop.css'

const AnimalShop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('animal-data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            
        </div>
    );
};

export default AnimalShop;