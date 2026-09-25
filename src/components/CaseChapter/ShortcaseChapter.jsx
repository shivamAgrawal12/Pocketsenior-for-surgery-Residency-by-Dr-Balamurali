import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import shortcasesData from "../../data/shortcases";
import { broken } from "../../data/cloudinary";

import ChapterTools from "../ChapterTools/ChapterTools";
import ChapterNavigation from "../ChapterTools/ChapterNavigation";

import { getChapterSections } from "../../data/chapterSections";

import "./CaseChapter.css";


const ShortcaseChapter = () => {

  const { id } = useParams();

  const navigate = useNavigate();


  /* =========================================================
     FIND CURRENT CHAPTER
  ========================================================= */

  const currentIndex = shortcasesData.findIndex(
    (item) =>
      String(item.chapterId) === String(id)
  );

  const chapter = shortcasesData[currentIndex];


  /* =========================================================
     CHAPTER NOT FOUND
  ========================================================= */

  if (!chapter) {

    return (
      <section className="longcase-not-found">

        <div className="not-found-card">

          <img
            src={broken}
            alt="Chapter not found"
            className="not-found-image"
          />

          <h2>
            Chapter Not Found
          </h2>

          <p>
            The short case you are looking for
            could not be found.
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


  /* =========================================================
     PREVIOUS / NEXT
  ========================================================= */

  const previousChapter =
    currentIndex > 0
      ? shortcasesData[currentIndex - 1]
      : null;


  const nextChapter =
    currentIndex < shortcasesData.length - 1
      ? shortcasesData[currentIndex + 1]
      : null;


  /* =========================================================
     DYNAMIC SECTIONS
  ========================================================= */

  const sections = getChapterSections(chapter);


  return (

    <main className="longcase-page">


      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

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


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="longcase-content-section">


        {/* ===================================================
            IMAGE + TOOLS
        =================================================== */}

        {chapter.image && (

          <div className="longcase-main-image-wrapper">

            <img
              src={chapter.image}
              alt={chapter.name}
              className="longcase-main-image"
            />


            <ChapterTools
              chapterId={chapter.chapterId}
              chapterTitle={chapter.name}
            />

          </div>

        )}


        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        {chapter.text && (

          <div className="longcase-introduction">

            <p>
              {chapter.text}
            </p>

          </div>

        )}


        {/* ===================================================
            DYNAMIC SECTIONS
        =================================================== */}

        <div className="longcase-sections">

          {sections.map(
            ({ key, title, content }) => (

              <article
                className="longcase-section-card"
                key={key}
              >

                <div className="longcase-section-heading">

                  <span className="section-number">
                    👉
                  </span>

                  <h2>
                    {title}
                  </h2>

                </div>


                {Array.isArray(content) ? (

                  <ul className="longcase-list">

                    {content.map(
                      (step, index) => (

                        <li
                          key={`${key}-${index}`}
                        >
                          {step}
                        </li>

                      )
                    )}

                  </ul>

                ) : (

                  <p className="case-single-text">
                    {content}
                  </p>

                )}

              </article>

            )
          )}

        </div>


        {/* ===================================================
            PREVIOUS / NEXT
        =================================================== */}

        <ChapterNavigation
          previousChapter={
            previousChapter
              ? {
                  name: previousChapter.name,
                  path:
                    `/Shortcaseschapter/${previousChapter.chapterId}`,
                }
              : null
          }

          nextChapter={
            nextChapter
              ? {
                  name: nextChapter.name,
                  path:
                    `/Shortcaseschapter/${nextChapter.chapterId}`,
                }
              : null
          }
        />


        {/* ===================================================
            BACK HOME
        =================================================== */}

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