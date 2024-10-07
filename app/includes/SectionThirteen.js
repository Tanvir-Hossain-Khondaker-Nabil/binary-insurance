import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation } from 'swiper';
function SectionThirteen() {
  return (
    <section className="map-section">
      <div className="map-outer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
          height="570"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, width: "100%" }}
        ></iframe>
      </div>
      <div className="auto-container">
        <div className="contact-info">
          <Swiper
            slidesPerView={1} // Adjust as needed
            spaceBetween={30}
            pagination={{ clickable: true }} // Enable pagination if needed
            // Removed navigation prop to hide arrows
            className="theme_carousel" // Custom class for styling
          >
            {/* SwiperSlide for each location */}
            <SwiperSlide>
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-discussion"></span>
                  </div>
                  <h4>Turkey</h4>
                  <h5>Branches over 6 cities</h5>
                </div>
                <h3>01. Istanbul</h3>
                <ul>
                  <li>33/2 Korur Ap. Beyoglu, 34420</li>
                  <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
                  <li>
                    <a href="tel:+1800555440055.html">+1 800 555 44 00  55</a>
                  </li>
                  <li>
                    <a href="mailto:supportteam@Envolve.com.html">supportteam@Envolve.com</a>
                  </li>
                </ul>
                <a className="link-btn">Get Direction</a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-discussion"></span>
                  </div>
                  <h4>Turkey</h4>
                  <h5>Branches over 6 cities</h5>
                </div>
                <h3>01. Istanbul</h3>
                <ul>
                  <li>33/2 Korur Ap. Beyoglu, 34420</li>
                  <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
                  <li>
                    <a href="tel:+1800555440055.html">+1 800 555 44 00  55</a>
                  </li>
                  <li>
                    <a href="mailto:supportteam@Envolve.com.html">supportteam@Envolve.com</a>
                  </li>
                </ul>
                <a className="link-btn">Get Direction</a>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SectionThirteen;
