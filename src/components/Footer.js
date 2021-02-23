import React from "react";
import "./Footer.css";

function Footer() {
  return (
    // <!-- Footer -->
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__content">
          <div className="footer__item">
            <i className="fas fa-envelope  my-2"></i>
            <p>Email</p>
            <small>worshipcenter@gmail.com</small>
          </div>
          <div className="footer__item">
            <i className="fas fa-phone-alt  my-2"></i>
            <p>Call</p>
            <small>+233 248 578 600 / +233 244 901 508</small>
          </div>

          <div className="footer__item">
            <i className="fas fa-map-marker-alt  my-2"></i>
            <p>Find Us</p>
            <small>prampram water works, Accra Ghana</small>
          </div>
        </div>
      <div className="copyright">
        <div className="social-links">
          <h3>Let's Connect!</h3>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div>
          <small>&copy; 2020 Chosen Generation Worship Center</small>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
