import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChapterTools from "../ChapterTools/ChapterTools";
import ChapterNavigation from "../ChapterTools/ChapterNavigation";
import testimonialsData from "../../data/testimonials";
import { broken } from "../../data/cloudinary";
import { getChapterSections } from "../../data/chapterSections";
import "./CaseChapter.css";


const CaseChapter = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  /** FIND CURRENT CHAPTER **/

  const currentIndex = testimonialsData.findIndex(
    (item) =>
      String(item.chapterId) === String(id)
  );

  const chapter = testimonialsData[currentIndex];

  /** CHAPTER NOT FOUND **/

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
            The chapter you are looking for
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


  /** PREVIOUS / NEXT CHAPTER **/

  const previousChapter =
    currentIndex > 0
      ? testimonialsData[currentIndex - 1]
      : null;

  const nextChapter =
    currentIndex < testimonialsData.length - 1
      ? testimonialsData[currentIndex + 1]
      : null;

  /** DYNAMIC CHAPTER SECTIONS **/

  const sections = getChapterSections(chapter);

  return (

    <main className="longcase-page">

      <section className="longcase-header-section">

        <div className="longcase-header-content">

          <h1 className="longcase-title">{chapter.name}</h1>

          {chapter.complete_name && (
            <p className="longcase-complete-name">
              {chapter.complete_name}
            </p>
          )}

        </div>

      </section>

      {/** MAIN CONTENT **/}

      <section className="longcase-content-section">

        {chapter.image && (

          <div className="longcase-main-image-wrapper">

            <img src={chapter.image} alt={chapter.name} className="longcase-main-image" />

            <ChapterTools chapterId={chapter.chapterId} chapterTitle={chapter.name} />

          </div>

        )}

        {chapter.text && (

          <div className="longcase-introduction">

            <p> {chapter.text} </p>

          </div>

        )}

        <div className="longcase-sections">

          {sections.map(
            ({ key, title, content }) => (

              <article
                className="longcase-section-card"
                key={key}
              >

                <div className="longcase-section-heading">

                  <span className="section-number"> 👉 </span>

                  <h2> {title} </h2>

                </div>

                {Array.isArray(content) ? (

                  <ul className="longcase-list">

                    {content.map(
                      (step, itemIndex) => (
                        <li key={`${key}-${itemIndex}`}> {step} </li>
                      )
                    )}

                  </ul>

                ) : (

                  <p className="case-single-text"> {content} </p>
                )}

              </article>
            )
          )}

        </div>

        <ChapterNavigation

          previousChapter={
            previousChapter
              ? {
                  name: previousChapter.name,
                  path:
                    `/chapter/${previousChapter.chapterId}`,
                }
              : null
          }

          nextChapter={
            nextChapter
              ? {
                  name: nextChapter.name,
                  path:
                    `/chapter/${nextChapter.chapterId}`,
                }
              : null
          }

        />

      </section>

    </main>
  );
};


export default CaseChapter;