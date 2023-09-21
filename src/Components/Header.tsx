import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header-container">
      <ul className="Header-menu" style={{ zIndex: 2 }}>
        
        <li className="menu-dropdown">
          <span className="weight">Contact</span>
          <ul className="submenu">
          <li>
              <Link to="/">Accueil</Link> {/* Lien vers la page d'accueil */}
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lamine-diaby-418603273/" target="blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/DiabyMLD" target="blank">GitHub</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
