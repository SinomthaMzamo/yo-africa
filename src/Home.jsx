import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import About from './About';
import styles from './Home.module.css';
import feature from './assets/yoafrica feauture card.jpg';

const Home = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains(styles.card));

    cards.forEach((card) => stack.appendChild(card));

    const moveCard = () => {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains(styles.card)) {
        lastCard.classList.add(styles.swap);

        setTimeout(() => {
          lastCard.classList.remove(styles.swap);
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    };

    let autoplayInterval = setInterval(moveCard, 4000);

    stack.addEventListener('click', (e) => {
      const card = e.target.closest(`.${styles.card}`);
      if (card && card === stack.lastElementChild) {
        card.classList.add(styles.swap);

        setTimeout(() => {
          card.classList.remove(styles.swap);
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    });

    // Cleanup function to remove the interval and event listener
    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener('click', moveCard);
    };
  }, []);

  const featuresName = 'Services';
  const featureName = 'africa';
  const subtitle = 'ABOUT YO AFRICA';
  const featureDescription =
    'Yo Africa offers a variety of features to enhance your health management. ' +
    'The Locator helps you find nearby health institutions, the Symptom Tracker provides ' +
    'quick insights based on your symptoms, the News section keeps you updated with the latest ' +
    'health information, and the Login feature leads you to your personalized dashboard for ' +
    'managing your health details effectively.';

  const features = ['library', 'locator', 'symptom tracker'];

  const ArtContents = () => {
    return (
      <div
        style={{
          backgroundColor: '#c1a187',
          height: '350px',
          width: 'auto',
          border: '2px solid wheat',
          borderRadius: '15px',
        }}
      ></div>
    );
  };

  const container = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#2d5b3e',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <NavBar feature={featuresName} features={features}></NavBar>
      <Banner />
      <div id="about" style={container}>
        <About
          featureName={featureName}
          subtitle={subtitle}
          featureDescription={featureDescription}
          art={ArtContents}
        />
      </div>
      <div id="features" style={container}>
        <main>
          <div className={styles.content}>
            <h3 className={styles.logo}>
              <span className={styles.yo}>yo</span>
              <span className={styles.africa}>africa</span>
            </h3>
            <h1>WHO ARE WE</h1>
            <p>
              Yo-Africa is a comprehensive community app offering essential health information, resources, and self-care tools.
            </p>
          </div>
          <div ref={stackRef} className={styles.stack}>
            <div className={styles.card}>
              <img src={feature} alt="Card Image 1" />
            </div>
            <div className={styles.card}>
              <img src={feature} alt="Card Image 2" />
            </div>
            <div className={styles.card}>
              <img src={feature} alt="Card Image 3" />
            </div>
            <div className={styles.card}>
              <img src={feature} alt="Card Image 4" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
