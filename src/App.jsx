import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProjectPage from "./components/ProjectPage";
import Page404 from "./components/Page404";
import projectData from './data/projectData';
import ScrollToAnchor from "./utils/ScrollToAnchor";
import CvDownload from "./components/CvDownload";
import Preloader from './components/Preloader'
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  console.log(`

  ██╗  ██╗███████╗██╗     ██╗      ██████╗ ██╗
  ██║  ██║██╔════╝██║     ██║     ██╔═══██╗██║
  ███████║█████╗  ██║     ██║     ██║   ██║██║
  ██╔══██║██╔══╝  ██║     ██║     ██║   ██║╚═╝
  ██║  ██║███████╗███████╗███████╗╚██████╔╝██╗
  ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝
                                              
  `)

  return (
    <>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {projectData.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={<ProjectPage id={project.id} />}
          />
        ))}
        <Route path="/curriculum-vitae" element={<CvDownload />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
