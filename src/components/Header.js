import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

// import logo from "../logo.svg";

function Header() {
  const [expandHeader, setExpandHeader] = useState(false);
  return (
    <div className="navbar" id={expandHeader ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandHeader((prev) => !prev);
          }}
        >
          <i className="material-icons">reorder</i>
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
