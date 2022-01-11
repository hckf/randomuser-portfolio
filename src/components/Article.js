import { useState } from "react";

import ArticleModal from "./ArticleModal";

// Styles
import "./Article.css";
import { Link } from "react-router-dom";

export default function Article({ articleInfo, setPage }) {
  const [modal, showModal] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [pageInfo, setPageInfo] = useState([]);

  const modalHandler = () => {
    showModal(!modal);
  };

  // const pageHandler = (item) => {
  //   return showPage
  //     ? (setPageInfo(item), setShowPage(!showPage))
  //     : (setPageInfo([]), setShowPage(!showPage));
  // };

  return (
    <>
      {modal ? (
        <ArticleModal
          modalHandler={modalHandler}
          articleInfo={articleInfo}
          showModal={showModal}
        />
      ) : (
        <>
          <div className="article-card-wrapper">
            {/* <Link to={`${/articles/}:id}`}> */}
            <div className="article-card" onClick={() => modalHandler()}>
              <div className="article-text-wrapper">
                <p className="article-title">{articleInfo.title}</p>
                <p className="article-description">{articleInfo.subheader}</p>
              </div>
              <div className="article-image-wrapper">
                <img src={articleInfo.image} className="article-image" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
