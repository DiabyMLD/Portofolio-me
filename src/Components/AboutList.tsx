import React from "react";
import { ProjectType } from "../Models/project";
import { Link } from "react-router-dom";
import { ProjectPage } from "../Pages/ProjectPage";
import "./AboutList.css";

type AboutListProps = {
  about: ProjectType[];
};

export const AboutList = ({ about }: AboutListProps) => {
  return (
    <div className="about-container">
      <section className="about-tap">
        <div className="about-box">
          <Link to={`/about`} className="about-link">
            <button>
              <img src="Tel.png" alt="image not found" />
            </button>
            <div>Me Contacter</div>
          </Link>
          <section className="list-description">
            Pour me contacter
          </section>

           <div className="about-box">
          <Link to={`/exp`} className="custom-link">
            <button className="about-box">
              <img src="/icon7.jpg" alt="image not found" />
            </button>
            <div>Mes expériences professionnelles et diplomes</div>
          </Link>
          <section className="list-description">
            Voici mon parcours scolaire et universitaire
          </section>
        </div>
        </div>
      </section>
    </div>
  );
};
