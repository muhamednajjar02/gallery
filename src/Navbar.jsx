import React from 'react';
import mtm from '../public/mtm.png';

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <h1 className={"logo"}> <img src={mtm} alt="mtm" />
 Project</h1>
      <ul className={"nav-links"}>
        <li>Home</li>
        <li>Products</li>
        <li>Profile</li>
      </ul>
      <div className={"nav-buttons"}>
        <button className={"favorites"}>Favorites 0</button>
        <button className={"cart"}>Cart 0</button>
        <button className={"login"}>Login</button>
      </div>
    </nav>
  )
};

export default Navbar;
