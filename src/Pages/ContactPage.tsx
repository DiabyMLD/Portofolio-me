import React, { useContext } from "react";
import { ProjectType } from "../Models/project";
import { ProjectsContext, useProjects } from "../Context/ProjectsContext";
import "./ContactPage.css"

type ContactPageProps = {
  contacts: ProjectType[];
};

export const ContactPage = ({ contacts }: ContactPageProps) => {
  const { projects } = useProjects(); // Utilisez useProjects pour accéder au contexte

  const projectData = projects.filter(
    (project) => project.category === "contact"
  );
return(
  <div className="contact-container">
      <ul>
        {projectData.map((contact) => (
          <li key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.description}</p>
          </li>
        ))}
      </ul>
  </div>
)

}
