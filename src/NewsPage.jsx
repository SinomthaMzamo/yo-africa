import React, { useEffect, useState } from 'react';
import MainPost from './MainPost';
import Post from './Post';
import './news.scss';
import './css/news.css';

const NewsPage = () => {
    const [postIndex, setPostIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const postsData = [
        {
            imageSrc: "../src/assets/news-article1-monkeypox.jpg",
            altText: "MPOX OUTBREAK: REMAINING UNDER CONTROL DESPITE SUSPECTED CASES",
            tag: "News",
            title: "MPOX OUTBREAK: REMAINING UNDER CONTROL DESPITE SUSPECTED CASES",
            link: "https://www.nicd.ac.za/mpox-outbreak-remaining-under-control-despite-suspected-cases/",
            publishedDate: "18 July , 2024"
        },
        {
            imageSrc: "../src/assets/KZN-Health-MEC-Nomagugu-Simelane-said-health-workers-should-not-resign-because-of-the-two-pot-system-Picture-Supplied-Department-of-Health.webp",
            altText: "KZN Health MEC concerned about spike in nurse resignations",
            tag: "News",
            title: "KZN Health MEC concerned about spike in nurse resignations",
            link: "https://www.iol.co.za/dailynews/news/kzn-health-mec-concerned-about-spike-in-nurse-resignations-ae9ba4bc-cf55-4d5d-8be6-23a04161677a",
            publishedDate: "18 July, 2024"
        },
        {
            imageSrc: "../src/assets/These-three-diet-tips-can-turn-back-your-biological-clock-by-twenty-years-Picture-Pexels.webp",
            altText: "Experts share 3 diet tips that will take 20 years off your age",
            tag: "News",
            title: "Experts share 3 diet tips that will take 20 years off your age",
            link: "https://www.iol.co.za/lifestyle/health/diet/experts-share-3-diet-tips-that-will-take-20-years-off-your-age-a73a49ee-2022-475c-b5aa-7658ba93a919",
            publishedDate: "16 July 2024"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setPostIndex(prevIndex => (prevIndex + 1) % postsData.length);
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [postsData.length]);

    const currentMainPost = postsData[postIndex];
    const currentPostData = postsData[postIndex];

    return (
        <div className="carousel">
            <div className="progress-bar progress-bar--primary hide-on-desktop">
                <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
            </div>

            <header className="main-post-wrapper">
                <div className="slides">
                    {postsData.map((post, index) => (
                        <MainPost
                            key={index}
                            imageSrc={post.imageSrc}
                            altText={post.altText}
                            tag={post.tag}
                            title={post.title}
                            link={post.link}
                            isActive={index === postIndex}
                        />
                    ))}
                </div>
            </header>

            <div className="posts-wrapper hide-on-mobile">
                {postsData.map((post, index) => (
                    <Post
                        key={index}
                        tag={post.tag}
                        publishedDate={post.publishedDate}
                        title={post.title}
                        isActive={index === postIndex}
                        progress={index === postIndex ? progress : 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
