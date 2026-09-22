import React from "react";
import { chap } from "../../data/cloudinary";
import "./Chapter.css";

const Chapters = () => {
  return (
    <section className="chapters-section" id="chapters-section">

      {/* Section Heading */}
      <div className="chapters-heading">
        <h2>CHAPTERS</h2>
      </div>

      {/* Introduction */}
      <div className="chapters-intro">

        {/* Image */}
        <div className="chapters-image-wrapper">
          <img
            src={chap}
            alt="Surgical procedures and chapters"
            className="chapters-image"
          />
        </div>

        {/* Content */}
        <div className="chapters-content">
          <span className="chapters-label">
            SURGICAL RESIDENCY GUIDE
          </span>

          {/* <h3>
            Practical Knowledge for
            <span> Surgical Training</span>
          </h3> */}

          <p>
            This guide presents a curated collection of fundamental
            surgical procedures that residents are likely to encounter
            throughout their training.
          </p>

          <p>
            Each chapter walks through a specific surgery with a clear,
            step-by-step approach-covering essential techniques such as
            Intercostal Drain (ICD) insertion, Jaboulay's procedure for
            hydrocele, circumcision, appendectomy, hernia repair, Graham
            patch repair for perforated ulcers, and stoma site marking.
          </p>

          <p>
            In addition to outlining procedural steps, the guide emphasizes
            the selection and handling of instruments, adherence to surgical
            safety protocols, and awareness of common pitfalls.
          </p>

          <p>
            Designed as a practical reference, it supports residents in
            building confidence, precision, and competence in the operating
            room.
          </p>

          <div className="chapters-highlight">
            <span>1</span>
            Step-by-step surgical procedures
          </div>

          <div className="chapters-highlight">
            <span>2</span>
            Instruments &amp; surgical safety
          </div>

          <div className="chapters-highlight">
            <span>3</span>
            Practical guidance for residents
          </div>

        </div>
      </div>

    </section>
  );
};

export default Chapters;