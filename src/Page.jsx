import PropTypes from 'prop-types';
import NavBar from './NavBar';

const Page = ({feature, features, mainContent:MainContent}) => {
    // nav bar
    // banner/header
    // about
    // feature gallery
    // news
    // footer
    return(
        <>
            <NavBar feature={feature} 
            features={features}></NavBar>
            <MainContent></MainContent>
            
        </>
    );
};



// Define propTypes
Page.propTypes = {
    feature: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    mainContent: PropTypes.elementType.isRequired
}

export default NavBar;