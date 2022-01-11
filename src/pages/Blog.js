import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Article from "../components/Article";
import { ArticleData } from "../data/ArticleData";
import ArticlePage from "./ArticlePage";

// Styles
import "./Blog.css";

// Blog -> Article -> ArticleModal
export default function Blog() {
  const [showPage, setShowPage] = useState(false);
  const [pageInfo, setPageInfo] = useState([]);

  const setPage = (item) => {
    if (showPage) {
      setPageInfo(item);
      setShowPage(!showPage);
    } else {
      setPageInfo([]);
      setShowPage(!showPage);
    }
  };

  return (
    <>
      {!showPage ? (
        <div>
          <div className="blog-page-description">
            Various blog posts on topics of no particular import.
          </div>
          <div className="blog-wrapper">
            <div className="blog">
              <div className="article-grid">
                {ArticleData.map((item) => {
                  return (
                    <Article
                      key={item.id}
                      className={item.cName}
                      articleInfo={item}
                      setPage={setPage}
                    />
                  );
                })}
              </div>
            </div>
          </div>{" "}
        </div>
      ) : (
        <ArticlePage articleInfo={pageInfo} />
      )}
    </>
  );
}
