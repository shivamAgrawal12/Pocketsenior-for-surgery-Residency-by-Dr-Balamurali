import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChapterTools.css";

const getFirstWord = (name = "") => {
  return name.trim().split(/\s+/)[0] || "";
};

const ChapterNavigation = ({
  previousChapter,
  nextChapter,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="chapter-navigation">

      {/* PREVIOUS */}
      {previousChapter ? (
        <button
          type="button"
          className="chapter-nav-card previous"
          onClick={() =>
            handleNavigation(previousChapter.path)
          }
        >
          <span className="chapter-nav-label">
            ← Previous
          </span>

          <strong>
            {getFirstWord(previousChapter.name)}
          </strong>
        </button>
      ) : (
        <div className="chapter-nav-empty" />
      )}


      {/* NEXT */}
      {nextChapter ? (
        <button
          type="button"
          className="chapter-nav-card next"
          onClick={() =>
            handleNavigation(nextChapter.path)
          }
        >
          <span className="chapter-nav-label">
            Next →
          </span>

          <strong>
            {getFirstWord(nextChapter.name)}
          </strong>
        </button>
      ) : (
        <div className="chapter-nav-empty" />
      )}

    </div>
  );
};

export default ChapterNavigation;