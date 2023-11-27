import React, { useEffect } from "react";
import { ProjectType } from "../Models/project";
import { Link } from "react-router-dom";
import "./AboutList.css";

type AboutListProps = {
  about: ProjectType[];
};

export const AboutList = ({ about }: AboutListProps) => {
  // useEffect(() => {
  //   console.log("useEffect in AboutList is running");
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="about-container">
      <section className="about-tap">
        <div className="about-box">
          <Link to={`/about-page`} className="custom-link1">
            <button className="about-button">
              <img
                src="/Icon11.png"
                alt="image not found"
                className="about-img"
              />
            </button>
            <div>Mes projets</div>
          </Link>
          <section className="about-description">
            Vous pourrez voir ma photo.
          </section>
        </div>

        <div className="about-box1">
          <Link to={`/exp`} className="custom-link1">
            <button className="about-button">
              <img src="/icon7New.png" alt="image not found" className="about-img" />
            </button>
            <div>Expériences et diplômes</div>
          </Link>
          <section className="about-description">
            Voici mon parcours scolaire et universitaire
          </section>
        </div>
      </section>
    </div>
  );
};
