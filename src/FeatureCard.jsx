import styles from "./FeatureCard.module.css";
import  {Link} from 'react-router-dom';

const FeatureCard = ({ title, imageSrc, path, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-inner"]} style={{ "--clr": "#fff" }}>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src={imageSrc} alt={title} />
          </div>
          <div className={styles.icon}>
            <Link to={path} className={styles.iconBox}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
