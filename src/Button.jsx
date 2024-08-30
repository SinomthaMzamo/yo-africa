import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({ text, idleColour, hoverColour, textColour, onClick}) => {
    
    // usestate tings
    const [isHovered, setHoverStatus] = useState(false);                                  // might need usestate for showing and hiding relevant check-boxes

    const [isClicked, showCheckBoxes] = useState(true);

    // update hover status based on relative mouse position
    const applyHoverStyling = () => {
        setHoverStatus(true);
    };

    const applyIdleStyling = () => {
        setHoverStatus(false);
    };

    const buttonStyle = {
        backgroundColor: isHovered ? hoverColour : idleColour,
        border: '2px solid ' + (isHovered ? hoverColour : idleColour),
        color: textColour,
        padding: '10px',
        cursor: 'pointer',
        borderRadius: '15px',
        transition: 'border-color, color 0.3s ease', /* Smooth transition for border color */
        boxShadow: '2px 2px 5px #2c2c2c' , /* Add a subtle shadow on focus */ 

    }

   
    return (
        <button
         className={styles.filterBtn}
         style={buttonStyle}
         onMouseEnter={applyHoverStyling}
         onMouseLeave={applyIdleStyling}
         onClick={onClick}         // Call the passed-in onClick handler
        >
         {text}
        </button>
      
    );
  };


// Define propTypes
Button.propTypes = {
    text: PropTypes.string.isRequired,
    textColour: PropTypes.string.isRequired,
    idleColour: PropTypes.string.isRequired,
    hoverColour: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };  


export default Button;