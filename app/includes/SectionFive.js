import React, { useEffect, useState } from "react";
import axios from "axios";
import Url from "@/app/includes/Url.js"; // Adjust the import based on your project structure

function SectionFive() {
  const [sectionData, setSectionData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get(`${Url}/api/funfact_section`); // Replace with your actual API endpoint
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
    primary_icon_image: primaryIcon,
    primary_count,
    primary_description,
    secondary_title,
    secondary_icon_image: secondaryIcon,
    secondary_count,
    secondary_description,
    third_title,
    third_icon_image: thirdIcon,
    third_count,
    third_description,
  } = sectionData;

  const formatImagePath = (path) => `${Url}/${path.replace(/\\/g, '/')}`;

  return (
    <section className="funfacts-section">
      <div
        className="pattern"
        style={{ backgroundImage: "url(images/shape/pattern-2.png)" }}
      ></div>
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row">
            <div className="column counter-column col-lg-4">
              <div
                className="inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                }}
              >
                <div className="content">
                  <div className="icon-box">
                    <div className="icon">
                      <img src={formatImagePath(primaryIcon)} alt={primary_title} />
                    </div>
                    <div className="counter-title">
                      {primary_title}
                    </div>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text">
                      <span>
                        <span>{primary_count}</span>
                      </span>
                    </span>
                  </div>
                  <div className="text">
                    {primary_description}
                  </div>
                </div>
              </div>
            </div>
            <div className="column counter-column col-lg-4">
              <div
                className="inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                }}
              >
                <div className="content">
                  <div className="icon-box">
                    <div className="icon">
                      <img src={formatImagePath(secondaryIcon)} alt={secondary_title} />
                    </div>
                    <div className="counter-title">
                      {secondary_title}
                    </div>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text">
                      <span>
                        <span>{secondary_count}</span>
                      </span>
                    </span>
                  </div>
                  <div className="text">
                    {secondary_description}
                  </div>
                </div>
              </div>
            </div>
            <div className="column counter-column col-lg-4">
              <div
                className="inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                }}
              >
                <div className="content">
                  <div className="icon-box">
                    <div className="icon">
                      <img src={formatImagePath(thirdIcon)} alt={third_title} />
                    </div>
                    <div className="counter-title">
                      {third_title}
                    </div>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text">
                      <span>
                        <span>{third_count}</span>
                      </span>
                    </span>
                  </div>
                  <div className="text">
                    {third_description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
