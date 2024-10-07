import React, { useEffect, useState } from "react";
import axios from "axios";


function SectionFifteen() {


  return (
    <>
    <section className="feature-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 feature-block-two">
              <div className="shape-box">
                <div className="inner-box">
                  <div className="icon">
                    <img src="./images/icon-9.png" alt="" />
                  </div>
                  <h4>Become a Partner of Envolve</h4>
                  <div className="text">
                    To take a trivial example, which of us undertakes <br />
                    laborious physical exercise.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 feature-block-two">
              <div className="shape-box">
                <div className="inner-box">
                  <div className="icon">
                    <img src="./images/icon-10.png" alt="" />
                  </div>
                  <h4>Career Opportunities in Envolve</h4>
                  <div className="text">
                    Who chooses to enjoy a pleasure that has no one <br />
                    annoying consequences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFifteen;
