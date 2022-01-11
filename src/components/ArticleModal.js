// Style
import "./ArticleModal.css";

export default function Modal({ modalHandler, articleInfo }) {
  return (
    <div className="modal-backdrop" onClick={modalHandler}>
      <div className="modal" onClick={modalHandler}>
        <p className="modal-article-title">{articleInfo.title}</p>
        <p className="modal-article-description">{articleInfo.description}</p>
      </div>
    </div>
  );
}
