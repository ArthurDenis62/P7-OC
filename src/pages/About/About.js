import Banner from "../../components/Banner/Banner";
import Collapse from '../../components/Collapse/Collapse';
import styles from './About.module.scss';
import AboutBanner from "../../img/bgApropos.svg";

function About () {
    return (
        <>
            <div>
                <Banner image={AboutBanner} altText={`Banner A propos`} textContent={null} />
            </div>
            <main className={styles.About}>
                <div className={styles.collapse}>
                    <div className={styles.items}>
                        <Collapse title={'Fiablilité'} />	
                    </div>
                    <div className={styles.items}>
                        <Collapse title={'Respect'} />
                    </div>
                    <div className={styles.items}>
                        <Collapse title={'Service'} />
                    </div>
                    <div className={styles.items}>
                        <Collapse title={'Sécurité'} />
                    </div>	
                </div>
            </main>
        </>
    )
}

export default About;