import "./NewProjectForm.css";
import { useState } from "react";

export default function NewProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [about, setAbout] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      title: title,
      date: date,
      about: about,
      id: Math.floor(Math.random() * 10000), // Risk duplicate projects
    };

    addProject(newProject);
    resetForm();
  };

  return (
    <form className="new-project-form" onSubmit={handleSubmit}>
      <label>
        <span>Project:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Project Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>About</span>
        <input
          type="text"
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
