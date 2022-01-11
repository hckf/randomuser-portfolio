import React from "react";

import { IconContext } from "react-icons/lib";

import { SidebarSocials } from "../data/SidebarData";

// Styles
import "./Footer.css";

export default function Footer() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="footer-space"></div>
      <div className="curve">
        <div className="socials-subheader">Find me at:</div>
        <ul className="socials-list">
          {SidebarSocials.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <a href={item.url} className="sidebar-link">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </IconContext.Provider>
  );
}
