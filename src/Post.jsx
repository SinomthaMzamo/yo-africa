import React from 'react';

const Post = ({ tag, publishedDate, title }) => (
    <article className="post">
        <div className="progress-bar">
            <div className="progress-bar__fill"></div>
        </div>
        <header className="post__header">
            <span className="post__tag">{tag}</span>
            <p className="post__published">{publishedDate}</p>
        </header>
        <h2 className="post__title">{title}</h2>
    </article>
);

export default Post;
