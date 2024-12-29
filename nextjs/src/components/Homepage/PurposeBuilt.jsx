import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PurposeBuilt = ({ purposeBuiltDigitalSolutions }) => {
  return (
    <section
      class="section-div-common"
      style={{
        paddingBottom: "80px",
      }}
    >
      <div class="scetion-left-side">Case Studies</div>
      <div class="container">
        <div class="section-title-all">
          <h2>
            Purpose-Built <br />
            Digital Solutions
          </h2>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider-one">
          {purposeBuiltDigitalSolutions?.slides.map((solution, index) => (
            <div>
              <div class="slider-one-slide">
                <div>
                  <img src={solution?.imgSrc} alt="Slide 1" />
                </div>
                <div class=" slide-one-contain">
                  <span>{solution?.spanText}</span>
                  <p>{solution?.description}</p>
                  <button>
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeBuilt;
