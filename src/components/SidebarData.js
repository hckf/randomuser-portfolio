import React from "react";

//Icons
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaFacebook, FaHome, FaLinkedin, FaTwitter } from "react-icons/fa";
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
];

export const SidebarSocials = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
    cName: "sidebar-text",
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
    cName: "sidebar-text",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://uk.linkedin.com/",
    icon: <FaLinkedin />,
    cName: "sidebar-text",
  },
];
