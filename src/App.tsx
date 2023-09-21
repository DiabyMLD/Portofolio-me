import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Homepage } from "./Pages/Homepage";
import { ProjectsContext } from "./Context/ProjectsContext";
import { ProjectPage } from "./Pages/ProjectPage";
import { DrawPage } from "./Pages/DrawPage";
import { LangPage } from "./Pages/LangPage";
import { projects } from "./Data/data";
import { ProjectType } from "./Models/project";
import { ExpPage } from "./Pages/ExpPage";

const App = () => {
  return (
    <>
      <ProjectsContext.Provider value={{ projects: projects as ProjectType[] }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectPage projs={[]} />} />
            <Route path="/drawings" element={<DrawPage drawing={[]} />} />
            <Route path="/languages" element={<LangPage languages={[]} />} />
            <Route path="/exp" element={<ExpPage exps={[]} />} />
          </Routes>
        </BrowserRouter>
      </ProjectsContext.Provider>
    </>
  );
};

export default App;
