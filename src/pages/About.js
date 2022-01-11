import { useContext, useState } from "react";

// Components
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import { Context } from "../Context";

// Styles
import "./About.css";

export default function About({ loading }) {
  const [user, setUser] = useContext(Context);

  console.log(user);
  return (
    <>
      <div className="about-wrapper">
        {!user ? (
          <div>Loading...</div>
        ) : (
          <div className="about">
            <UserCard loading={loading} />
            <h2 className="about-subheader">Who am I?</h2>
            <p className="about-paragraph">
              Hello! My name is{" "}
              <span className="user-text">
                {user.name.first} {user.name.last}
              </span>{" "}
              and I am a web developer based in{" "}
              <span className="user-text">
                {user.location.city}, {user.location.country}
              </span>
              .
            </p>

            <p className="about-paragraph">
              In my time as a developer, I've worked for a number of companies,
              from larger corporations to smaller start-ups.
            </p>
            <p className="about-paragraph">
              Currently, my work focuses on delivering bespoke web solutions and
              applications for a variety of clients.
            </p>
            <h2 className="about-subheader">Skills</h2>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
