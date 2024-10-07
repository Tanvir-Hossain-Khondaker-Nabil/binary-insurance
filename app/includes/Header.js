import React, { useState } from "react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="main-header header-style-one fixed-header">
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner">
                        <div className="top-left">
                            <div className="text">
                                <span>Too Little!</span> Receiving $100 / Hr Consulting.
                                <a>Start Today</a>
                            </div>
                        </div>
                        <div className="top-right">
                            <ul className="contact-info">
                                <li>
                                    <i className="fa-regular fa-clock"></i>
                                    <span className="custom-color-white">
                                        Office Hrs: Today 9.00am to 6.00pm
                                    </span>
                                </li>
                                <li>
                                    <a href="tel:(251)2353256.html">
                                        <i className="fa-solid fa-phone-volume"></i>
                                        <span className="custom-color-white">
                                            +1 800 555 44 00
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="language">
                                <span className="fa-solid fa-globe"></span>
                                <form action="#" className="language-switcher">
                                    <select className="selectpicker">
                                        <option value="1">English</option>
                                        <option value="1">French</option>
                                        <option value="1">Spanish</option>
                                        <option value="1">Bengli</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-upper">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="logo-box">
                            <div className="logo">
                                <a>
                                    <img src="./images/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="nav-outer clearfix mt-3 mt-md-0">
                            <div className="mobile-nav-toggler d-block d-md-none" onClick={toggleMobileMenu}>
                                <img src="./images/icon-bar.png" alt="" />
                            </div>
                            <nav className={`main-menu navbar-expand-md navbar-light ${isMobileMenuOpen ? 'show' : ''}`}>
                                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="dropdown">
                                            <a>Home</a>
                                        </li>
                                        <li className="dropdown">
                                            <a>
                                                About Us <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a>Mission</a>
                                                </li>
                                                <li>
                                                    <a>Vision</a>
                                                </li>
                                                <li>
                                                    <a>Our Management</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a>
                                                Services <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a>VEHICLES</a>
                                                </li>
                                                <li>
                                                    <a>Health & Life</a>
                                                </li>
                                                <li>
                                                    <a>FOR HOUSE</a>
                                                </li>
                                                <li>
                                                    <a>TRAVEL & LEISURE</a>
                                                </li>
                                                <li>
                                                    <a>PETS</a>
                                                </li>
                                                <li>
                                                    <a>For Businesses</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a>Our Tips</a>
                                        </li>
                                        <li className="dropdown">
                                            <a>Get Price</a>
                                        </li>
                                        <li className="dropdown">
                                            <a>
                                                Insurances <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a>VEHICLES</a>
                                                </li>
                                                <li>
                                                    <a>Health & Life</a>
                                                </li>
                                                <li>
                                                    <a>FOR HOUSE</a>
                                                </li>
                                                <li>
                                                    <a>TRAVEL & LEISURE</a>
                                                </li>
                                                <li>
                                                    <a>PETS</a>
                                                </li>
                                                <li>
                                                    <a>For Businesses</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a>Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    );
}

export default Header;
