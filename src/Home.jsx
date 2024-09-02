import React from 'react';
import { useEffect, useRef } from 'react';
import  {Link} from 'react-router-dom';

import remedies from './assets/remedy-clipping.png';
import locator from './assets/locator-clipping.png';
import bot from './assets/chatbot-clipping.png';
import tracker from './assets/tracker-clipping.png';
import styles from './Home.module.css';
import './secondhome/secondhome.css'; // Import the CSS file
import secondhomeImage from './assets/secondhomep.png'; // Import the image file

function Home() {
  const stackRef = useRef(null);
  useEffect(() => {
    const stack = stackRef.current;
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains(styles.card));
    cards.forEach((card) => stack.appendChild(card));
    const moveCard = () => {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains(styles.card)) {
        lastCard.classList.add(styles.swap);
        setTimeout(() => {
          lastCard.classList.remove(styles.swap);
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    };
    let autoplayInterval = setInterval(moveCard, 4000);
    stack.addEventListener('click', (e) => {
      const card = e.target.closest(`.${styles.card}`);
      if (card && card === stack.lastElementChild) {
        card.classList.add(styles.swap);
        setTimeout(() => {
          card.classList.remove(styles.swap);
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    });
    // Cleanup function to remove the interval and event listener
    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener('click', moveCard);
    };
  }, []);

  const container = {
    minWidth: '95vw',
    margin: '0 auto',
    padding: '20px',
    font: '10px',
    backgroundColour: '#2d5b3e',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <a href="#" className="logo">Yo <b>Africa</b></a>
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Info</li>
            <Link to='./home/login'><li className='start'>Get Started</li></Link>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Yongama ikusasa lakho</h1>
            <p>Yo Africa seeks to bridge healthcare gaps with inclusive tech solutions. Empowering communities with reliable health info,
              proactive care, and cultural engagement for better well-being nationwide.</p>
            <Link to='./news/latest' style={{ textDecoration: 'none' }}><button>Explore</button></Link>
          </div>
          <div className="image">
            <img src={secondhomeImage} alt="Home Page Visual" />
          </div>
        </div>
      </div>
      <div id="features" style={container}>
        <main>
          <div className={styles.content}>
            <h3 className={styles.logo}>
              <span className={styles.yo}>yo</span>
              <span className={styles.africa}>africa</span>
            </h3>
            <h1>WHO ARE WE</h1>
            <p>
              Yo-Africa is a comprehensive community app offering essential health information, resources, and self-care tools.
            </p>
          </div>
          <div ref={stackRef} className={styles.stack}>
            <div className={styles.card}>
              <img src={remedies} alt="Card Image 1" />
            </div>
            <div className={styles.card}>
              <img src={locator} alt="Card Image 2" />
            </div>
            <div className={styles.card}>
              <img src={tracker} alt="Card Image 3" />
            </div>
            <div className={styles.card}>
              <img src={bot} alt="Card Image 4" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
