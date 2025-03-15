import React from 'react';
import "./App.css";
import mts from '../public/mts.png';

const Banner = () => {
  return (
  
    <header className={"hero"}>
      <div className={"hero-text"}>
        <h2>Discover the Future of Technology</h2>
        <p>
          Experience innovation with our premium selection of cutting-edge devices.
        </p>
        <button className={"explore"}>Explore Now</button>
      </div>
      <div className={"hero-image"}>
        <img src={mts} alt="Technology" />
      </div>
    </header>
    )
  };
  export default Banner