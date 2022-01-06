import React from "react";
import Article from "../components/Article";

// Styles
import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <div className="blog">
        <div className="article-grid">
          <Article>Test</Article>
          <Article>Test</Article>
          <Article>Test</Article>
        </div>
      </div>
    </div>
  );
}
