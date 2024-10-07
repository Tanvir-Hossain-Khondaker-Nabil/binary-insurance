import React, { useEffect, useState } from "react";
import axios from "axios";

import Url from "@/app/includes/Url.js";

function SectionThree() {
  const [featureSection, setFeatureSection] = useState(null);

  useEffect(() => {
    const fetchFeatureSection = async () => {
      try {
        const response = await axios.get(`${Url}/api/feature_section`); // Replace with your API endpoint
        setFeatureSection(response.data[0]); // Assuming you want the first feature section
      } catch (error) {
        console.error("Error fetching feature section:", error);
      }
    };

    fetchFeatureSection();
  }, []);

  if (!featureSection) return <div></div>;

  const formatImagePath = (path) => {
    return `${Url}/${path.replace(/\\/g, '/')}`;
  };

  return (
    <>
      <section className="features-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>
              {featureSection.primary_title} <br /> {featureSection.secondary_title}
            </h2>
            <div className="text-decoration">
              <span className="left"></span>
              <span className="right"></span>
            </div>
          </div>
          <div className="row">
            {/* First Card */}
            <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms" }}>
              <div className="inner-box">
                <div className="image">
                  <div className="icon">
                    <span class="fa-solid fa-users-viewfinder"></span>
                  </div>
                  <img className="lazy-image owl-lazy" src={formatImagePath(featureSection.first_card_image)} alt="" />
                </div>
                <div className="content">
                  <h5>{featureSection.first_card_info_title}</h5>
                  <h4>{featureSection.first_card_title}</h4>
                </div>
                <div className="overlay">
                  <div className="content">
                    <h5>{featureSection.first_card_info_title}</h5>
                    <h4>{featureSection.first_card_title}</h4>
                  </div>
                  <div className="text" style={{ backgroundImage: `url(${formatImagePath(featureSection.card_background_image)})` }}>
                    <p>{featureSection.first_card_description}</p>
                    <div className="link-btn">
                      <a>
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "300ms" }}>
              <div className="inner-box">
                <div className="image">
                  <div className="icon">
                    <span class="fa-solid fa-cloud-arrow-up"></span>
                  </div>
                  <img className="lazy-image owl-lazy" src={formatImagePath(featureSection.second_card_image)} alt="" />
                </div>
                <div className="content">
                  <h5>{featureSection.second_card_info_title}</h5>
                  <h4>{featureSection.second_card_title}</h4>
                </div>
                <div className="overlay">
                  <div className="content">
                    <h5>{featureSection.second_card_info_title}</h5>
                    <h4>{featureSection.second_card_title}</h4>
                  </div>
                  <div className="text" style={{ backgroundImage: `url(${formatImagePath(featureSection.card_background_image)})` }}>
                    <p>{featureSection.second_card_description}</p>
                    <div className="link-btn">
                      <a>
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms" }}>
              <div className="inner-box">
                <div className="image">
                  <div className="icon">
                    <span class="fa-solid fa-headset"></span>
                  </div>
                  <img className="lazy-image owl-lazy" src={formatImagePath(featureSection.third_card_image)} alt="" />
                </div>
                <div className="content">
                  <h5>{featureSection.third_card_info_title}</h5>
                  <h4>{featureSection.third_card_title}</h4>
                </div>
                <div className="overlay">
                  <div className="content">
                    <h5>{featureSection.third_card_info_title}</h5>
                    <h4>{featureSection.third_card_title}</h4>
                  </div>
                  <div className="text" style={{ backgroundImage: `url(${formatImagePath(featureSection.card_background_image)})` }}>
                    <p>{featureSection.third_card_description}</p>
                    <div className="link-btn">
                      <a>
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-content text-center">
            <div className="text">{featureSection.description}</div>
            <h3>30 Minutes Free Consultation</h3>
            <div className="link-btn">
              <a className="theme-btn btn-style-two" href={featureSection.button_url}>
                <span className="btn-title">{featureSection.button_text}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionThree;
