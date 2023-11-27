import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [showHomeButton, setShowHomeButton] = useState(
    location.pathname !== "/"
  );
  useEffect(() => {
    setShowHomeButton(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <div className="Header-container">
      {showHomeButton && (
        <Link to="/">
          <div className="Header-back">&#8249; Retour à l'accueil</div>
        </Link>
      )}
      {/* <div className="header-style">
      <a
        href="https://www.linkedin.com/in/lamine-diaby-418603273/"
        target="_blank"
        className="icon-header"
      >
        <img
          src="/LinkedinFooter.png"
          alt="img not found"
          className="img-header1"
        />
      </a>

       <a
          href="/CV-Diaby-Lamine-Dev.pdf"
          target="_blank"
          className="icon-header1"
        >
          <img
            src="/cvIcon.png"
            alt="img not found"
            rel="noopener noreferrer"
            className="img-header1"
          />
        </a>
      </div> */}





      
      {/* <Link to="/">
      <div className="header-title">Accueil</div>
    </Link> */}
      {/* <ul className="Header-menu" style={{ zIndex: 2 }}>
    <li className="menu-dropdown">
      <span className="weight">Contact</span>
      <ul className="submenu">
      <a href="/CV-Diaby-Lamine-Dev.pdf" target="_blank" rel="noopener noreferrer">
      CV
    </a>
        <li>
          <a href="https://www.linkedin.com/in/lamine-diaby-418603273/" target="blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/DiabyMLD" target="blank">GitHub</a>
        </li>
      </ul>
    </li>
  </ul> */}
    </div>
  );
};
