import React from "react";

const Blueprintto = ({ blueprintToSuccess }) => {
  return (
    <section class="section-div-common">
      <div class="scetion-left-side">Case Studies</div>
      <div class="container">
        <div class="section-title-all">
          <h2>
            Blueprint to <br />
            Success
          </h2>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider">
          {blueprintToSuccess?.slides.map((blueprint, index) => (
            <div class="slide-3">
              <div class="slide-3-contain">
                <img src={blueprint?.imgSrc} alt="Slide 1" />
                <span>{blueprint?.spanText}</span>
              </div>
              <div class=" slide-3-contain-title">
                <h4>{blueprint?.title}</h4>
                <p>
                 {blueprint?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprintto;
