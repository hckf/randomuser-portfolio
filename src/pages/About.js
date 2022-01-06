import { useState } from "react";

// Components
import UserCard from "../components/UserCard";

export default function About({ loading }) {
  return (
    <div className="about-wrapper">
      <div className="about">
        About
        <UserCard loading={loading} />
      </div>
    </div>
  );
}
