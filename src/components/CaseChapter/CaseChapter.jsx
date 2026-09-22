import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import testimonialsData from "../../data/testimonials";
import { broken } from "../../data/cloudinary";

import "./CaseChapter.css";

const CaseChapter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const chapter = testimonialsData.find(
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
            The chapter you are looking for could not be found.
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
     CHAPTER SECTIONS
  ========================================= */

  const sections = [
    {
      key: "indication",
      title: "Indications",
    },
    {
      key: "instrument",
      title: "Instruments",
    },
    {
      key: "procedure",
      title: "Procedure",
    },
    {
      key: "precaution",
      title: "Precautions",
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

        {/* =====================================
            IMAGE
        ===================================== */}

        {chapter.image && (
          <div className="longcase-main-image-wrapper">

            <img
              src={chapter.image}
              alt={chapter.name}
              className="longcase-main-image"
            />

          </div>
        )}


        {/* =====================================
            DESCRIPTION
        ===================================== */}

        {chapter.text && (
          <div className="longcase-introduction">

            <p>
              {chapter.text}
            </p>

          </div>
        )}


        {/* =====================================
            POSITION
        ===================================== */}

        {chapter.position && (
          <article className="longcase-section-card" id="first-card">

            <div className="longcase-section-heading">

              <span className="section-number">
                👉
              </span>

              <h2>
                Position
              </h2>

            </div>

            <p className="case-single-text">
              {chapter.position}
            </p>

          </article>
        )}


        {/* =====================================
            CHAPTER SECTIONS
        ===================================== */}

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

            return (
              <article
                className="longcase-section-card"
                key={section.key}
              >

                <div className="longcase-section-heading">

                  <span className="section-number">
                    👉
                  </span>

                  <h2>
                    {section.title}
                  </h2>

                </div>

                <ul className="longcase-list">

                  {content.map((step, itemIndex) => (
                    <li
                      key={`${section.key}-${itemIndex}`}
                    >
                      {step}
                    </li>
                  ))}

                </ul>

              </article>
            );
          })}

        </div>


        {/* =====================================
            BACK BUTTON
        ===================================== */}

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

export default CaseChapter;