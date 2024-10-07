import React, { useEffect, useState } from "react";
import axios from "axios";

import Url from "@/app/includes/Url.js";

function SectionOne() {
  const [slider_section, setSliderSection] = useState([]);

  useEffect(() => {
    const fetchSliderSection = async () => {
      try {
        const response = await axios.get(`${Url}/api/slider_section`);
        setSliderSection(response.data);
      } catch (error) {
        console.error("Error fetching slider_section:", error);
        setSliderSection([]);
      }
    };

    fetchSliderSection();
  }, []);

  const isDataComplete = (slide) => {
    return (
      slide.background_image &&
      slide.primary_title &&
      slide.secondary_title &&
      slide.description &&
      slide.primary_button_url &&
      slide.primary_button_text &&
      slide.secondary_button_url &&
      slide.secondary_button_text
    );
  };

  return (
    <>
      {slider_section.length > 0 &&
        slider_section.every(isDataComplete) ? ( 
        slider_section.map((slide, index) => (
          <section className="banner-section style-one" key={slide.id}>
            <div
              className="swiper swiper-initialized swiper-horizontal banner-carousel theme_carousel owl-theme"
              style={{ height: "700px" }}
            >
              <div className="swiper-wrapper">
                <div
                  className={`swiper-slide slide-item ${index === 0 ? 'swiper-slide-active' : ''}`}
                  data-swiper-slide-index={index}
                >
                  <div
                    className="image-layer lazy-image"
                    data-bg={`http://envolve.test/${slide.background_image.replace(/\\/g, '/')}`}
                    style={{
                      backgroundImage: `url('${Url}/${slide.background_image.replace(/\\/g, '/')}')`,
                    }}
                  ></div>
                  <div className="auto-container">
                    <div className="content-box justify-content-end">
                      <div>
                        <h3>{slide.info_title || 'Loading...'}</h3>
                        <h2>
                          {slide.primary_title} <br /> {slide.secondary_title}
                        </h2>
                        <div className="text">
                          {slide.description}
                        </div>
                        <div className="btn-box">
                          <a className="theme-btn btn-style-one" href={slide.primary_button_url}>
                            <span className="btn-title">{slide.primary_button_text}</span>
                          </a>
                          <a className="theme-btn btn-style-two" href={slide.secondary_button_url}>
                            <span className="btn-title">{slide.secondary_button_text}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                  <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                  <span>›</span>
                </button>
              </div>
            </div>
          </section>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SectionOne;
