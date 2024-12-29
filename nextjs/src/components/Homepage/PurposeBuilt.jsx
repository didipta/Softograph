import {
  faArrowRight,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PurposeBuilt = ({ purposeBuiltDigitalSolutions }) => {
  return (
    <section
      className="section-div-common"
      style={{
        paddingBottom: "80px",
      }}
    >
      <div className="scetion-left-side">Case Studies</div>
      <div className="container">
        <div className="section-title-all">
          <h2>
            Purpose-Built <br />
            Digital Solutions
          </h2>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider-one">
          {purposeBuiltDigitalSolutions?.slides.map((solution, index) => (
            <div>
              <div className="slider-one-slide">
                <div>
                  <img src={solution?.imgSrc} alt="Slide 1" />
                </div>
                <div className=" slide-one-contain">
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
