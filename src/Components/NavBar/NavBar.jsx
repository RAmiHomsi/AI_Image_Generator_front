import { useState } from "react";
import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';


const NavBar= ()=> {
  
  return (
    <div className="header">
      <h1>RAMO Image Generator</h1>
      <ul className="nav-menu">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
