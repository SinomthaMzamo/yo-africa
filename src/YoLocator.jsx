import React, { useState, useEffect, useRef } from 'react';
import styles from './YoLocator.module.css';
import Button from './Button';
import NavBar from './NavBar';
import Banner from './Banner';
import About from './About';

function YoLocator() {
  const featuresName = 'Find';
  const featureName = 'locator';
  const subtitle = 'ABOUT YO LOCATOR';
  const featureDescription = 'Gives you access to a comprehensive database of institutions and specialists best suited to your needs and preferences. This feature connects you to the help you desire near you.';
  
  const institutions = 'Institutions';
  const specialists = 'Specialists';
  const features = [institutions, specialists];
  
  const [displayedCategory, setDisplayedCategory] = useState(null);

  const handleButtonClick = (category) => {
    console.log('Button clicked:', category);
    setDisplayedCategory(category);
  };

  const ArtContents = () => {
    return <div style={{ backgroundColor: '#c1a187', height: '350px', width: 'auto' }}></div>;
  };
  
  // Use refs to track sections
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  // Define the base style for the container
  const baseContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#2d5b3e',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    opacity: 0,
    transform: 'translateY(50px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  };

  // Define the visible style that will be added when the section comes into view
  const visibleContainerStyle = {
    opacity: 1,
    transform: 'translateY(0)',
  };

  useEffect(() => {
    const handleScroll = () => {
      const revealSection = (ref) => {
        if (!ref.current) return;
        
        const sectionTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
          ref.current.style.opacity = 1;
          ref.current.style.transform = 'translateY(0)';
        }
      };

      revealSection(aboutRef);
      revealSection(featuresRef);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check for sections already in view
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar feature={featuresName} features={features}></NavBar>
      <Banner />
      <div
        ref={aboutRef}
        style={{
          ...baseContainerStyle,
          ...(aboutRef.current && aboutRef.current.style.opacity === '1' ? visibleContainerStyle : {}),
        }}
      >
        <About
          featureName={featureName}
          subtitle={subtitle}
          featureDescription={featureDescription}
          art={ArtContents}
        />
      </div>
      <div
        ref={featuresRef}
        style={{
          ...baseContainerStyle,
          ...(featuresRef.current && featuresRef.current.style.opacity === '1' ? visibleContainerStyle : {}),
        }}
      >
        <div className={styles.searchButtonsAndBar}>
          <div className={styles.filterButtons}>
            <Button
              text={institutions}
              idleColour='#ffffff'
              hoverColour='#e3e3e3'
              textColour='#303030'
              onClick={() => handleButtonClick(institutions)}
            ></Button>
            <Button
              text={specialists}
              idleColour='#2c2c2c'
              hoverColour='#1e1e1e'
              textColour='#f5f5f5'
              onClick={() => handleButtonClick(specialists)}
            ></Button>
          </div>
          <input type="search" className={styles.locatorSearchBar} placeholder='Search Google Maps' />
        </div>
        {displayedCategory === institutions && (
          <div className={styles.map} id={styles['institutions-map']}>
            <iframe
              src='https://my.atlist.com/map/fd023123-a763-495a-8fab-407edf79ff0b/?share=true'
              allow='geolocation "self" https://my.atlist.com'
              width='100%'
              height='600px'
              loading='lazy'
              frameBorder='0'
              scrolling='no'
              allowFullScreen
              id='atlist-embed-institutions'
            ></iframe>
          </div>
        )}
        {displayedCategory === specialists && (
          <div className={styles.map} id={styles['specialists-map']}>
            <iframe
              src='https://my.atlist.com/map/4af4ae8b-405c-4640-8a23-8372db61e9a7/?share=true'
              allow='geolocation "self" https://my.atlist.com'
              width='100%'
              height='600px'
              loading='lazy'
              frameBorder='0'
              scrolling='no'
              allowFullScreen
              id='atlist-embed-specialists'
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default YoLocator;
