import React, { useEffect, useState } from "react";
import axios from "axios";
import Url from "@/app/includes/Url.js";

function SectionFourteen() {
  const [consultingData, setConsultingData] = useState(null);

  useEffect(() => {
    const fetchConsultingData = async () => {
      try {
        const response = await axios.get(`${Url}/api/cta_section`); // Replace with your API endpoint
        setConsultingData(response.data[0]); // Assuming the response is an array and you want the first object
      } catch (error) {
        console.error("Error fetching consulting data:", error);
      }
    };

    fetchConsultingData();
  }, []);

  if (!consultingData) {
    return <div></div>; // Loading state
  }

  return (
    <section className="cta-section pb-0">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-5 image-column">
            <div className="image">
              <img src="./images/image-2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7 content-column">
            <div className="sec-title text-center">
              <h2>{consultingData.title}</h2>
              <div className="text">
                {consultingData.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
              <div className="text-decoration">
                <span className="left"></span>
                <span className="right"></span>
              </div>
            </div>
            <div className="image">
              <img src="./images/mockup-1.png" alt="" />
            </div>
            <div className="bottom-content text-center">
              <div className="link-btn">
                <a className="theme-btn btn-style-two" href={consultingData.first_button_url}>
                  <span className="btn-title">
                    <i className="flaticon-playstore"></i>{consultingData.first_button_text}
                  </span>
                </a>
                <a className="theme-btn btn-style-one" href={consultingData.second_button_url}>
                  <span className="btn-title">
                    <i className="flaticon-app"></i>{consultingData.second_button_text}
                  </span>
                </a>
              </div>
              <div className="hint">
                {consultingData.hint}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFourteen;
