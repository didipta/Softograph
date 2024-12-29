import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container container">
        <div class="footer-column">
          <div class="footer-logo">
            <img src="images/logo.png" alt="Softograph Logo" />
          </div>
          <p>Address: House # 52 Road-04, Dhaka 1230</p>
          <p>Phone: +88 01911-082908</p>
          <p>Copyright © 2024 Softograph</p>
        </div>
        <div class="footer-column">
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
        <div class="footer-column">
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
        <div class="footer-column">
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
        <div class="footer-column">
          <h4>Follow Us</h4>
          <ul class="social-links">
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
