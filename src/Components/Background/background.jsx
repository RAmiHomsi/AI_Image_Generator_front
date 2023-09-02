import React from "react";
import { Link } from "react-router-dom";
import "./background.css";
import NavBar from "../NavBar/NavBar";

const background = () => {
  return (
    <div className="hero">
      <NavBar />

      <div className="content">
        <h1 className="H1Background">RAMO</h1>
        <p className="PHero">The one and only</p>

        <div>
          <Link to="/imagegenerator" className="btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default background;
