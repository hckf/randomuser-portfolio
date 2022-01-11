import React from "react";
import { useState } from "react/cjs/react.development";

import Modal from "../components/ProjectModal";
import Project from "../components/Project";
import { ProjectData } from "../data/ProjectData";

import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="project-page-description">
        Infrequent writing on various topics tangentially related to my work.
      </div>

      <div className="project-grid">
        {ProjectData.map((item) => {
          return (
            <Project className={item.cName} key={item.id} projectInfo={item} />
          );
        })}
      </div>

      {/* OLD */}
      {/* <div className="project-grid">
        {ProjectData.map((item) => {
          return (
            <Project className={item.cName} key={item.id} projectInfo={item} />
          );
        })}
      </div> */}
    </>
  );
}
