import React, { useEffect, useState } from "react";
import axios from "axios";


function SectionNine() {


  return (
    <>
      <section className="testimonial-section">
        <div className="auto-container">
          <div className="testimonial-outer">
            <div className="testimonial-carousel">
              <div className="row m-0">
                <div className="col-xl-6 p-0">
                  <div className="swiper swiper-container swiper-initialized swiper-horizontal swiper-free-mode testimonial-thumbs swiper-backface-hidden swiper-thumbs">
                    <div
                      className="swiper-wrapper"
                      style={{
                        transform: "translate3d(-1800px, 0px, 0px)",
                        transitionDuration: "0ms",
                        transitionDelay: "0ms",
                      }}
                    >
                      <div
                        className="swiper-slide swiper-slide-next"
                        data-swiper-slide-index="2"
                        style={{ width: "600px" }}
                      >
                        <div className="author-thumb">
                          <img src="./images/image-6.jpg" alt="" />
                        </div>
                        <div className="logo">
                          <img src="./images/client-5.png" alt="" />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        data-swiper-slide-index="3"
                        style={{ width: "600px" }}
                      >
                        <div className="author-thumb">
                          <img src="./images/image-7.jpg" alt="" />
                        </div>
                        <div className="logo">
                          <img src="./images/client-6.png" alt="" />
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-prev"
                        data-swiper-slide-index="0"
                        style={{ width: "600px" }}
                      >
                        <div className="author-thumb">
                          <img src="./images/image-6.jpg" alt="" />
                        </div>
                        <div className="logo">
                          <img src="./images/client-5.png" alt="" />
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-active"
                        data-swiper-slide-index="1"
                        style={{ width: "600px" }}
                      >
                        <div className="author-thumb">
                          <img src="./images/image-7.jpg" alt="" />
                        </div>
                        <div className="logo">
                          <img src="./images/client-6.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 p-0">
                  <div
                    className="swiper-container testimonial-content wow fadeInUp"
                    data-wow-delay="300ms"
                    style={{
                      backgroundImage:
                        'url("images/background/bg-2.jpg")',
                      visibility: "visible",
                      animationDelay: "300ms",
                    }}
                  >
                    <div className="swiper swiper-wrapper swiper-initialized swiper-horizontal swiper-backface-hidden">
                      <div
                        className="swiper-wrapper"
                        style={{
                          transform: "translate3d(-2910px, 0px, 0px)",
                          transitionDuration: "0ms",
                          transitionDelay: "0ms",
                        }}
                      >
                        <div
                          className="swiper-slide swiper-slide-next"
                          data-swiper-slide-index="2"
                          style={{ width: "970px" }}
                        >
                          <div className="testimonial-block">
                            <div className="inner-box">
                              <div className="icon">
                                <span className="flaticon-blog"></span>
                              </div>
                              <h4>
                                Best Service Ever, We <br />
                                Highly Recommend!
                              </h4>
                              <div className="text">
                                Envolve’s analytics Team have done an <br />
                                excellent job presenting the analysis and <br />
                                insights. We are confident that they have <br />
                                helped move our business. Congrats for <br />
                                their future projects.
                              </div>
                              <div className="rating">
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                              </div>
                              <div className="author-title">
                                Boris Elbert,
                                <span className="designation">
                                  Developer Blue Soft.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide"
                          data-swiper-slide-index="3"
                          style={{ width: "970px" }}
                        >
                          <div className="testimonial-block">
                            <div className="inner-box">
                              <div className="icon">
                                <span className="flaticon-blog"></span>
                              </div>
                              <h4>
                                Best Service Ever, We <br />
                                Highly Recommend!
                              </h4>
                              <div className="text">
                                Envolve’s analytics Team have done an <br />
                                excellent job presenting the analysis and <br />
                                insights. We are confident that they have <br />
                                helped move our business. Congrats for <br />
                                their future projects.
                              </div>
                              <div className="rating">
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                              </div>
                              <div className="author-title">
                                Boris Elbert,
                                <span className="designation">
                                  Developer Blue Soft.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev"
                          data-swiper-slide-index="0"
                          style={{ width: "970px" }}
                        >
                          <div className="testimonial-block">
                            <div className="inner-box">
                              <div className="icon">
                                <span className="flaticon-blog"></span>
                              </div>
                              <h4>
                                Best Service Ever, We <br />
                                Highly Recommend!
                              </h4>
                              <div className="text">
                                Envolve’s analytics Team have done an <br />
                                excellent job presenting the analysis and <br />
                                insights. We are confident that they have <br />
                                helped move our business. Congrats for <br />
                                their future projects.
                              </div>
                              <div className="rating">
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                              </div>
                              <div className="author-title">
                                Boris Elbert,
                                <span className="designation">
                                  Developer Blue Soft.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-active"
                          data-swiper-slide-index="1"
                          style={{ width: "970px" }}
                        >
                          <div className="testimonial-block">
                            <div className="inner-box">
                              <div className="icon">
                                <span className="flaticon-blog"></span>
                              </div>
                              <h4>
                                Best Service Ever, We <br />
                                Highly Recommend!
                              </h4>
                              <div className="text">
                                Envolve’s analytics Team have done an <br />
                                excellent job presenting the analysis and <br />
                                insights. We are confident that they have <br />
                                helped move our business. Congrats for <br />
                                their future projects.
                              </div>
                              <div className="rating">
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                                <span className="flaticon-star"></span>
                              </div>
                              <div className="author-title">
                                Boris Elbert,
                                <span className="designation">
                                  Developer Blue Soft.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-nav-button">
                      <div className="swiper-button-next">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="swiper-button-prev">
                        <i className="fa-solid fa-chevron-right"></i>
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

export default SectionNine;
