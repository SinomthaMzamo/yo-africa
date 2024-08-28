import React from 'react';
import FeatureCard from './FeatureCard';
import Sidebar from './Sidebar';
import styles from "./Board.module.css";

import bgIm from "./assets/background.jpg"
import remedyImg from "./assets/mortar.png"
import mapImg from "./assets/map.png"
import gardenImg from "./assets/gardening.png"

const Board = () => {
  const imageSrc = "./assets/background.jpg";
  const featureName = "Nursery";
  const description = "Cultivate your green thumb and discover the power of nature!";
  const path = "/library";

  return (
    <div className={styles["dashboard-layout"]}>
      <div id={styles["dashboard-container"]}>
        <FeatureCard
          title={featureName}
          imageSrc={gardenImg}
          path={path}
          description={description}
        />
        <FeatureCard
          title="Remedies"
          imageSrc={remedyImg}
          path={path}
          description={description}
        />
        <FeatureCard
          title="Locator"
          imageSrc={mapImg}
          path={path}
          description={description}
        />
      </div>
    </div>
  );
};

export default Board;
