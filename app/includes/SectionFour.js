import React, { useEffect, useState } from "react";
import axios from "axios";
import Url from "@/app/includes/Url.js"; // Adjust the import based on your project structure

function SectionFour() {
  const [sectionData, setSectionData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get(`${Url}/api/about_section`); // Replace with your actual API endpoint
        setSectionData(response.data[0]); // Assuming you want the first object
      } catch (error) {
        console.error("Error fetching section data:", error);
        setError(true);
      }
    };

    fetchSectionData();
  }, []);

  if (error) return <div>Error fetching data. Please try again later.</div>;
  if (!sectionData) return <div>Loading...</div>;

  const {
    primary_title,
    secondary_title,
    primary_image,
    secondary_image,
    description,
    primary_list_title,
    primary_list_description,
    secondary_list_title,
    secondary_list_description,
    signature_image,
    signature_title,
    signature_position,
  } = sectionData;

  const formatImagePath = (path) => `${Url}/${path.replace(/\\/g, '/')}`;

  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-block">
              <div
                className="image-one wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                }}
              >
                <div className="image-box">
                  <img
                    className="lazy-image owl-lazy"
                    src={formatImagePath(primary_image)}
                    alt={primary_title}
                  />
                </div>
              </div>
              <div
                className="image-two wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "300ms",
                }}
              >
                <div className="image-box">
                  <img
                    className="lazy-image owl-lazy"
                    src={formatImagePath(secondary_image)}
                    alt={secondary_title}
                  />
                </div>
              </div>
              <div className="logo">
                <img src="./images/icon-12.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sec-title">
              <h2>
                {primary_title} <br /> {secondary_title}
              </h2>
              <div className="text-decoration">
                <span className="left"></span>
                <span className="right"></span>
              </div>
              <div className="text">
                {description}
              </div>
            </div>
            <div className="text-block">
              <h5>{primary_list_title}</h5>
              <h4>{primary_list_description}</h4>
            </div>
            <div className="text-block">
              <h5>{secondary_list_title}</h5>
              <h4>{secondary_list_description}</h4>
            </div>
            <div className="author-box">
              <div className="signature">
                <img src={formatImagePath(signature_image)} alt={`Signature of ${signature_title}`} />
              </div>
              <div className="author-info">
                <h4>{signature_title}</h4>
                <h5>{signature_position}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
