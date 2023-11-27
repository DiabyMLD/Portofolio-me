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
       <div className="projectpage-header">
      <h2 className="drawpage-title">Mes dessins</h2>
        <img src="/icon4New.png" className="drawpage-img"></img>
        </div>
    <ul className="drawpage-box">
      {drawingData.map((draw, index) => (
        <li key={draw.id}>
          <a href={draw.img} target="_blank" rel="noopener noreferrer">
            <img src={draw.img} alt={draw.name} />
          </a>
          <h2>{draw.name}</h2>
          <p>{draw.description}</p>
        </li>
      ))}
    </ul>
  </div>
);
};
