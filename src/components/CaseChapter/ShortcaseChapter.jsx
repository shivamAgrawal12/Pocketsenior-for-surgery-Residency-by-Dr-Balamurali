import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import shortcasesData from "../../data/shortcases";
import { broken } from "../../data/cloudinary";

import "./CaseChapter.css";

const ShortcaseChapter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const chapter = shortcasesData.find(
    (item) => String(item.chapterId) === String(id)
  );

  /* =========================================
     CHAPTER NOT FOUND
  ========================================= */

  if (!chapter) {
    return (
      <section className="longcase-not-found">
        <div className="not-found-card">

          <img
            src={broken}
            alt="Chapter not found"
            className="not-found-image"
          />

          <h2>Chapter Not Found</h2>

          <p>
            The short case you are looking for could not be found.
          </p>

          <button
            type="button"
            className="back-button"
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
              });
            }}
          >
            ← Back to Home
          </button>

        </div>
      </section>
    );
  }

  /* =========================================
     SHORT CASE SECTIONS
  ========================================= */

  const sections = [
    {
      key: "history_of_presenting_illness",
      title: "History of Presenting Illness",
    },
    {
      key: "past_history",
      title: "Past History",
    },
    {
      key: "personal_history",
      title: "Personal History",
    },
    {
      key: "abdominal_examination",
      title: "Abdominal Examination",
    },
    {
      key: "general_examination",
      title: "General Examination",
    },
    {
      key: "local_examination",
      title: "Local Examination",
    },
    {
      key: "inspection",
      title: "Inspection",
    },
    {
      key: "palpation",
      title: "Palpation",
    },
    {
      key: "percussion",
      title: "Percussion",
    },
    {
      key: "auscultation",
      title: "Auscultation",
    },
    {
      key: "dre",
      title: "Digital Rectal Examination",
    },
    {
      key: "summary",
      title: "Summary",
    },
  ];

  return (
    <main className="longcase-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <section className="longcase-header-section">

        <div className="longcase-header-content">

          <h1 className="longcase-title">
            {chapter.name}
          </h1>

          {chapter.complete_name && (
            <p className="longcase-complete-name">
              {chapter.complete_name}
            </p>
          )}

        </div>

      </section>


      {/* =========================================
          CONTENT
      ========================================= */}

      <section className="longcase-content-section">

        {/* Main Image */}

        {chapter.image && (
          <div className="longcase-main-image-wrapper">

            <img
              src={chapter.image}
              alt={chapter.name}
              className="longcase-main-image"
            />

          </div>
        )}


        {/* Description */}

        {chapter.text && (
          <div className="longcase-introduction">

            <p>
              {chapter.text}
            </p>

          </div>
        )}


        {/* Case Sections */}

        <div className="longcase-sections">

          {sections.map((section) => {

            const content = chapter[section.key];

            if (
              !content ||
              !Array.isArray(content) ||
              content.length === 0
            ) {
              return null;
            }

            const sectionNumber = "👉";

            return (
              <article
                className="longcase-section-card"
                key={section.key}
              >

                <div className="longcase-section-heading">

                  <span className="section-number">
                    {String(sectionNumber).padStart(2, "0")}
                  </span>

                  <h2>
                    {section.title}
                  </h2>

                </div>

                <ul className="longcase-list">

                  {content.map((step, index) => (
                    <li
                      key={`${section.key}-${index}`}
                    >
                      {step}
                    </li>
                  ))}

                </ul>

              </article>
            );
          })}

        </div>


        {/* Back */}

        <div className="longcase-navigation">

          <button
            type="button"
            className="back-button"
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
              });
            }}
          >
            ← Back to Home
          </button>

        </div>

      </section>

    </main>
  );
};

export default ShortcaseChapter;