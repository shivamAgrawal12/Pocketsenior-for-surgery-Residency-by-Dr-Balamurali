import React from "react";
import { heroBanner, doctor } from "../../data/cloudinary";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Hero.css";

const Home = () => {
  return (
    <section className="hero-section" id="home-section">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroBanner} type="video/mp4" />
      </video>

      {/* Dark / Blue Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <span className="hero-eyebrow">
          SURGICAL TRAINING HANDBOOK
        </span>

        <h1 className="hero-title"> POCKET SENIOR TO HACK <span>SURGERY RESIDENCY</span> IN INDIA </h1>

        <p className="hero-description">
          Welcome to the Surgical Training Handbook, created for surgical
          residents. Here, you'll find step-by-step techniques, tips, and
          practical guidance to support you through your residency and
          surgical career.
        </p>

        <div className="hero-doctor">

          <div className="left-hero-doctor-info">
            <img src={doctor} alt="Doctor icon" className="doctor-image" />
            <div className="hero-social-icon">
              <a
              href="https://www.instagram.com/dr.balamuralikrishnan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a 
              href="mailto:balamuralikrishna97@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            </div>
          </div>
          
          <div className="hero-doctor-info">
            <h3>Dr. Balamurali Balakrishnan</h3>
            <p>
              MS General Surgery (RIMS Ranchi)
              <br />
              MBBS - (TMCH, Chennai)
              <br />
              From Vellore, Tamilnadu
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Home;