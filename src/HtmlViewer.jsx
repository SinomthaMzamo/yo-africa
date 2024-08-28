import React from 'react';

const HtmlViewer = ({ filePath }) => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src={filePath}
                title="Embedded HTML"
                style={{ width: '100vw', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default HtmlViewer;
