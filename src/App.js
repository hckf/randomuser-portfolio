import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SidebarLinks, SidebarSocials } from "./data/SidebarData";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Context } from "./Context.js";

// Styles
import "./App.css";

// App -> Home
//     -> Projects -> Project -> ProjectModal
//     -> Blog -> Article -> ArticleModal
//     -> About -> UserCard
//     -> Contact

function App() {
  const matchTitle = (links) => {
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].path) {
        return links[i].text;
      }
    }
  };

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(matchTitle(SidebarLinks));
  const [url, setUrl] = useState("https://randomuser.me/api/");
  const [user, setUser] = useState(null);

  // Get User info from randomuser API
  useEffect(() => {
    if (!user) {
      setLoading(true);
      (async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data.results[0]);
        setLoading(false);
      })();
    }
  }, []);

  if (user) {
    console.log(user);
  }

  const handleTitle = (pageTitle) => {
    setTitle(pageTitle);
  };

  return (
    <>
      <Context.Provider value={[user, setUser]}>
        <Router>
          <Header title={title} />
          <Sidebar handleTitle={handleTitle} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} loading={loading} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
