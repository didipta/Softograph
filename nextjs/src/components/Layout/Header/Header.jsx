import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <nav className={style.navbar}>
      <div className={`${style.navbarContainer} container`}>
        <button className={style.menuToggle} id="menu-toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={style.logo}>
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>

        <div className={style.navMenu} id="nav-menu">
          <ul className={style.navLinks} id="nav-links">
            <li>
              <a href="#">Offerings</a>
              <ul className={style.dropdown}>
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
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <button className={style.contactBtn}>Get Started</button>
      </div>
    </nav>
  );
};

export default Header;
