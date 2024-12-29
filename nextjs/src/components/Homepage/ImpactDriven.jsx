import React from "react";

const ImpactDriven = ({ impactDrivenNarratives }) => {
  return (
    <section className="section-div-common">
      <div className="scetion-left-side">Case Studies</div>
      <div className="container">
        <div className="section-title-all">
          <h2>
            Impact-Driven <br /> Narratives
          </h2>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider">
          {impactDrivenNarratives?.slides.map((narrative, index) => (
            <div class="slide">
              <img src={narrative?.imgSrc} alt="Slide 1" />
              <div class="caption">{narrative?.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactDriven;
