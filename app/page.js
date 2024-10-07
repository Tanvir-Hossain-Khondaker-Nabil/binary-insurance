"use client";

import { useEffect, useState } from "react";
import SectionOne from "@/app/includes/SectionOne.js";
import SectionTwo from "@/app/includes/SectionTwo.js";
import SectionThree from "@/app/includes/SectionThree.js";
import SectionFour from "@/app/includes/SectionFour.js";
import SectionFive from "@/app/includes/SectionFive.js";
import SectionSix from "@/app/includes/SectionSix.js";
import SectionSeven from "@/app/includes/SectionSeven.js";
import SectionEight from "@/app/includes/SectionEight.js";
import SectionFourteen from "@/app/includes/SectionFourteen.js";
import SectionFifteen from "@/app/includes/SectionFifteen.js";

export default function Home() {
  const [showSectionTwo, setShowSectionTwo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSectionTwo(true);
    }, 2000); // 2 seconds delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section
        className="hidden-sidebar close-sidebar"
        style={{ right: "-480px", transform: "matrix(1, 0, 0, 1, 0, 0)" }}
      >
        <div className="wrapper-box">
          <div className="hidden-sidebar-close">
            <span className="flaticon-remove"></span>
          </div>
          <div className="logo">
            <a >
              <img src="./images/logo.png" alt="" />
            </a>
          </div>
          <div className="content">
            <div className="about-widget-two sidebar-widget">
              <h3>
                Smart Business Consultancy <br />
                in New Milton
              </h3>
              <div className="text">
                We denounce with righteous indignation and dislike men who we
                are to beguiled demoralized by the charms of pleasures that
                moment, so we blinded desires, that they indignations.
              </div>
            </div>
            <div className="news-widget sidebar-widget">
              <div className="widget-title">News Updates</div>
              <div className="post-wrapper">
                <div className="image">
                  <a href="blog-details.html">
                    <img src="./images/news-1.jpg" alt="" />
                  </a>
                </div>
                <div className="category">Business Plans</div>
                <h4>
                  <a href="blog-details.html">
                    How to Manage Business’s <br />
                    Online Reputation
                  </a>
                </h4>
              </div>
              <div className="post-wrapper">
                <div className="image">
                  <a href="blog-details.html">
                    <img src="./images/news-2.jpg" alt="" />
                  </a>
                </div>
                <div className="category">Marketing Strategy</div>
                <h4>
                  <a href="blog-details.html">
                    Inside our Daily Routines as a <br />
                    Good Consultant
                  </a>
                </h4>
              </div>
            </div>
            <div className="newsletter-widget">
              <div className="widget-title">Newsletter Subscription</div>
              <form action="#">
                <input placeholder="Enter Email Address" type="email" />
                <button className="theme-btn btn-style-one">
                  <span className="btn-title">Subscribe Us</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div id="search-popup" className="search-popup">
        <div className="close-search theme-btn">
          <span className="flaticon-remove"></span>
        </div>
        <div className="popup-inner">
          <div className="overlay-layer"></div>
          <div className="search-form">
            <form method="post" action="">
              <div className="form-group">
                <fieldset>
                  <input
                    className="form-control"
                    placeholder="Search Here"
                    required
                    type="search"
                    name="search-input"
                  />
                  <input className="theme-btn" type="submit" />
                </fieldset>
              </div>
            </form>
            <br />
            <h3>Recent Search Keywords</h3>
            <ul className="recent-searches">
              <li><a>Finance</a></li>
              <li><a>Idea</a></li>
              <li><a>Service</a></li>
              <li><a>Growth</a></li>
              <li><a>Plan</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <SectionOne />
      {showSectionTwo && <SectionTwo />}
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionFourteen />
      <SectionFifteen />
    </div>
  );
}
