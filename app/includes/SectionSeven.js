import React, { useEffect, useState } from "react";
import axios from "axios";


function SectionSeven() {


  return (
    <>
    <section className="cases-section pb-0">
        <div
          className="sec-bg"
          style={{
            backgroundImage: 'url("images/background/bg-1.jpg")',
          }}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>
              Our Projects make Uniqueness <br />
              from Others
            </h2>
            <div className="text-decoration">
              <span className="left"></span>
              <span className="right"></span>
            </div>
          </div>
          <div className="row">
            {[
              "./images/gallery-1.jpg",
              "./images/gallery-2.jpg",
              "./images/gallery-3.jpg",
              "./images/gallery-4.jpg",
              "./images/gallery-5.jpg",
            ].map((imgSrc, index) => (
              <div className="col-lg-4 case-block-one" key={index}>
                <div className="inner-box">
                  <div className="image">
                    <img className="lazy-image owl-lazy" src={imgSrc} alt="" />
                  </div>
                  <div className="overlay">
                    <div className="title">
                      <span className="icon">
                        <img src="./images/icon-8.png" alt="" />
                      </span>
                      Precision
                    </div>
                    <div className="link-btn">
                      <a >
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className="content">
                      <h5>Financial</h5>
                      <h4>Capital Management</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="read-more-btn">
                  <a >
                    Check <br />
                    More Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionSeven;
