import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import loncasesData from "../../data/longcases";
import { broken } from "../../data/cloudinary";

import ChapterTools from "../ChapterTools/ChapterTools";
import ChapterNavigation from "../ChapterTools/ChapterNavigation";

import { getChapterSections } from "../../data/chapterSections";

import "./CaseChapter.css";


const LongcaseChapter = () => {

  const { id } = useParams();

  const navigate = useNavigate();


  /* =========================================================
     FIND CURRENT CHAPTER
  ========================================================= */

  const currentIndex = loncasesData.findIndex(
    (item) =>
      String(item.chapterId) === String(id)
  );

  const chapter = loncasesData[currentIndex];


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
            The long case you are looking for
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
      ? loncasesData[currentIndex - 1]
      : null;


  const nextChapter =
    currentIndex < loncasesData.length - 1
      ? loncasesData[currentIndex + 1]
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
            IMAGE + CHAPTER TOOLS
        =================================================== */}

        {chapter.image && (

          <div className="longcase-main-image-wrapper">

            <img
              src={chapter.image}
              alt={chapter.name}
              className="longcase-main-image"
            />


            {/* Tools on top of image */}

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
            DYNAMIC CHAPTER SECTIONS
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


                {/* ARRAY CONTENT */}

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

                  /* STRING CONTENT */

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
                    `/Longcaseschapter/${previousChapter.chapterId}`,
                }
              : null
          }

          nextChapter={
            nextChapter
              ? {
                  name: nextChapter.name,
                  path:
                    `/Longcaseschapter/${nextChapter.chapterId}`,
                }
              : null
          }
        />

      </section>

    </main>
  );
};


export default LongcaseChapter;