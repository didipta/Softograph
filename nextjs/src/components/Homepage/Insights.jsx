import React from "react";

const Insights = ({ insightsAndPerspectives }) => {
  return (
    <section class="section-div-common">
      <div class="scetion-left-side">Case Studies</div>
      <div class="container">
        <div class="section-title-all">
          <h2>
            Insights & <br />
            Perspectives
          </h2>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider">
          {insightsAndPerspectives?.slides.map((insight, index) => (
            <div class="slide-2">
              <div>
                <img src={insight?.imgSrc} alt="Slide 1" />
              </div>
              <div class=" slide-2-contain">
                <span>{insight?.date}</span>
                <p>{insight?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
