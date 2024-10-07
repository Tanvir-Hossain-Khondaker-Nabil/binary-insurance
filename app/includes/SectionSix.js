import React, { useEffect, useState } from "react";
import axios from "axios";
import Url from "@/app/includes/Url.js"; // Adjust the import based on your project structure

function SectionSix() {
  const [sectionData, setSectionData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get(`${Url}/api/why_choose_us_section`); // Replace with your actual API endpoint
        setSectionData(response.data[0]); // Assuming you want the first object
      } catch (error) {
        console.error("Error fetching section data:", error);
        setError(true);
      }
    };

    fetchSectionData();
  }, []);

  if (error) return <div>Error fetching data. Please try again later.</div>;
  if (!sectionData) return <div></div>;

  const {
    title,
    form_title,
    primary_list_title,
    primary_list_description,
    secondary_list_title,
    secondary_list_description,
    third_list_title,
    third_list_description,
  } = sectionData;

  return (
    <section className="why-choose-us-section">
      <div
        className="pattern"
        style={{
          backgroundImage: 'url("images/shape/pattern-3.png")',
        }}
      ></div>
      <div className="side-image">
        <img src="./images/image-1.png" alt="" />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="sec-title light">
              <h2>{title}</h2>
              <div className="text-decoration">
                <span className="left"></span>
                <span className="right"></span>
              </div>
            </div>
            <ul className="features-list">
              <li className="single-feature-item">
                <h5>{primary_list_title}</h5>
                <span className="text">{primary_list_description}</span>
              </li>
              <li className="single-feature-item">
                <h5>{secondary_list_title}</h5>
                <span className="text">{secondary_list_description}</span>
              </li>
              <li className="single-feature-item">
                <h5>{third_list_title}</h5>
                <span className="text">{third_list_description}</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="consult-form">
              <form method="post" action="sendemail.php" className="contact-form">
                <h2>{form_title}</h2>
                <div className="row clearfix">
                  <div className="col-md-6 form-group">
                    <input
                      placeholder="Your Name"
                      required
                      type="text"
                      name="username"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      placeholder="Email Address"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      placeholder="Phone"
                      required
                      type="text"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <select className="selectpicker" name="subject">
                      <option value="*">Audit Assurance</option>
                      <option value=".category-1">Business Approach</option>
                      <option value=".category-2">Trades Stock Market</option>
                      <option value=".category-3">Strategy Planning</option>
                      <option value=".category-4">Software Research</option>
                      <option value=".category-5">Support Maintenance</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <button
                      className="theme-btn btn-style-two"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="btn-title">Send request</span>
                    </button>
                  </div>
                  <div className="col-md-6 form-group">
                    <button
                      className="theme-btn btn-style-three"
                      type="submit"
                      name="submit-form"
                    >
                      <i className="far fa-calendar"></i>For flexible schedule
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
