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
    <div className="space"> space</div>
  </div>
)

}
