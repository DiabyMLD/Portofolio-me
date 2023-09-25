import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Homepage.css";
import { ProjectList } from "../Components/ProjectList";
import { AboutList } from "../Components/AboutList";

export const Homepage = () => {
  const [isProjectListVisible, setProjectListVisible] = useState(false);

  const toggleProjectList = () => {
    setProjectListVisible(!isProjectListVisible);
  };

  const [isAboutListVisible, setAboutListVisible] = useState(false);

  const toggleAboutList = () => {
    setAboutListVisible(!isAboutListVisible);
  };

  return (
    <div className="homepage-container">
      <section className="homepage-presentation">
        <img
          src="/background.jpg"
          className="homepage-img"
          alt="Background"
        ></img>
        <h1>Bienvenue dans mon Portofolio</h1>
      </section>
      <div className="homepage-buttons">
        <button className="button-click" onClick={toggleProjectList}>
          Réalisations
        </button>
      </div>
      <CSSTransition
        in={isProjectListVisible}
        timeout={300} // Durée de l'animation en millisecondes
        classNames={{
          enter: "project-list-enter",
          enterActive: "project-list-enter-active",
          exit: "project-list-exit",
          exitActive: "project-list-exit-active",
        }}
        unmountOnExit
      >
        <ProjectList projects={[]} />
      </CSSTransition>

      <div className="homepage-buttons">
        <button className="button-click2" onClick={toggleAboutList}>
          À propos de Moi
        </button>

        <CSSTransition
        in={isAboutListVisible}
        timeout={300} // Durée de l'animation en millisecondes
        classNames={{
          enter: "project-list-enter",
          enterActive: "project-list-enter-active",
          exit: "project-list-exit",
          exitActive: "project-list-exit-active",
        }}
        unmountOnExit
      ><AboutList about={[]} />
      </CSSTransition>



      </div>
      
    </div>
  );
};
