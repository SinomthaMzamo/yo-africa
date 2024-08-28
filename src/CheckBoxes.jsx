import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBoxes = ({titles}) => {

    const checkBoxesStyle = {
        display: 'flex',
        justifyContent: 'start',
        gap: '2em',
        margin: '2em',
        color: '#121212',
    }

    return (
    <>
        <div style={checkBoxesStyle}>
            {titles.map((title) => (
                <label style ={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "500",
                    color: "seashell",
                }} key={title}>
                   <input type="checkbox" value={title}/>
                   {title} 
                </label>
            ))}
        </div>
        
    </>
    );
        
};

CheckBoxes.propTypes = {
    titles: PropTypes.array.isRequired
};

export default CheckBoxes;
