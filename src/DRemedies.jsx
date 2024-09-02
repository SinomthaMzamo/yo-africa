import styles from './RemedyCard.module.css';
import RemedyCard from './RemedyCard'
import gingerImg from './assets/vera.jpg';
import eucalyptusImg from './assets/coconut-oil.jpg'
import teaImg from './assets/acv.jpg'
import logoImg from './assets/logo-named.png';
const DRemedies = () => {
    const data = [
    {
        num: '01',
        title: 'Pure Aloe Soothing Gel',
        tagLine: "Cool, Calm, and Hydrate—Nature's Remedy for Every Skin Need",
        date: '1 June 2023',
        href: 'https://www.healthline.com/health/home-remedies#ginger',
        bgImg: gingerImg,
    },
    {
        num: '02',
        title: 'Coconut Calm Skin Elixir',
        tagLine: 'Eucalyptus oil has a component called 1,8-cineole, which may help relieve pain...',
        date: '11 June 2023',
        href: 'https://www.healthline.com/health/home-remedies#eucalyptus',
        bgImg: eucalyptusImg,
    },
    ]
    return (
       <>
       <div className={styles['scroll-container']}>
        <div className={styles["col-container"]}>
          <section className={styles.info}>
             <img src={logoImg} alt="Logo" />
             <h1 className={styles["section-title"]}>
                <a href="https://codetheweb.blog/" target="_blank" rel="noopener noreferrer">Suggested Remedies</a>
             </h1>
          </section>
          <section className={styles['col-container-t']}>
             {data.map((item, index) => (
                <RemedyCard
                   key={index}
                   num={item.num}
                   title={item.title}
                   tagLine={item.tagLine}
                   date={item.date}
                   href={item.href}
                   bgImg={item.bgImg}
                />
             ))}
          </section>
        </div>
        </div>
       </>
    );
};
export default DRemedies;