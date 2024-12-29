import React from "react";

const Insights = ({ insightsAndPerspectives }) => {
  return (
    <section className="section-div-common">
      <div className="scetion-left-side">Case Studies</div>
      <div className="container">
        <div className="section-title-all">
          <h2>
            Insights & <br />
            Perspectives
          </h2>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider">
          {insightsAndPerspectives?.slides.map((insight, index) => (
            <div className="slide-2">
              <div>
                <img src={insight?.imgSrc} alt="Slide 1" />
              </div>
              <div className=" slide-2-contain">
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
