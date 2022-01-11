import React, { useState } from "react";

import Modal from "./ProjectModal";

import "./Project.css";

export default function Project({ projectInfo }) {
  const [hover, setHover] = useState(false);
  const [modal, showModal] = useState(false);

  const modalHandler = () => {
    showModal(!modal);
  };
  return (
    <>
      {modal ? (
        <Modal
          modalHandler={modalHandler}
          projectInfo={projectInfo}
          showModal={showModal}
        />
      ) : (
        ""
      )}
      <div className="project-card-wrapper">
        <div
          className="project-card"
          onClick={() => modalHandler()}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {hover ? (
            <div className="project-text-wrapper">
              <p className="project-title">{projectInfo.title}</p>
              <p className="project-description">{projectInfo.description}</p>
            </div>
          ) : (
            <img className="project-image" src={projectInfo.image}></img>
          )}
        </div>
      </div>
    </>
  );
}
