import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarLinks, SidebarSocials } from "../data/SidebarData";
import { IconContext } from "react-icons/lib";

// Styles
import "./Sidebar.css";

export default function Sidebar({ handleTitle }) {
  const [menu, setMenu] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showMenu = () => {
    console.log("test");
    setMenu(!menu);
  };
  return (
    <>
      {/* Note: How to Style React-Icons:
      https://stackoverflow.com/questions/56636280/how-to-style-react-icons */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <div
          className="sidebar"
          onClick={(showMenu, showSidebar)}
          className={
            menu ? "sidebar menu-button show" : "sidebar menu-button hide"
          }
        >
          <Link to="#" className={menu ? "menu-bars show" : "menu-bars hide"}>
            <FaBars className={menu ? "icon-bars show" : "icon-bars hide"} />
          </Link>
        </div>
        {/* Sidebar */}
        <div
          className={
            sidebar ? "sidebar-backdrop show" : "sidebar-backdrop hide"
          }
          onClick={(showMenu, showSidebar)}
        ></div>
        <nav className={sidebar ? "sidebar-nav show" : "sidebar-nav hide"}>
          <ul className="sidebar-nav-items">
            <li className="sidebar-toggle">
              <Link
                to="#"
                className="menu-bars"
                onClick={(showMenu, showSidebar)}
              >
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
