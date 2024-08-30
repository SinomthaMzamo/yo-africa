import styles from './RemedyCard.module.css';

const RemedyCard = ({num, title, tagLine, date, href, bgImg}) => {
	return(
		<div className={styles['card-grid-space']}>
          <div className={styles.num}>{num}</div>
          <a className={styles.card} href={href} style={{ '--bg-img': `url(${bgImg})` }}>
            <div>
              <h5 className={styles.title}>{title}</h5> {/* Changed to h2 */}
	          <p className={styles.tagLine}>{tagLine}</p> {/* Changed class name for clarity */}
	          <div className={styles.date}>{date}</div>
	          <div className={styles.tags}>
	            <div className={styles.tag}>Read more</div>
	          </div>
            </div>
          </a>
        </div>
	);
};

export default RemedyCard;