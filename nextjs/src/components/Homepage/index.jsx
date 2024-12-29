import React from "react";

import Herosection from "./Hero/Herosection";

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <section className="container-section">
        <section className="title-section">
          <div className="container">
            <p className="dot"></p>
            <p className="section-title">
              Unlock your business's potential with Softograph's tailored
              technology solutions and expert advisory services, designed to
              drive innovation and ensure success.
            </p>
            <h6 className="section-subtitle">
              We put information and knowledge into action.
            </h6>
          </div>
        </section>
        <section className="section-div-common">
          <div className="scetion-left-side">Case Studies</div>
          <div className="container">
            <div className="section-title-all">
              <h2>
                Impact-Driven <br /> Narratives
              </h2>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Homepage;
