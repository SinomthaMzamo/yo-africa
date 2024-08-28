import styles from './RemedyCard.module.css';

import RemedyCard from './RemedyCard'
import gingerImg from './assets/ginger-og.png';
import eucalyptusImg from './assets/eucalyptus-oil.jpg'
import teaImg from './assets/lemon-grass-tea.jpg'
import logoImg from './assets/logo-named.png';

const Remedies = () => {
	const data = [
	{	
		num: '01',
		title: 'Ginger for pain and nausea',
		tagLine: 'It’s almost law to try ginger when you have a cold, sore throat, or are experiencing morning sickness...',
		date: '1 June 2023',
		href: 'https://www.healthline.com/health/home-remedies#ginger',
		bgImg: gingerImg,

	},
	{	
		num: '02',
		title: 'Eucalyptus oil for pain relief',
		tagLine: 'Eucalyptus oil has a component called 1,8-cineole, which may help relieve pain...',
		date: '11 June 2023',
		href: 'https://www.healthline.com/health/home-remedies#eucalyptus',
		bgImg: eucalyptusImg,

	},
	{	
		num: '03',
		title: 'African brewed lemon grass tea',
		tagLine: 'African lemongrass tea boosts digestion and wellness.',
		date: '13 June 2023',
		href: 'https://cookpad.com/us/recipes/7749449-african-brewed-lemon-grass-tea-author-marathon?ref=search&search_term=african%20herbal%20tea',
		bgImg: teaImg,

	},]




	return (
	   <>
	   	<div className={styles.container}>
	      <section className={styles.info}>
	         <img src={logoImg} alt="Logo" />
	         <h1>
	            <a href="https://codetheweb.blog/" target="_blank" rel="noopener noreferrer">Remedies Library</a>
	         </h1>
	      </section>
	      <section className={styles['cards-wrapper']}>
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
	   </>
	);
};

export default Remedies;