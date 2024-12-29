import React from "react";

const Designedfor = ({ designedForYou }) => {
  return (
    <section className="section-div-common">
      <div className="scetion-left-side">Case Studies</div>
      <div className="container">
        <div className="section-title-all">
          <h2>
            Designed for you to get <br /> more simple
          </h2>
        </div>
        <img
          src={designedForYou?.imageSrc}
          alt="Designed for you to get more simple"
          className="Designed"
        />
      </div>
    </section>
  );
};

export default Designedfor;
