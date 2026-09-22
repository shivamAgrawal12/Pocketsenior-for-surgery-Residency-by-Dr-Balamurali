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

import testimonialsData from "../../data/testimonials";

const TestimonialsCarousel = ({
  testimonials: propsData = [],
}) => {
  const navigate = useNavigate();

  /** DATA **/

  const visibleTestimonials =
    propsData.length > 0
      ? propsData
      : testimonialsData;


  /** NAVIGATION - No automatic scrolling. **/

  const handleNavigation = (chapterId) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/chapter/${chapterId}`);
  };

  /** EMPTY STATE **/

  if (!visibleTestimonials.length) {
    return (
      <div className="error-message">
        No chapters available
      </div>
    );
  }


  return (
    <section className="longcases-section" id="chapters-section">

      {/** SUBTITLE **/}

      <p className="longcases-subtitle">
        Explore surgical chapters covering
        essential procedures, techniques,
        and practical knowledge for residency.
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

          {visibleTestimonials.map(
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

                    aria-label={`Open chapter: ${item.name}`}

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

                    {/** CHAPTER TITLE **/}

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

export default TestimonialsCarousel;