import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Style.css";
import shortcaseData from "./shortcases";

const ShortcasesDataCarousel = ({ loncasesData: propsData = [] }) => {
  const [visibleloncasesData, setVisibleloncasesData] = useState([]);
  const [slidePercentage, setSlidePercentage] = useState(40);
  const navigate = useNavigate();

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 570) {
      setSlidePercentage(100);
    } else if (window.innerWidth <= 630) {
      setSlidePercentage(78);
    } else if (window.innerWidth <= 680) {
      setSlidePercentage(70);
    } else if (window.innerWidth <= 730) {
      setSlidePercentage(65);
    } else if (window.innerWidth <= 805) {
      setSlidePercentage(60);
    } else if (window.innerWidth <= 880) {
      setSlidePercentage(55);
    } else if (window.innerWidth <= 960) {
      setSlidePercentage(50);
    } else if (window.innerWidth <= 1060) {
      setSlidePercentage(46);
    } else if (window.innerWidth <= 1350) {
      setSlidePercentage(42);
    } else if (window.innerWidth <= 1560) {
      setSlidePercentage(40);
    } else if (window.innerWidth <= 1750) {
      setSlidePercentage(35);
    } else {
      setSlidePercentage(30);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    // ✅ Fix: fallback to shortcaseData (imported), not undefined variable
    setVisibleloncasesData(propsData.length > 0 ? propsData : shortcaseData);
  }, [propsData]);

  const handleNavigation = (chapterId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/Shortcaseschapter/${chapterId}`);
  };

  if (visibleloncasesData.length === 0) {
    return <div className="error-message">No loncasesData available</div>;
  }

  return (
    <div className="carousel-container">
      <div className="container-chap">
        <h1 id="longcase-heading">
          <span id="long-heading-span">~</span> SHORT CASES{" "}
          <span id="long-heading-span">~</span>
        </h1>
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay
          infiniteLoop
          interval={3500}
          transitionTime={500}
          centerMode
          centerSlidePercentage={slidePercentage}
        >
          {visibleloncasesData.map((caseItem, index) => (
            <div
              className="shadow-effect"
              key={index}
              onClick={() => handleNavigation(caseItem.chapterId)}
            >
              <div className="testimonial-item">
                <p className="chap-name">{caseItem.name}</p>
              </div>
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="chap-image"
              />
              <p className="chap-button">Know More →</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ShortcasesDataCarousel;
