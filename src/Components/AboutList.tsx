import React from "react";
import { ProjectType } from "../Models/project";
import { Link } from "react-router-dom";
import "./AboutList.css";

type AboutListProps = {
  about: ProjectType[];
};

export const AboutList = ({ about }: AboutListProps) => {
  return (
    <div className="about-container">
      <section className="about-tap">
        <div className="about-box">
          <Link to={`/exp`} className="custom-link">
            <button className="about-button">
              <img src="/icon7New.png" alt="image not found" />
            </button>
            <div>Mes expériences professionnelles et diplômes</div>
          </Link>
          <section className="about-description">
            Voici mon parcours scolaire et universitaire
          </section>
        </div>

        <div className="about-box">
          <Link to={`/about-page`} className="custom-link">
            <button className="about-button">
              <img src="/Icon11.png" alt="image not found" className="about-img" />
            </button>
            <div>À propos de moi</div>
          </Link>
          <section className="about-description">
            Si vous voulez en apprendre plus sur moi, appuyez dessus.
          </section>
        </div>
      </section>
    </div>
  );
};
