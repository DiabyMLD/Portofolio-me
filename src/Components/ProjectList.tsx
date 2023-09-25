import React from "react";
import { ProjectType } from "../Models/project";
import { Link } from "react-router-dom";
import { ProjectPage } from "../Pages/ProjectPage";
import "./ProjectList.css";

type ProjectListProps = {
  projects: ProjectType[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="list-container">
      <section className="icon-tap">
        <div className="icon-box">
          <Link to={`/projects`} className="custom-link">
            <button>
              <img src="/icon5New.png" alt="image not found" />
            </button>
            <div>Mes projets</div>
          </Link>
          <section className="list-description">
            Voici la rubrique où se trouvent mes projets.
          </section>
        </div>

        <div className="icon-box">
          <Link to={`/languages`} className="custom-link">
            <button>
              <img src="/icon3New.png" alt="image not found" />
            </button>
            <div>Mes Langages</div>
          </Link>
          <section className="list-description">
            Voici les langages que j'ai étudié.
          </section>
        </div>

        <div className="icon-box">
          <Link to={`/drawings`} className="custom-link">
            <button>
              <img src="/icon4New.png" alt="image not found" />
            </button>
            <div>Mes dessins</div>
          </Link>
          <section className="list-description">
            Voici mes dessins que je fais sur tablette.
          </section>
        </div>
      </section>
    </div>
  );
};
