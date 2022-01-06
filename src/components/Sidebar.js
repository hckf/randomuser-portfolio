import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarLinks, SidebarSocials } from "./SidebarData";
import { IconContext } from "react-icons/lib";

// Styles
import "./Sidebar.css";

export default function Sidebar({ handleTitle }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        {/* Sidebar */}
        <nav className={sidebar ? "sidebar-nav show" : "sidebar-nav hide"}>
          <ul className="sidebar-nav-items">
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarLinks.map((item) => {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path} onClick={() => handleTitle(item.text)}>
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </li>
              );
            })}
            {SidebarSocials.map((item) => {
              return (
                <li key={item.id} className={item.cName}>
                  <a href={item.url}>
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
