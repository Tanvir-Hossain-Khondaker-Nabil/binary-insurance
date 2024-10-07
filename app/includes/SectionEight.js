import React, { useEffect, useState } from "react";
import axios from "axios";

import Url from "@/app/includes/Url.js";

function SectionEight() {
  const [processData, setProcessData] = useState(null);

  useEffect(() => {
    const fetchProcessData = async () => {
      try {
        const response = await axios.get(`${Url}/api/process_section`); // Replace with your API endpoint
        setProcessData(response.data[0]); // Assuming the response is an array and you want the first object
      } catch (error) {
        console.error("Error fetching process data:", error);
      }
    };

    fetchProcessData();
  }, []);

  if (!processData) {
    return <div></div>; // Loading state
  }

  return (
    <section className="process-section">
      <div
        className="pattern"
        style={{
          backgroundImage: 'url("images/shape/pattern-5.png")',
        }}
      ></div>
      <div className="auto-container">
        <div className="sec-top row m-0 justify-content-md-between">
          <div className="sec-title">
            <h2>{processData.title}</h2>
            <div className="text-decoration">
              <span className="left"></span>
              <span className="right"></span>
            </div>
          </div>
          <div className="text">
            {processData.description.split("\r\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </div>
        </div>
        <div className="row">
          {[
            {
              count: "01.",
              icon: processData.first_container_image,
              title: processData.first_container_info_title,
              description: processData.first_container_title,
              details: processData.first_container_description,
            },
            {
              count: "02.",
              icon: processData.second_container_image,
              title: processData.second_container_info_title,
              description: processData.second_container_title,
              details: processData.second_container_description,
            },
            {
              count: "03.",
              icon: processData.third_container_image,
              title: processData.third_container_info_title,
              description: processData.third_container_title,
              details: processData.third_container_description,
            },
          ].map((process, index) => (
            <div className="col-lg-4 process-block-one" key={index}>
              <div className="inner-box">
                <h5>
                  <span className="count">{process.count}</span>
                  {process.title}
                </h5>
                <div className="icon">
                  <img src={`${Url}/${process.icon}`} alt={process.title} />
                </div>
                <h4>{process.description}</h4>
                <div className="text">
                  {process.details.split("\r\n").map((line, lineIndex) => (
                    <span key={lineIndex}>{line}<br /></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
