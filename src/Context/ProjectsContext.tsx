import React, { createContext, useContext } from "react";
import { ProjectType } from "../Models/project";

interface ProjectsContextProps {
  projects: ProjectType[];
}

export const ProjectsContext = createContext<ProjectsContextProps | undefined>(
  undefined
);

export const ProjectsProvider: React.FC<{ value: ProjectsContextProps }> = ({
  value,
}) => {
  return <ProjectsContext.Provider value={value}>{}</ProjectsContext.Provider>;
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
