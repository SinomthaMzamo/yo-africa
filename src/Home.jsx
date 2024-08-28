import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'

const Home = () => {
	const featuresName = 'Services';
	const featureName = 'africa';
	const subtitle = 'ABOUT YO AFRICA'
	const featureDescription = 'Yo Africa offers a variety of features to enhance your health management. ' +
                            'The Locator helps you find nearby health institutions, the Symptom Tracker provides ' +
                            'quick insights based on your symptoms, the News section keeps you updated with the latest ' +
                            'health information, and the Login feature leads you to your personalized dashboard for ' +
                            'managing your health details effectively.';



	const features = ["library", "locator", "symptom tracker"];

	const ArtContents = () => {
	    return(<div style={{ backgroundColor: "#c1a187", height: "350px", width: "auto" , border: "2px solid wheat", borderRadius: "15px"}}></div>
	    );
	};

	/* Container Utility Class */
	const container = {
	        maxWidth: "1200px", /* This is the maximum width it can stretch */
	        margin: "0 auto", /* This centers the container on the page */
	        padding: "20px", /* Adds some space inside the container */
	        backgroundColor: "#2d5b3e", /* Background color for the container */
	        borderRadius: "10px", /* Rounded corners */
	        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", /* A little shadow for depth */
	};
	

	return(
	<>
      <NavBar feature={featuresName} features={features}></NavBar>
      <Banner/>
      <div id="about" style={container}>
      <About  featureName={featureName} subtitle={subtitle} featureDescription={featureDescription} art={ArtContents}>
      </About></div>
      <div id="features" style={container}>
      <ArtContents />
      <ArtContents />
      <ArtContents /></div>
    </>
	);
};



export default Home;