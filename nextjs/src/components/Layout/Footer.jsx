import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="images/Logo.png" alt="Softograph Logo" />
          </div>
          <p>Address: House # 52 Road-04, Dhaka 1230</p>
          <p>Phone: +88 01911-082908</p>
          <p>Copyright © 2024 Softograph</p>
        </div>
        <div className="footer-column">
          <h4>Offerings</h4>
          <ul>
            <li>
              <a href="#">Code that Knows You</a>
            </li>
            <li>
              <a href="#">Unlocking Frontier Tech</a>
            </li>
            <li>
              <a href="#">Strategies that do Wonders</a>
            </li>
            <li>
              <a href="#">Decisions Made Easy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li>
              <a href="#">Link Item Name</a>
            </li>
            <li>
              <a href="#">Link Item Name</a>
            </li>
            <li>
              <a href="#">Link Item Name</a>
            </li>
            <li>
              <a href="#">Link Item Name</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
