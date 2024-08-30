import React from 'react';

const MainPost = ({ imageSrc, altText, tag, title, link }) => (
    <article className="main-post main-post--active">
        <div className="main-post__image">
            <img src={imageSrc} alt={altText} />
        </div>
        <div className="main-post__content">
            <div className="main-post__tag-wrapper">
                <span className="main-post__tag">{tag}</span>
            </div>
            <h1 className="main-post__title">{title}</h1>
            <a className="main-post__link" href={link}>
                <span className="main-post__link-text">find out more</span>
                <svg
                    className="main-post__link-icon main-post__link-icon--arrow"
                    width="37"
                    height="12"
                    viewBox="0 0 37 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                        stroke="white"
                    />
                </svg>
            </a>
        </div>
    </article>
);

export default MainPost;
