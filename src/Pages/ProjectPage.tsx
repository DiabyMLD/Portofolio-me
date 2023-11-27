import React from "react";
import { ProjectType } from "../Models/project";
import { useProjects } from "../Context/ProjectsContext";
import "./ProjectPage.css";

type ProjectPageProps = {
  projs: ProjectType[];
};

export const ProjectPage = ({ projs }: ProjectPageProps) => {
  const { projects } = useProjects();

  const projectData = projects.filter(
    (project) => project.category === "project"
  );

  return (
    <div className="projectpage-container">
      {/* <img src="/Fond1.jpg" className="projectpage-back"/> */}
      <div className="projectpage-header">
        <h2 className="projectpage-title">Mes réalisations</h2>
        <img src="/icon5New.png" className="projectpage-img" alt="Icon" />
      </div>
      <ul>
        {projectData.map((proj) => (
          <li key={proj.id} className="projectpage-list">
            <h2 className="proj-title">{proj.name}</h2>
            <p className="proj-description">{proj.description}</p>
            <div className="projectpage-img">
              <img
                src={proj.img}
                alt={proj.name}
                className="project-firstimg"
              />
              <img src={proj.img2} className="project-secondimg" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};