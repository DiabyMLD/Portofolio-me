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

  const getLangColorClass = (langName: string) => {
    switch (langName) {
      case "HTML,CSS,Javascript":
        return "html-lang";
      case "React":
        return "react-lang";
      default:
        return "";
    }
  };

  return (
    <div className="langpage-container">
       <div className="projectpage-header">
       <h2 className="projectpage-title">Mes langages</h2>
        <img src="/icon3New.png" className="projectpage-img"></img>
        </div>
      <div className="langpage-box">
        <ul>
          {langData.map((lang) => (
            <li className={`lang-description ${getLangColorClass(lang.name)}`} key={lang.id}>
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