import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation } from 'swiper';

function SectionTwo() {


  return (
    <>
      <section className="clients-section">
        <div
          className="pattern"
          style={{ backgroundImage: 'url(images/shape/pattern-1.png)' }}
        ></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-9">
              <div className="swiper theme_carousel owl-theme">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  onSlideChange={(swiper) => console.log('Slide changed to: ', swiper.activeIndex)}
                >
                  <SwiperSlide className="slide-item" data-swiper-slide-index="5">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-2.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="6">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-3.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="7">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-4.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="0">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-1.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="1">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-2.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="2">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-3.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="3">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-4.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>

                  <SwiperSlide className="slide-item" data-swiper-slide-index="4">
                    <figure className="image-box">
                      <a href="#">
                        <img src="./images/client-1.png" alt="" />
                      </a>
                    </figure>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="link-btn text-right">
                <a className="theme-btn btn-style-one" href="#">
                  <span className="btn-title">Join With Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTwo;
