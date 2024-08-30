import React, { useState, useEffect, useRef } from 'react';
import SymptomsCard from './SymptomsCard'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'

// Component to handle Botpress script injection
const BotpressWidget = () => {
    useEffect(() => {
        // Create a script element for Botpress
        const botpressScript = document.createElement('script');
        botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        botpressScript.defer = true;
        document.body.appendChild(botpressScript);

        // Create a script element for Botpress configuration
        const botpressConfigScript = document.createElement('script');
        botpressConfigScript.src = 'https://mediafiles.botpress.cloud/6c88796d-2393-4cad-a7c7-0e222b7d5885/webchat/config.js';
        botpressConfigScript.defer = true;
        document.body.appendChild(botpressConfigScript);

        // Clean up the script elements when the component unmounts
        return () => {
            document.body.removeChild(botpressScript);
            document.body.removeChild(botpressConfigScript);
        };
    }, []);

    return null; // This component does not render anything to the DOM
};

function YoTracker() {
  const featuresName = 'Quick Insights';
  const featureName = 'symptom tracker';
  const subtitle = 'ABOUT YO TRACKER'
  const featureDescription = 'Our Symptom Tracker provides valuable insights and recommendations ' +
                            'based on your symptoms. Use it to get quick health insights and ' +
                            'track your symptoms effectively.';


  const tracker = 'Symptom Tracker';
  const chatBot = 'ChatBot';

  const features = [tracker, chatBot];

  const ArtContents = () => {
    return(<div style={{ backgroundColor: "#c1a187", height: "350px", width: "auto", borderRadius: "12px" }}></div>
    );
  };

// Use refs to track sections
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
    

  /* Container Utility Class */
  const container = {
      maxWidth: '95vw',
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
      <Banner/>
        <div
            ref={aboutRef}
            style={{
                ...container,
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
                ...container,
                ...(featuresRef.current && featuresRef.current.style.opacity === '1' ? visibleContainerStyle : {}),
            }}
        >
            <SymptomsCard/>
            <BotpressWidget />
        </div>


    </>
  )
}

export default YoTracker
