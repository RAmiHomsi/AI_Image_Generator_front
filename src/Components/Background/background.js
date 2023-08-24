import { useState } from "react";
import React from "react";
import {Link} from 'react-router-dom'
import './background.css'
import bg from'./bg.jpg';


const background= ()=> {
  
  return (
    <div className="hero">
        <img src={bg} id="image"/>

        <div className="content">
            <h1>RAMO</h1>
            <p>The one and only</p>

        <div>
            <Link to="/generator" className="btn">Get Started</Link>
        </div>
    </div>
    
    </div>
  );
}

export default background;
