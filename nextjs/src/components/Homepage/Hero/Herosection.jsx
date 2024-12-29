"use client";
import React from "react";
import { Shift } from "ambient-cbg";
import Image from "next/image";

const Herosection = ({ heroSection }) => {
  return (
    <div>
      <section className="hero">
        {/* Wrap Shift in a constrained div */}
        <div className="shift-wrapper">
          <Shift className="shift-no-repeat" />
        </div>
        <div className="container hero-container">
          <div>
            <p className="hero-text">{heroSection?.heroText}</p>
            <h1 className="hero-title">
              Innovation through <br />
              Intelligent Solutions
            </h1>
          </div>
          <div className="hero-footer">
            <p className="hero-text">
              {heroSection?.heroFooter?.text} 
            </p>
            <div>
              {heroSection?.heroFooter?.logos.map((image, index) => (
                <img src={image} alt="hero-footer" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
