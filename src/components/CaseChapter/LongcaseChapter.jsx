import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import loncasesData from "../../data/longcases";
import { broken } from "../../data/cloudinary";

import "./CaseChapter.css";

const LongcaseChapter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const chapter = loncasesData.find(
    (item) => String(item.chapterId) === String(id)
  );

  /* ---------------------------------------------
     Chapter not found
  --------------------------------------------- */

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
            The long case you are looking for could not be found.
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

  /* ---------------------------------------------
     All possible content sections
  --------------------------------------------- */

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
      key: "family_history",
      title: "Family History",
    },
    {
      key: "medical_history",
      title: "Medical History",
    },
    {
      key: "menstrual_history",
      title: "Menstrual History",
    },
    {
      key: "surgical_history",
      title: "Surgical History",
    },
    {
      key: "personal_history",
      title: "Personal History",
    },
    {
      key: "menstrual_and_obstetric_history",
      title: "Menstrual and Obstetric History",
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
      key: "proctoscopic_examination",
      title: "Proctoscopic Examination",
    },
    {
      key: "per_abdomen_examination",
      title: "Per Abdomen Examination",
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
      key: "cns",
      title: "Central Nervous System Examination",
    },
    {
      key: "per_vaginal_examination",
      title: "Per Vaginal Examination",
    },
    {
      key: "bimanual_examination",
      title: "Bimanual Examination",
    },
    {
      key: "systemic_examination",
      title: "Systemic Examination",
    },
    {
      key: "respiratory_system",
      title: "Respiratory System",
    },
    {
      key: "cardiovascular",
      title: "Cardiovascular System",
    },
    {
      key: "summary",
      title: "Summary",
    },
    {
      key: "differntial_diagnosis",
      title: "Differential Diagnosis",
    },
  ];

  return (
    <main className="longcase-page">

      {/* =========================================
          PAGE HEADER
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
          MAIN CONTENT
      ========================================= */}

      <section className="longcase-content-section">

        {/* Image */}

        {chapter.image && (
          <div className="longcase-main-image-wrapper">
            <img
              src={chapter.image}
              alt={chapter.name}
              className="longcase-main-image"
            />
          </div>
        )}


        {/* Introduction / Description */}

        {chapter.text && (
          <div className="longcase-introduction">
            <p>{chapter.text}</p>
          </div>
        )}


        {/* =====================================
            CASE INFORMATION
        ===================================== */}

        <div className="longcase-sections">

          {sections.map((section) => {

            const content = chapter[section.key];

            if (!content || !Array.isArray(content) || content.length === 0) {
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

                  <h2>{section.title}</h2>

                </div>


                <ul className="longcase-list">

                  {content.map((step, index) => (
                    <li key={`${section.key}-${index}`}>
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

export default LongcaseChapter;