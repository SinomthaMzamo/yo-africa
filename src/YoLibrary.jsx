import React, { useState, useEffect, useRef } from 'react';

import NavBar from './NavBar'
// import Banner from './Banner'
import About from './About'
import Remedies from './Remedies'
import './YoLibrary.css'

const YoLibrary = () => {
	const featuresName = 'Browse';
	const featureName = 'library';
	const subtitle = 'ABOUT YO LIBRARY'
	const featureDescription = 'Yo Africa’s Library is your go-to resource for health knowledge and natural remedies. ' +
                           'Explore a wide range of medicinal plants and their uses in the Nursery, find effective ' +
                           'home remedies for common ailments, and stay informed with up-to-date health news. ' +
                           'The Library is designed to empower you with the knowledge to manage your health naturally and effectively.';



	const features = ["nursery", "remedies"];

	const ArtContents = () => {
	    return(<div style={{ backgroundColor: "#c1a187", height: "350px", width: "auto", borderRadius: "12px" }}></div>
	    );
	};

  // Use refs to track sections
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  /* Container Utility Class */
  const container = {
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
      {/*<div style={container}>
        <Banner/>
      </div>*/}
      
      <div 
        ref={aboutRef}
        style={{
          ...container,
          ...(aboutRef.current && aboutRef.current.style.opacity === '1' ? visibleContainerStyle : {}),
        }}>
          <About  featureName={featureName}
           subtitle={subtitle} 
           featureDescription={featureDescription} 
           art={ArtContents}>
          </About>
      </div>
      <div id="features" 
        ref={featuresRef}
        style={{
          ...container,
          ...(featuresRef.current && featuresRef.current.style.opacity === '1' ? visibleContainerStyle : {}),
        }}>
      <Remedies/>
      </div>

    </>
  );

};

export default	YoLibrary;