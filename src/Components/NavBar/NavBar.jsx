import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <ul className="nav-menu">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/chatsystem">Ai-Bot</Link>
        </li>
        <li>
          {" "}
          <Link to="/imagegenerator">Image-generator</Link>
        </li>
        <li>
          {" "}
          <Link to="/videogenerator">Video-generator</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
