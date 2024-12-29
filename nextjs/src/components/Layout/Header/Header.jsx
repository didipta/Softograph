"use client";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          id="menu-toggle"
          onClick={handleMenuToggle}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{
              color: "#fff",
              fontSize: "1.5rem",
            }}
          />
        </button>

        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu`} id="nav-menu">
          <ul
            className={`nav-links ${menuActive ? "active" : ""}`}
            id="nav-links"
          >
            <li className="nav-item">
              <a href="#">Offerings</a>
              <ul className="dropdown">
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
                  <a href="#">Decisions made Easy</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Solutions</a>
            </li>
            <li className="nav-item">
              <a href="#">Partners</a>
            </li>
            <li className="nav-item">
              <a href="#">Insights</a>
            </li>
            <li className="nav-item">
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        {/* Call-to-Action Button */}
        <button className="contact-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Header;
