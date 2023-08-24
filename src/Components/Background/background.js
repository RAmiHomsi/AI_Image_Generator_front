import { useState } from "react";
import React from "react";
import {Link} from 'react-router-dom'
import './background.css'
import bg from'./bg.jpg';
import { useInView } from 'react-intersection-observer';
import './fade.css'

const Background= ()=> {

  const [ref, inView] = useInView({
    triggerOnce: true, // The fade-in animation will be triggered only once when the component enters the viewport
    threshold: 0.1, // Percentage of component visibility required to trigger the animation
  });
  
  return (
    <div className="hero">
        <img src={bg} id="image"/>

        <div ref={ref} className={`content fade-in ${inView ? 'visible' : ''}`} >
            <h1>RAMO</h1>
            <p>The one and only</p>

        <div>
            <Link to="/generator" className="btn">Get Started</Link>
        </div>
    </div>
    
    </div>
  );
}

export default Background;
