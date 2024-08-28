import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'
import Remedies from './Remedies'

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

  /* Container Utility Class */
  const container = {
            maxWidth: "1200px", /* This is the maximum width it can stretch */
            margin: "0 auto", /* This centers the container on the page */
            padding: "20px", /* Adds some space inside the container */
            backgroundColor: "#2d5b3e", /* Background color for the container */
            borderRadius: "10px", /* Rounded corners */
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", /* A little shadow for depth */
        }; 

	return (
    <>
      <NavBar feature={featuresName} features={features}></NavBar>
      <div style={container}>
        <Banner/>
      </div>
      
      <div style={container}><div id="about">
      <About  featureName={featureName} subtitle={subtitle} featureDescription={featureDescription} art={ArtContents}>
      </About></div></div>
      <div id="features" style={container}>
      <Remedies/></div>

    </>
  );

};

export default	YoLibrary;