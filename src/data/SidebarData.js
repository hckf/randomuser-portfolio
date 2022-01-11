import React from "react";

//Icons
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaFacebook, FaHome, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { ImBubble } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";

export const SidebarLinks = [
  {
    id: 1,
    text: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "sidebar-text",
  },
  {
    id: 2,
    text: "Projects",
    path: "/projects",
    icon: <AiOutlineFundProjectionScreen />,
    cName: "sidebar-text",
  },
  {
    id: 3,
    text: "Blog",
    path: "/blog",
    icon: <ImBubble />,
    cName: "sidebar-text",
  },
  {
    id: 4,
    text: "About",
    path: "/about",
    icon: <SiAboutdotme />,
    cName: "sidebar-text",
  },
  {
    id: 5,
    text: "Contact",
    path: "/contact",
    icon: <IoIosContact />,
    cName: "sidebar-text",
  },
];

export const SidebarSocials = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
    cName: "socials-icon",
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
    cName: "socials-icon",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://uk.linkedin.com/",
    icon: <FaLinkedin />,
    cName: "socials-icon",
  },
];
