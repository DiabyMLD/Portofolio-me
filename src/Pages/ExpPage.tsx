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
      <div className="exppage-box">
      <ul>
        {ExpData.map((exp) => (
          <li className="exppage-description" key={exp.id}>
            <img src={exp.img} alt={exp.name} />
            <h2>{exp.name}</h2>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
