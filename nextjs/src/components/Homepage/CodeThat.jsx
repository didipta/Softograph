import React from "react";

const CodeThat = ({ codeThatKnowsYou }) => {
  return (
    <section className="section-div-common image-bg">
      <div className="scetion-left-side">Case Studies</div>
      <div className="container Code">
        <div className="slider-vertical">
          <div className="section-title-all">
            <h2>
              Code That <br />
              Knows You
            </h2>
            <p>Intelligent Code, Seamless Integration</p>
            <p>
              Experience the synergy of bespoke software solutions and seamless
              integration. Intelligent code crafted to adapt to unique needs,
              ensuring efficiency and innovation at every turn.
            </p>
          </div>
          <div className="section-title-all">
            <h2>
              Code That <br />
              Knows You
            </h2>
            <p>Intelligent Code, Seamless Integration</p>
            <p>
              Experience the synergy of bespoke software solutions and seamless
              integration. Intelligent code crafted to adapt to unique needs,
              ensuring efficiency and innovation at every turn.
            </p>
          </div>

          <div className="section-title-all">
            <h2>
              Code That <br />
              Knows You
            </h2>
            <p>Intelligent Code, Seamless Integration</p>
            <p>
              Experience the synergy of bespoke software solutions and seamless
              integration. Intelligent code crafted to adapt to unique needs,
              ensuring efficiency and innovation at every turn.
            </p>
          </div>

          <div className="section-title-all">
            <h2>
              Code That <br />
              Knows You
            </h2>
            <p>Intelligent Code, Seamless Integration</p>
            <p>
              Experience the synergy of bespoke software solutions and seamless
              integration. Intelligent code crafted to adapt to unique needs,
              ensuring efficiency and innovation at every turn.
            </p>
          </div>
        </div>
        <div>
          <img
            src={codeThatKnowsYou?.images[0]}
            alt="Code That Knows You"
            className="Code"
          />
        </div>
      </div>
    </section>
  );
};

export default CodeThat;
