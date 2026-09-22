import React from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./LongcasesDataCarousel.css";

import shortcaseData from "../../data/shortcases";

const ShortcasesDataCarousel = ({
  shortcasesData: propsData = [],
}) => {
  const navigate = useNavigate();

  /** DATA **/

  const visibleShortcasesData =
    propsData.length > 0
      ? propsData
      : shortcaseData;


  /** NAVIGATION - No automatic scroll here. **/

  const handleNavigation = (chapterId) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/Shortcaseschapter/${chapterId}`);
  };

  /** EMPTY STATE **/

  if (!visibleShortcasesData.length) {
    return (
      <div className="error-message">
        No short cases available
      </div>
    );
  }


  return (
    <section
      className="longcases-section"
      id="short-cases-section"
    >

      {/** SECTION HEADER **/}

      <div className="longcases-header">
        <h2>SHORT CASES</h2>
      </div>

      {/** SUBTITLE **/}

      <p className="longcases-subtitle">
        Explore focused surgical cases and
        strengthen your clinical knowledge
        and examination skills.
      </p>

      {/** CAROUSEL **/}

      <div className="longcases-carousel">

        <Swiper
          modules={[
            Pagination,
            Keyboard,
            A11y,
          ]}
          spaceBetween={24}
          centeredSlides={false}
          loop={false}
          speed={500}
          grabCursor={true}
          watchSlidesProgress={true}

          /* NO AUTO SCROLL */
          autoplay={false}

          keyboard={{
            enabled: true,
          }}

          /* NO PREV / NEXT BUTTONS */
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}

          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 14,
            },

            480: {
              slidesPerView: 1.15,
              spaceBetween: 16,
            },

            600: {
              slidesPerView: 1.7,
              spaceBetween: 18,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 2.5,
              spaceBetween: 22,
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
            },

            1440: {
              slidesPerView: 3,
              spaceBetween: 26,
            },

            1700: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
        >

          {visibleShortcasesData.map(
            (item, index) => {

              const chapterId =
                item.chapterId ??
                item.id ??
                index;


              return (
                <SwiperSlide
                  key={chapterId}
                >

                  <article

                    className="longcase-card"

                    onClick={() =>
                      handleNavigation(
                        chapterId
                      )
                    }

                    role="button"

                    tabIndex={0}

                    aria-label={`Open short case: ${item.name}`}

                    onKeyDown={(event) => {

                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {

                        event.preventDefault();

                        handleNavigation(
                          chapterId
                        );
                      }
                    }}

                  >

                    {/** TITLE **/}

                    <div className="longcase-title-wrapper">

                      <h3 className="longcase-title">
                        {item.name}
                      </h3>

                    </div>


                    {/** IMAGE **/}

                    <div className="longcase-image-wrapper">

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="longcase-image"
                          loading={
                            index === 0
                              ? "eager"
                              : "lazy"
                          }
                        />
                      )}

                    </div>


                    {/** CTA **/}

                    <div className="longcase-content">

                      <span className="longcase-link"> Know more </span>

                    </div>

                  </article>

                </SwiperSlide>
              );
            }
          )}

        </Swiper>

      </div>

    </section>
  );
};

export default ShortcasesDataCarousel;