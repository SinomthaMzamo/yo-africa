import { useState } from "react";
import PropTypes from 'prop-types';
import styles from './About.module.css'

const About = ({featureName, subtitle, featureDescription, art:ArtComponent}) => {
    return(
        <>
            <div className={styles.main}>
            <div className={styles.aboutUsContainer}>
                <div className={styles.nameContainerBig}>
                    <p className={styles.boldface}>yo</p>
                    <p className={styles.featureName}>{featureName}</p>
                </div>
                <div className={styles.sectionN}>
                    <div className={styles.heading} style={{border: "none", padding: "0"}}>
                        <h2 className={styles.boldfaceSubtitle}>{subtitle}</h2>
                    </div>
                    <div className={styles.aboutMessage}>
                        <p className={styles.featureDescription}>{featureDescription}</p>
                        <ArtComponent></ArtComponent>
                    </div>
                </div>
            </div></div>
        </>
        // title
        // description
        // art
    );
};


// Define propTypes
About.propTypes = {
    featureName: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    featureDescription: PropTypes.string.isRequired,
    art: PropTypes.elementType.isRequired,
  };

export default About;