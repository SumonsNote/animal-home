import React, { useEffect, useState } from "react";
import AnimalCart from "../Animal-cart/AnimalCart";
import Product from "../Product/Product";
import "./AnimalShop.css";

const AnimalShop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
//   console.log(cart);

  const handleAddToCart = (product) => {
    // console.log(product.name);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("animal-data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <AnimalCart cart={cart.length} ></AnimalCart>
        <div className="cart">
          {cart.map((item) => (
            <h4 key={item.id}>{item.name}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalShop;
