import "./ProjectModal.css";

export default function Modal({ modalHandler, projectInfo }) {
  return (
    <div className="modal-backdrop" onClick={() => modalHandler()}>
      <div className="modal-project" onClick={() => modalHandler()}>
        <p className="modal-project-title">{projectInfo.title}</p>
        <p className="modal-project-description">{projectInfo.description}</p>
        Tech Used
        <div className="modal-project-tech-list">
          {projectInfo.tech.map((item, index) => {
            return (
              <span key={index} className="modal-project-tech">
                {item}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
