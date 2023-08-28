import { useState } from "react";
import React from "react";
import {Link} from 'react-router-dom'
import './background.css'
import bg from'./bg.jpg';
import NavBar from "../NavBar/NavBar";


const background= ()=> {
  
  return (
    <div className="hero">
        <NavBar />
        <img src={bg} id="image"/>

        <div className="content">
            <h1 className="H1Background">RAMO</h1>
            <p className="PHero">The one and only</p>

        <div>
            <Link to="/generator" className="btn">Get Started</Link>
        </div>
    </div>
    
    </div>
  );
}

export default background;
