import React from "react";

function Footer() {
    return (
        <footer className="main-footer sp-two">
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        <div className="column col-lg-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="widget-content">
                                            <div className="footer-logo">
                                                <a href="/"><img src="./images/logo.png" alt="" className="img-fluid bg-white rounded" /></a>
                                            </div>
                                            <h3>What will <br />be the next step? </h3>
                                            <div className="link-btn">
                                                <a className="theme-btn custom-bg-color" href="#">
                                                    <i className="fa-brands fa-buromobelexperte"></i>Experts advice
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="column col-lg-9">
                            <div className="row">
                                <div className="col-md-4 d-flex justify-content-end">
                                    <div className="footer-widget links-widget">
                                        <h3 className="widget-title">Company</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="./html/about-1.html">About</a></li>
                                                <li><a href="./html/team-1.html">Meet Our Team</a></li>
                                                <li><a href="./html/blog-1.html">Blog</a></li>
                                                <li><a href="./html/services.html">Services</a></li>
                                                <li><a href="./html/contact-1.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <div className="footer-widget links-widget">
                                        <h3 className="widget-title">Essential</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="./html/career.html">Careers</a></li>
                                                <li><a href="#">Features</a></li>
                                                <li><a href="./html/portfolio-1.html">Projects</a></li>
                                                <li><a href="./html/testimonial-1.html">Testimonials</a></li>
                                                <li><a href="./html/pricing-1.html">Pricing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <div className="footer-widget links-widget">
                                        <h3 className="widget-title">Support</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="#">Live Chat</a></li>
                                                <li><a href="#">FAQ’s</a></li>
                                                <li><a href="#">Locations</a></li>
                                                <li><a href="#">Policies</a></li>
                                                <li><a href="#">Resources</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auto-container">
                <div className="footer-bottom">
                    <div className="row m-0 justify-content-between">
                        <ul className="menu">
                            <li><a href="#">Privacy Policy </a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                        </ul>
                        <div className="scroll-to-top-two scroll-to-target" data-target="html">
                            <i className="fa-solid fa-house"></i>Get back to home
                        </div>
                    </div>
                    <ul className="social-links clearfix">
                        <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                        <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                        <li><a href="#"><span className="fab fa-skype"></span></a></li>
                    </ul>
                    <div className="copyright">© 2024 Binary Insuran Consultancy, All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;