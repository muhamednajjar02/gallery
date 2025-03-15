import React from 'react';
import './App.css';
const ProductCard = ({ product }) => 
   {return ( 
   <div className={"product-card"}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>)
  };
  export default ProductCard