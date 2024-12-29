import React from "react";

const Blueprintto = ({ blueprintToSuccess }) => {
  return (
    <section className="section-div-common">
      <div className="scetion-left-side">Case Studies</div>
      <div className="container">
        <div className="section-title-all">
          <h2>
            Blueprint to <br />
            Success
          </h2>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider">
          {blueprintToSuccess?.slides.map((blueprint, index) => (
            <div className="slide-3">
              <div className="slide-3-contain">
                <img src={blueprint?.imgSrc} alt="Slide 1" />
                <span>{blueprint?.spanText}</span>
              </div>
              <div className=" slide-3-contain-title">
                <h4>{blueprint?.title}</h4>
                <p>{blueprint?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprintto;
