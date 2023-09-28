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
            {/* <div  className="about-link">Me Contacter</div>
          <section className="list-description">
            Pour me contacter : 06 38 88 89 75
          </section> */}

           <div className="about-box">
          <Link to={`/exp`} className="custom-link">
            <button className="about-box">
              <img src="/icon7New.png" alt="image not found" />
            </button>
            <div>Mes expériences professionnelles et diplomes</div>
          </Link>
          <section className="about-description">
            Voici mon parcours scolaire et universitaire
          </section>
        </div>
        </div>
      </section>
    </div>
  );
};
