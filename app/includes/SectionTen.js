import React, { useEffect, useState } from "react";
import axios from "axios";


function SectionTen() {


  return (
    <>
      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>
              Flexible Plans for <br /> Small to Fast-Growing Company
            </h2>
            <div className="text-decoration">
              <span className="left"></span>
              <span className="right"></span>
            </div>
          </div>
          <div className="text-center">
            <div className="pricing-btn">
              <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active">Monthly</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Annually</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-content">
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1200ms"
              style={{
                visibility: "visible",
                animationDuration: "1200ms",
                animationDelay: "200ms",
              }}
            >
              <div className="tab-pane fadeInUp animated show active">
                <h3>Switch to annual plan and get 25% offer.</h3>
                <div className="wrapper-box">
                  <div className="row m-0">
                    <div
                      className="col-lg-4 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Basic Pack</div>
                            <div className="price">
                              <span>$</span>24.00 <sub>/mo</sub>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h5>Most Recommended</h5>
                          <h4>
                            Power of choice is untrammelled and <br />
                            do what we like best.
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick"></i>4-5 Weeks from to
                              finish
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                Data sprint
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                Results revision
                              </span>
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>20 Days of
                              support
                            </li>
                          </ul>
                          <div className="link-btn">
                            <a className="theme-btn btn-style-two" >
                              <span className="btn-title">
                                Get Started a Free Trail
                              </span>
                            </a>
                          </div>
                          <div className="hint">
                            <span>*</span> No credit card required
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 pricing-block active animated fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Standard Pack</div>
                            <div className="price">
                              <span>$</span>45.00 <sub>/mo</sub>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h5>for Large Business</h5>
                          <h4>
                            Matters to principle of selection our <br />
                            pleasures to secure.
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick"></i>3-4 Weeks from to
                              finish
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Data sprint
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                Results revision
                              </span>
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>30 Days of
                              support
                            </li>
                          </ul>
                          <div className="link-btn">
                            <a className="theme-btn btn-style-one" >
                              <span className="btn-title">
                                Get Started a Free Trail
                              </span>
                            </a>
                          </div>
                          <div className="hint">
                            <span>*</span> No credit card required
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Advanced Pack</div>
                            <div className="price">
                              <span>$</span>60.00 <sub>/mo</sub>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h5>Most Recommended</h5>
                          <h4>
                            These cases are perfectly simple <br />
                            easy to distinguish.
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick"></i>2 Weeks from to
                              finish
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Data sprint
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Results revision
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>20 Days of
                              support
                            </li>
                          </ul>
                          <div className="link-btn">
                            <a className="theme-btn btn-style-two" >
                              <span className="btn-title">
                                Get Started a Free Trail
                              </span>
                            </a>
                          </div>
                          <div className="hint">
                            <span>*</span> No credit card required
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fadeInUp animated">
                <h3>Switch to annual plan and get 25% offer.</h3>
                <div className="wrapper-box">
                  <div className="row m-0">
                    <div
                      className="col-lg-4 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Basic Pack</div>
                            <div className="price">
                              <span>$</span>24.00 <sub>/mo</sub>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h5>Most Recommended</h5>
                          <h4>
                            Power of choice is untrammelled and <br />
                            do what we like best.
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick"></i>4-5 Weeks from to
                              finish
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                Data sprint
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                Results revision
                              </span>
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>20 Days of
                              support
                            </li>
                          </ul>
                          <div className="link-btn">
                            <a className="theme-btn btn-style-two" >
                              <span className="btn-title">
                                Get Started a Free Trail
                              </span>
                            </a>
                          </div>
                          <div className="hint">
                            <span>*</span> No credit card required
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 pricing-block active animated fadeInRight"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Standard Pack</div>
                            <div className="price">
                              <span>$</span>45.00 <sub>/mo</sub>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h5>for Large Business</h5>
                          <h4>
                            Matters to principle of selection our <br />
                            pleasures to secure.
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick"></i>3-4 Weeks from to
                              finish
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Data sprint
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Results revision
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>30 Days of
                              support
                            </li>
                          </ul>
                          <div className="link-btn">
                            <a className="theme-btn btn-style-one" >
                              <span className="btn-title">
                                Get Started a Free Trail
                              </span>
                            </a>
                          </div>
                          <div className="hint">
                            <span>*</span> No credit card required
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 pricing-block animated fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1200ms"
                    >
                      <div className="inner-box">
                        <div className="top-content">
                          <div className="row m-0 justify-content-between">
                            <div className="category">Advanced Pack</div>
                            <div className="price">
                              <span>$</span>60.00 <sub>/mo</sub>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h5>Most Recommended</h5>
                          <h4>
                            These cases are perfectly simple <br />
                            easy to distinguish.
                          </h4>
                          <ul>
                            <li>
                              <i className="flaticon-tick"></i>2 Weeks from to
                              finish
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Data sprint
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>Results revision
                            </li>
                            <li>
                              <i className="flaticon-tick"></i>20 Days of
                              support
                            </li>
                          </ul>
                          <div className="link-btn">
                            <a className="theme-btn btn-style-two" >
                              <span className="btn-title">
                                Get Started a Free Trail
                              </span>
                            </a>
                          </div>
                          <div className="hint">
                            <span>*</span> No credit card required
                          </div>
                        </div>
                      </div>
                    </div>
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

export default SectionTen;
