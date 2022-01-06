import React from "react";
import "./Header.css";
export default function Header({ title }) {
  return (
    <div className="header">
      <h1 className="header-text">{title}</h1>
    </div>
  );
}
