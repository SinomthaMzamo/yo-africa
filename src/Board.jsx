import React from 'react';
import { useState } from 'react';
import FeatureCard from './FeatureCard';
import styles from "./Board.module.css";
import UpdateProfile from './UpdateProfile';
import SymptomsCard from './SymptomsCard';

import remedyImg from "./assets/mortar.png";
import mapImg from "./assets/map.png";
import gardenImg from "./assets/gardening.png";
import DRemedies from './DRemedies';

const Board = ({ view }) => {
  const [showRem, setShowRem] = useState(false);

  const hideRem = (showRem) =>{
    setShowRem(!showRem);
  }

  switch (view) {
    case 'Profile':
      return (
        <div className={styles["edit-profile-layout"]}>
          <UpdateProfile />
        </div> 
      );
    case 'landing':
      return (
        <div className={styles["dashboard-layout"]}>
          <div id={styles["dashboard-container"]}>
            <FeatureCard
              title="Nursery"
              imageSrc={gardenImg}
              path="/library"
              description="Cultivate your green thumb and discover the power of nature!"
            />
            <FeatureCard
              title="Remedies"
              imageSrc={remedyImg}
              path="/library"
              description="Explore natural remedies for common ailments."
            />
            <FeatureCard
              title="Locator"
              imageSrc={mapImg}
              path="/library"
              description="Find health facilities near you."
            />
          </div>
        </div>
      );
    case 'Symptom Tracker':
      return(
        <>
        <SymptomsCard/>
        </>
      );
    default:
      return (
        <div className={styles["dashboard-layout"]}>
          <div id={styles["dashboard-container"]}>
            <FeatureCard
              title="Nursery"
              imageSrc={gardenImg}
              path="/library"
              description="Cultivate your green thumb and discover the power of nature!"
            />
            <FeatureCard
              title="Remedies"
              imageSrc={remedyImg}
              path="/library"
              description="Explore natural remedies for common ailments."
            />
            <FeatureCard
              title="Locator"
              imageSrc={mapImg}
              path="/locator"
              description="Find health facilities near you."
            />
          </div>
        </div>
      );
  }
};

export default Board;
