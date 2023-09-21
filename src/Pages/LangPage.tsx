import React, { useContext } from "react";
import { ProjectType } from "../Models/project";
import { ProjectsContext, useProjects } from "../Context/ProjectsContext";
import "./LangPage.css"

type LangPageProps = {
  languages: ProjectType[];
};

export const LangPage = ({ languages }: LangPageProps) => {
  const { projects } = useProjects(); // Utilisez useProjects pour accéder au contexte

  const langData = projects.filter(
    (project) => project.category === "language"
  );
  return (
    <div className="langpage-container">
      <div className="langpage-box">
      <ul>
        {langData.map((lang) => (
          <li className="lang-description" key={lang.id}>
            <img src={lang.img} alt={lang.name} />
            <h2>{lang.name}</h2>
            <p>{lang.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
