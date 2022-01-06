import React from "react";

import Modal from "../components/Modal";
import NewProjectForm from "../components/NewProjectForm";
import ProjectList from "../components/ProjectList";

import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showProjects, setShowProjects] = useState(true);

  const addProject = (newProject) => {
    setProjects((prevProjects) => {
      return [...prevProjects, newProject];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setProjects((prevProjects) => {
      console.log(projects);
      return setProjects(prevProjects.filter((project) => id !== project.id));
    });
  };
  return (
    <div className="projects-wrapper">
      <div className="projects">
        Projects
        <div>
          <button onClick={() => setShowModal(true)}>Add New Project</button>
        </div>
        {showProjects && (
          <ProjectList deleteProject={handleClick} projects={projects} />
        )}
        {showModal && (
          <Modal>
            <NewProjectForm addProject={addProject} />
          </Modal>
        )}
      </div>
    </div>
  );
}
