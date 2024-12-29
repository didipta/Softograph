import React from "react";

import Herosection from "./Hero/Herosection";
import ImpactDriven from "./ImpactDriven";
import Blueprintto from "./Blueprintto";
import CodeThat from "./CodeThat";
import Designedfor from "./Designedfor";
import Insights from "./Insights";
import PurposeBuilt from "./PurposeBuilt";

const Homepage = ({ homedata }) => {
  console.log(homedata);
  return (
    <div>
      <Herosection heroSection={homedata.heroSection} />
      <section className="container-section">
        <section className="title-section">
          <div className="container">
            <p className="dot"></p>
            <p className="section-title">{homedata.sectionOne?.title}</p>
            <h6 className="section-subtitle">
              {homedata.sectionOne?.subtitle}
            </h6>
          </div>
        </section>
        <ImpactDriven
          impactDrivenNarratives={homedata?.impactDrivenNarratives}
        />
        <Blueprintto blueprintToSuccess={homedata?.blueprintToSuccess} />
        <CodeThat codeThatKnowsYou={homedata?.codeThatKnowsYou} />
        <Designedfor designedForYou={homedata?.designedForYou} />
        <Insights insightsAndPerspectives={homedata?.insightsAndPerspectives} />
        <PurposeBuilt
          purposeBuiltDigitalSolutions={homedata?.purposeBuiltDigitalSolutions}
        />
      </section>
    </div>
  );
};

export default Homepage;
