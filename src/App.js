import React, { useState } from "react";
import icon from "../src/assets/Icon.png";
import icon2 from "../src/assets/Icon2.png";
import Illustration from "../src/assets/Illustration.png";
import Image6 from "../src/assets/Company logo (6).png";
import Image1 from "../src/assets/Company logo (1).png";
import Image2 from "../src/assets/Company logo (2).png";
import Image3 from "../src/assets/Company logo (3).png";
import Image4 from "../src/assets/Company logo (4).png";
import Image5 from "../src/assets/Company logo (5).png";
import services from "../src/assets/servicesHeading.png";
import illustration1 from "../src/assets/Illustration1.png";
import illustration2 from "../src/assets/Illustration2.png";
import illustration3 from "../src/assets/Illustration3.png";
import illustration4 from "../src/assets/Illustration4.png";
import illustration5 from "../src/assets/Illustration5.png";
import illustration6 from "../src/assets/Illustration6.png";
import frame from "../src/assets/Frame 19.png";
import Slider from "react-slick";
import contactimg from "../src/assets/contactimg.png";

import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={icon} alt="Logo" />
            <span className="navbar-title">Positivus</span>
          </div>
          <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <li>About Us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <button className="navbar-button">Request a Quote</button>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
        <header className="header-section">
          <div className="text-section">
            <h1>
              Navigating the <br /> digital landscape <br /> for success
            </h1>
            <p>
              Our digital marketing agency helps businesses <br /> grow and
              succeed online through a range of <br /> services including SEO,
              PPC, social media marketing, <br /> and content creation.
            </p>
            <button className="consultation-button">Book a consultation</button>
          </div>
          <div className="image-section">
            <img src={Illustration} alt="Digital marketing" />
          </div>
        </header>
        {/* ++++++++++++++++++++++++++++++company logo+++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <section className="image-grid">
          <div className="image-grid-section">
            <img src={Image6} alt="Image 6" />
            <img src={Image1} alt="Image 1" />
            <img src={Image2} alt="Image 2" />
            <img src={Image3} alt="Image 3" />
            <img src={Image4} alt="Image 4" />
            <img src={Image5} alt="Image 5" />
          </div>
        </section>
        <section className="text-image-row">
          <div className="image-container">
            <img src={services} alt="Featured Image" />
          </div>
          <div className="text-container">
            <p>
              At our digital marketing agency, we offer a range of services to{" "}
              <br />
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </section>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <section className="services-row">
          <div className="service-box1">
            <div className="service-content">
              <div className="service-text1">
                <h2>
                  <span className="highlight">Search Engine Optimization</span>
                </h2>
                <p className="learn-more-text">
                  <span className="arrow">➤</span> Learn More
                </p>
              </div>
              <div className="service-image">
                <img src={illustration1} alt="SEO" />
              </div>
            </div>
          </div>

          <div className="service-box2">
            <div className="service-content">
              <div className="service-text2">
                <h2>
                  <span className="highlight">
                    Pay-Per-Click <br />
                    Advertising
                  </span>
                </h2>
                <p className="learn-more-text">
                  <span className="arrow">➤</span> Learn More
                </p>
              </div>
              <div className="service-image">
                <img src={illustration2} alt="PPC" />
              </div>
            </div>
          </div>
        </section>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <section className="text-image-row">
          <div className="service-box3">
            <div className="service-content">
              <div className="service-text2">
                <h2>
                  <span className="highlight">
                    Social Media <br />
                    Marketing
                  </span>
                </h2>
                <p className="learn-more-text">
                  <span className="arrow">➤</span> Learn More
                </p>
              </div>
              <div className="service-image">
                <img src={illustration3} alt="PPC" />
              </div>
            </div>
          </div>
          <div className="service-box4">
            <div className="service-content">
              <div className="service-text2">
                <h2>
                  <span className="highlight">
                    Email <br />
                    Marketing
                  </span>
                </h2>
                <p className="learn-more-text">
                  <span className="arrow">➤</span> Learn More
                </p>
              </div>
              <div className="service-image">
                <img src={illustration4} alt="PPC" />
              </div>
            </div>
          </div>
        </section>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <section className="text-image-row">
          <div className="service-box5">
            <div className="service-content">
              <div className="service-text2">
                <h2>
                  <span className="highlight">
                    Content <br />
                    Creation
                  </span>
                </h2>
                <p className="learn-more-text">
                  <span className="arrow">➤</span> Learn More
                </p>
              </div>
              <div className="service-image">
                <img src={illustration5} alt="PPC" />
              </div>
            </div>
          </div>
          <div className="service-box6">
            <div className="service-content">
              <div className="service-text2">
                <h2>
                  <span className="highlight">
                    Analytics <br /> Tracking
                  </span>
                </h2>
                <p className="learn-more-text">
                  <span className="arrow">➤</span> Learn More
                </p>
              </div>
              <div className="service-image">
                <img src={illustration6} alt="PPC" />
              </div>
            </div>
          </div>
        </section>
        {/* +++++++++++++++++++++++ contact section +++++++++++++++++++++++++++++++++ */}
        <section className="contact-section">
          <div className="contact-content">
            <h3>Let's make things happen</h3>
            <p>
              Contact us today to learn more about how our digital <br />{" "}
              marketing services can help your business grow and <br /> succeed
              online.
            </p>
            <button className="proposal-button">Get your free proposal</button>
          </div>
          <div className="contact-image">
            <img src={frame} alt="Contact Us" />
          </div>
        </section>
        {/* ++++++++++++++++++++++++++++++ black container ++++++++++++++++++++++++++ */}
        <div className="black-container">
          {/* Section 1 */}
          <div className="section">
            <p className="text">
              or a local restaurant, we <br />
              implemented a targeted PPC <br /> campaign that resulted in a 50%{" "}
              <br />
              increase in website traffic <br /> and a 25% increase in sales
            </p>
            <div className="learn-more">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="vertical-line"></div>
          {/* Section 2 */}
          <div className="section">
            <p className="text">
              For a B2B software company, we <br />
              developed an SEO strategy that <br />
              resulted in a first page ranking <br />
              for key keywords and a 200% <br /> increase in organic traffic
            </p>
            <div className="learn-more">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="vertical-line"></div>
          {/* Section 3 */}
          <div className="section3">
            <p className="text">
              For a national retail chain, we <br />
              created a social media <br /> marketing campaign that <br />
              increased followers by 25% and <br />
              generated a 20% increase in <br /> online sales.
            </p>
            <div className="learn-more">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="working-process-container">
          <div className="working-process-title">Our Working Process</div>
          <p className="working-process-description">
            Step-by-Step Guide to Achieving <br /> Your Business Goals
          </p>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div>
          {/* Section 1 */}
          <div
            className="consultation-container"
            style={{ backgroundColor: "rgba(185, 255, 102, 1)" }}
          >
            <h4 className="consultation-heading">
              <span style={{ fontSize: "40px" }}>01</span> Consultation
            </h4>
            <div className="consultation-icon">-</div>
            <hr className="consultation-divider" />
            <p className="consultation-description">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>

          {/* Section 2 */}
          <div
            className="consultation-container"
            style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
          >
            <h4 className="consultation-heading">
              <span style={{ fontSize: "40px" }}>02</span> Research and Strategy
              Development
            </h4>
            <div className="consultation-icon">+</div>
          </div>

          {/* Section 3 */}
          <div
            className="consultation-container"
            style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
          >
            <h4 className="consultation-heading">
              <span style={{ fontSize: "40px" }}>03</span> Implementation
            </h4>
            <div className="consultation-icon">+</div>
          </div>

          {/* Section 4 */}
          <div
            className="consultation-container"
            style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
          >
            <h4 className="consultation-heading">
              <span style={{ fontSize: "40px" }}>04</span> Monitoring and
              Optimization
            </h4>
            <div className="consultation-icon">+</div>
          </div>

          {/* Section 5 */}
          <div
            className="consultation-container"
            style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
          >
            <h4 className="consultation-heading">
              <span style={{ fontSize: "40px" }}>05</span> Reporting and
              Communication
            </h4>
            <div className="consultation-icon">+</div>
          </div>
          {/* Section 6 */}
          <div
            className="consultation-container"
            style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
          >
            <h4 className="consultation-heading">
              <span style={{ fontSize: "40px" }}>06</span> Continual Improvement
            </h4>
            <div className="consultation-icon">+</div>
          </div>
        </div>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="row">
          <div className="text-box">
            <h2 className="section-title">Testimonials</h2>
          </div>
          <p className="section-description">
            Hear from Our Satisfied Clients: Read Our Testimonials <br /> to
            Learn More about Our Digital Marketing Services
          </p>
        </div>

        <div className="testimonial-slider-container">
          <Slider {...testimonialSettings}>
            <div className="testimonial-slide">
              <p className="testimonial-text">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
            <div className="testimonial-slide">
              <p className="testimonial-text">
                "Positivus transformed our online marketing strategy. They
                delivered exceptional results, helping us achieve our business
                goals more efficiently."
              </p>
            </div>
          </Slider>
        </div>

        {/* ++++++++++++++++++++++++++ contact section++++++++++++++++++++++++++++++++++ */}
        <div className="row">
          <div className="text-box">
            <h2 className="section-title">ContactUs</h2>
          </div>
          <p className="section-description">
            Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
          </p>
        </div>
        <div className="form-container">
          <div className="form-box">
            <div className="form-section">
              <div className="radio-buttons">
                <label className="radio-option">
                  <input type="radio" name="contact-option" />
                  Say Hi
                </label>
                <label className="radio-option">
                  <input type="radio" name="contact-option" />
                  Get a Quote
                </label>
              </div>

              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" className="form-input" />

              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" className="form-input" />

              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" className="form-textarea"></textarea>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>

            <div className="form-image">
              <img src={contactimg} alt="Placeholder" />
            </div>
          </div>
        </div>
        {/* +++++++++++++++++++ footer +++++++++++++++++++++++ */}
        <div className="footerr">
      <div className="navbar2">
        <div className="logo-container">
          <img src={icon2} alt="" />
          <span className="logo">Positivus</span>
        </div>
        <div className="navbar-links">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </div>
        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>

   
      <div className="contact-section2">
        <div className="contact-info">
          <h5 className="contact-heading">Contact Us</h5>
          <p>Email: info@positivus.com</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 1234 Business Blvd, City</p>
        </div>

    
        <div className="subscribe-section">
          <button className="email-btn">Email Us</button>
          <button className="subscribe-btn">Subscribe to News</button>
        </div>
      </div>

      
      <div className="footer">
        
        <div className="footer-info">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default App;
