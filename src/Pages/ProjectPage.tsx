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
          <li key={proj.id} className="projectpage-list" >
            <h2>{proj.name}</h2>
            <p>{proj.description}</p> 
            <div className="projectpage-img">
            <img src={proj.img} alt={proj.name} className="project-firstimg" />
            <img src={proj.img2} className="project-secondimg"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
