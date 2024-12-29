"use client";
import React from "react";
import { Shift } from "ambient-cbg";

const Herosection = () => {
  return (
    <div>
      <section className="hero">
        {/* Wrap Shift in a constrained div */}
        <div className="shift-wrapper">
          <Shift className="shift-no-repeat" />
        </div>
        <div className="container hero-container">
          <div>
            <p className="hero-text">We Are Softograph</p>
            <h1 className="hero-title">
              Innovation through <br />
              Intelligent Solutions
            </h1>
          </div>
          <div className="hero-footer">
            <p className="hero-text">
              Trusted by data teams at world's leading companies
            </p>
            <div>
              <img src="/images/logo-1.png" alt="hero-footer" />
              <img src="/images/logo-2.png" alt="hero-footer" />
              <img src="/images/logo-3.png" alt="hero-footer" />
              <img src="/images/Rectangle 340.png" alt="hero-footer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
