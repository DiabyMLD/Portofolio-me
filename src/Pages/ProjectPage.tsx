import React from "react";
import { ProjectType } from "../Models/project";
import { useProjects } from "../Context/ProjectsContext";
import "./ProjectPage.css"

type ProjectPageProps = {
  projs: ProjectType[];
};

export const ProjectPage = ({ projs }: ProjectPageProps) => {
  const { projects } = useProjects(); // Utilisez useProjects pour accéder au contexte

  const projectData = projects.filter(
    (project) => project.category === "project"
  );

  return (
    <div className="projectpage-container">
      <ul>
        {projectData.map((proj) => (
          <li key={proj.id}>
            <h2>{proj.name}</h2>
            <p>{proj.description}</p> 
            <img src={proj.img} alt={proj.name} />
            <img src={proj.img2} />
          </li>
        ))}
      </ul>
    </div>
  );
};
