import React from 'react';
import './App.css';
import Navbar from './Navbar'; 
import  Banner  from './Banner';
import  ProductSection  from './ProductSection';
import  products  from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductList products={products} />
      <ProductSection title={"Featured Products"} productList={products.slice(0, 3)} />
      <ProductSection title={"All Products"} productList={products} />
    </div>
  );
};

export default App;