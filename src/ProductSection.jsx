import React from 'react';
import './App.css';
import ProductCard from './ProductCard';
// eslint-disable-next-line no-unused-vars
const ProductSection = ({ title, productList }) => 
{return (
    <div className={"product-section"}>
      <h2>{title}</h2>
      <div className={"product-grid"}>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>)
  };
  export default ProductSection