import React from "react";
import styles from "./ProjectList.module.css";
export default function ProjectList({ projects, deleteProject }) {
  return (
    <div className="projectList">
      {projects.map((project, index) => (
        <div key={project.id} className={styles.card}>
          <p>
            {index} - {project.title}
          </p>
          <p>{project.about}</p>
          <button onClick={() => deleteProject(project.id)}>
            Delete Project
          </button>
        </div>
      ))}
    </div>
  );
}
