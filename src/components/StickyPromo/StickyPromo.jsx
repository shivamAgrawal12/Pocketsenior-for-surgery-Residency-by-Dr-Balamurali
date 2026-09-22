import React from "react";
import { book } from "../../data/cloudinary";
import "./StickyPromo.css";

const StickyPromo = () => {
  const amazonLink =
    "https://www.amazon.in/dp/B0GP8WH5CX?bestFormat=true";

  return (
    <div className="sticky-promo">

      {/* AMAZON */}
      <a
        href={amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-amazon"
        aria-label="Buy on Amazon"
      >
        <div className="sticky-amazon-image">
          <img
            src= {book}
            alt="Buy our book on Amazon"
          />
        </div>

        <div className="sticky-amazon-content">
          <div className="sticky-amazon-info">
            <span className="sticky-small-text">
                AVAILABLE ON
            </span>
            <strong>Amazon</strong>
          </div>
          <span className="buy-button">
            BUY NOW
            <span>→</span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default StickyPromo;