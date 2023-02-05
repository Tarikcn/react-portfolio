import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

// import logo from "../logo.svg";

function Header() {
  const [expandHeader, setExpandHeader] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandHeader(false);
  }, [location]);

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
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          HOME
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          PROJECTS
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
