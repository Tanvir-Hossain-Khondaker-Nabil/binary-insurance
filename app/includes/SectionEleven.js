import React, { useEffect, useState } from "react";
import axios from "axios";


function SectionEleven() {


  return (
    <>
    <section className="news-section">
        <div className="wrapper-box">
          <div
            className="left-column"
            style={{
              backgroundImage: 'url(images/background/bg-3.jpg)',
            }}
          >
            <div className="outer-box">
              <div className="sec-title light">
                <h2>
                  Don’t miss anything <br /> keep update
                </h2>
                <div className="text-decoration">
                  <span className="left"></span>
                  <span className="right"></span>
                </div>
              </div>
              <h4>Be the first to receive</h4>
              <ul>
                <li>
                  <i className="fa fa-star"></i>Consultants advice
                  suggestions
                </li>
                <li>
                  <i className="fa fa-star"></i>Exclusive offers  discounts
                </li>
              </ul>
              <form action="#">
                <div className="form-group">
                  <i className="flaticon-mail"></i>
                  <input placeholder="Enter your email..." type="email" />
                </div>
                <button type="submit" className="theme-btn btn-style-two">
                  <span className="btn-title">Subscribe Us</span>
                </button>
              </form>
            </div>
          </div>
          <div className="right-column">
            <div className="outer-box">
              <div className="outer-container">
                <div className="row m-0 justify-content-between align-items-end">
                  <div className="sec-title">
                    <h2>
                      Don’t miss anything <br /> keep update
                    </h2>
                    <div className="text-decoration">
                      <span className="left"></span>
                      <span className="right"></span>
                    </div>
                  </div>
                  <div className="swiper-nav-button">
                    <div className="swiper-button-prev h1p">
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="swiper-button-next h1n">
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-carousel-wrapper">
                <div className="swiper swiper-container swiper-initialized swiper-horizontal news-carousel swiper-backface-hidden">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(-886.5px, 0px, 0px)",
                      transitionDelay: "0ms",
                    }}
                  >
                    <div
                      className="swiper-slide"
                      style={{ width: "295.5px" }}
                      data-swiper-slide-index="4"
                    >
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div className="row m-0 justify-content-between">
                            <div className="date">
                              <strong>21</strong>January <br />
                              2020
                            </div>
                            <div className="author">
                              <div className="title">Raana Irave</div>
                              <img src="./images/author-thumb-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="category">Projects</div>
                          <h4>
                            <a href="blog-details.html">
                              Is Your Business Ready For <br />
                              Integration?
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a href="blog-details.html">
                              Continue reading <i>&gt;&gt;</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "295.5px" }}
                      data-swiper-slide-index="5"
                    >
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div className="row m-0 justify-content-between">
                            <div className="date">
                              <strong>08</strong>January <br />
                              2020
                            </div>
                            <div className="author">
                              <div className="title">Raana Irave</div>
                              <img src="./images/author-thumb-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="category">Marketing</div>
                          <h4>
                            <a href="blog-details.html">
                              That Should You Include In <br />
                              Your Marketing Plan
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a href="blog-details.html">
                              Continue reading <i>&gt;&gt;</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-prev"
                      style={{ width: "295.5px" }}
                      data-swiper-slide-index="0"
                    >
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div className="row m-0 justify-content-between">
                            <div className="date">
                              <strong>14</strong>February <br />
                              2020
                            </div>
                            <div className="author">
                              <div className="title">Brendan Duke</div>
                              <img src="./images/author-thumb-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="category">Business</div>
                          <h4>
                            <a href="blog-details.html">
                              How to Manage Business’s <br />
                              Online Reputation
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a href="blog-details.html">
                              Continue reading <i>&gt;&gt;</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{ width: "295.5px" }}
                      data-swiper-slide-index="1"
                    >
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div className="row m-0 justify-content-between">
                            <div className="date">
                              <strong>21</strong>January <br />
                              2020
                            </div>
                            <div className="author">
                              <div className="title">Raana Irave</div>
                              <img src="./images/author-thumb-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="category">Projects</div>
                          <h4>
                            <a href="blog-details.html">
                              Is Your Business Ready For <br />
                              Integration?
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a href="blog-details.html">
                              Continue reading <i>&gt;&gt;</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "295.5px" }}
                      data-swiper-slide-index="2"
                    >
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div className="row m-0 justify-content-between">
                            <div className="date">
                              <strong>08</strong>January <br />
                              2020
                            </div>
                            <div className="author">
                              <div className="title">Raana Irave</div>
                              <img src="./images/author-thumb-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="category">Marketing</div>
                          <h4>
                            <a href="blog-details.html">
                              That Should You Include In <br />
                              Your Marketing Plan
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a href="blog-details.html">
                              Continue reading <i>&gt;&gt;</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "295.5px" }}
                      data-swiper-slide-index="3"
                    >
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div className="row m-0 justify-content-between">
                            <div className="date">
                              <strong>14</strong>February <br />
                              2020
                            </div>
                            <div className="author">
                              <div className="title">Brendan Duke</div>
                              <img src="./images/author-thumb-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="category">Business</div>
                          <h4>
                            <a href="blog-details.html">
                              How to Manage Business’s <br />
                              Online Reputation
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a href="blog-details.html">
                              Continue reading <i>&gt;&gt;</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionEleven;
