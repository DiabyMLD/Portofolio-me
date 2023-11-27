import React, { useContext } from "react";
import { ProjectType } from "../Models/project";
import { ProjectsContext, useProjects } from "../Context/ProjectsContext";
import "./ExpPage.css"

type ExpPageProps = {
  exps: ProjectType[];
};

export const ExpPage = ({ exps }: ExpPageProps) => {
  const { projects } = useProjects();

  const ExpData = projects.filter(
    (project) => project.category === "exp"


  );
  return (
    <div className="exppage-container">
       <div className="projectpage-header">
       <h2 className="projectpage-title">Experience et diplôme</h2>
        <img src="/icon7New.png" className="projectpage-img"></img>
        </div>
      <div className="exppage-box">
      <ul>
        {ExpData.map((exp) => (
          <li className="exppage-description" key={exp.id}>
            <h2 className="exp-title">{exp.name}</h2>
            <p className="exp-description">{exp.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
