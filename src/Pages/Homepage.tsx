import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Homepage.css";
import { ProjectList } from "../Components/ProjectList";
import { AboutList } from "../Components/AboutList";
import { Link, useNavigate } from "react-router-dom";

export const Homepage = () => {
  const [isProjectListVisible, setProjectListVisible] = useState(false);
  const [isAboutListVisible, setAboutListVisible] = useState(false);

  const toggleProjectList = () => {
    setProjectListVisible(!isProjectListVisible);
  };

  const toggleAboutList = () => {
    setAboutListVisible(!isAboutListVisible);
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTitleDescription = (event: React.MouseEvent) => {
    event.preventDefault();
    scrollToElement("title-description");
  };

  return (
    <div className="homepage-container">
      <section className="homepage-presentation">
        <div className="header-style">
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
            href="/CV-MLamineDiaby.pdf"
            target="_blank"
            className="icon-header1"
          >
            <img
              src="/cvIcon.png"
              alt="img not found"
              rel="noopener noreferrer"
              className="img-header"
            />
          </a>

          <a
            href="https://github.com/DiabyMLD"
            target="_blank"
            className="icon-header2"
          >
            <img
              src="/githubIcon.png"
              alt="img not found"
              rel="noopener noreferrer"
              className="img-header2"
            />
          </a>
        </div>

        <img src="/banner4.jpg" className="homepage-img" alt="Background"></img>
        <h1 className="title-banner">MLD</h1>
        {/* h1 à changer */}

        <div className="home-description">Mon monde à moi</div>
        <section className="home-section">
          <div className="home-direction"> Vous souhaitez me connaître?</div>
          <div className="click">
            Scrollez vers le bas pour voir mon parcours.
          </div>
        </section>

        <section className="home-section1">
          <div className="home-direction"> Vous souhaitez voir mes travaux?</div>
          <div className="click">
            Cliquez sur les rubiques en ci-dessous.
          </div>
        </section>
        
        <div className="navigation-list">
          <ul className="navigation-style">
            <li className="realisations">
              <Link to="/projects">Réalisations</Link>
            </li>
            <li className="dessins">
              <Link to="/drawings">Dessins</Link>
            </li>
            <li className="langages">
              <Link to="/languages">Langages</Link>
            </li>
            <li className="experiences">
              <Link to="/exp">Expériences</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="title-description">Mon parcours</div>

      <section className="homepage-infos">
        {/* <div className="homepage-symbole"> &gt; </div> */}
        <p className="homepage-first">
          <div className="title2">Lycée</div>
          <br />
          <p className="home-txt">
            Au lycée Honoré de Balzac, j'ai choisi la filière STMG avec une
            spécialisation en Marketing. Ces années ont jeté les bases de ma
            compréhension du management et du marketing, formant une solide
            fondation pour mes études ultérieures.
          </p>
        </p>
        <img src="/balzac.jpg"></img>
      </section>

      <section className="homepage-infos">
        <img src="/paris8.jpg"></img>
        <p className="homepage-first">
          <div className="title2">Université</div>
          <br />
          <p className="home-txt">
            Après le lycée, j'ai poursuivi mes études en obtenant une licence en
            Administration Économique et Sociale avec une spécialisation en
            Ressources Humaines. Cette période a approfondi ma compréhension des
            dynamiques économiques et sociales, en mettant l'accent sur la
            gestion des ressources humaines.
          </p>
        </p>
      </section>

      <section className="homepage-infos">
        <p className="homepage-first">
          <div className="title2">Informatique</div>
          <br />
          <p className="home-txt">
            Forts de ces expériences, j'ai pris la décision de me réorienter
            vers l'informatique, motivé par une passion croissante pour la
            technologie. Cette transition représente pour moi une opportunité
            d'allier mes compétences en gestion à une expertise technique,
            ouvrant la voie à de nouveaux défis et à une exploration
            passionnante de l'univers digital.
          </p>
        </p>
        <img src="/clavier.jpg"></img>
      </section>
    </div>
  );
};
