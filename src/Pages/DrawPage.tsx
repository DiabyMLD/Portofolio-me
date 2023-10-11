import React, { useState } from "react";
import { ProjectType } from "../Models/project";
import { ProjectsContext, useProjects } from "../Context/ProjectsContext";
import "./DrawPage.css"

type DrawPageProps = {
  drawing: ProjectType[];
};

export const DrawPage = ({ drawing }: DrawPageProps) => {
  const { projects } = useProjects();
  const drawingData = projects.filter((project) => project.category === "draw");

  // État pour gérer l'ouverture de chaque modale
  const [isModalOpen, setIsModalOpen] = useState<boolean[]>(new Array(drawingData.length).fill(false));

  // Fonction pour ouvrir une modale
  const openModal = (index: number) => {
    const newIsModalOpen = [...isModalOpen];
    newIsModalOpen[index] = true;
    setIsModalOpen(newIsModalOpen);
  };

  // Fonction pour fermer une modale
  const closeModal = (index: number) => {
    const newIsModalOpen = [...isModalOpen];
    newIsModalOpen[index] = false;
    setIsModalOpen(newIsModalOpen);
  };

  return (
    <div className="drawpage-container">
      <ul className="drawpage-box">
        {drawingData.map((draw, index) => (
          <li key={draw.id}>
            <img src={draw.img} alt={draw.name} />
            <h2>{draw.name}</h2>
            <p>{draw.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
