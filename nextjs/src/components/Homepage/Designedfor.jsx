import React from "react";

const Designedfor = ({ designedForYou }) => {
  return (
    <section class="section-div-common">
      <div class="scetion-left-side">Case Studies</div>
      <div class="container">
        <div class="section-title-all">
          <h2>
            Designed for you to get <br /> more simple
          </h2>
        </div>
        <img
          src={designedForYou?.imageSrc}
          alt="Designed for you to get more simple"
          class="Designed"
        />
      </div>
    </section>
  );
};

export default Designedfor;
