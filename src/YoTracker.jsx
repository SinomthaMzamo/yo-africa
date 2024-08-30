import { useState } from 'react'
import SymptomsCard from './SymptomsCard'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'


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
    

  /* Container Utility Class */
  const container = {
            minWidth: "96vw", /* This is the maximum width it can stretch */
            margin: "0 auto", /* This centers the container on the page */
            padding: "20px", /* Adds some space inside the container */
            backgroundColor: "#2d5b3e", /* Background color for the container */
            borderRadius: "10px", /* Rounded corners */
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", /* A little shadow for depth */
  };



  return (
    <>
      <NavBar feature={featuresName} features={features}></NavBar>
      <Banner/>
      <div id="about" style={container}>
      <About  featureName={featureName} subtitle={subtitle} featureDescription={featureDescription} art={SymptomsCard}>
      </About></div>
      <div id="features" style={container}>
      <SymptomsCard /></div>
      
      


    </>
  )
}

export default YoTracker
