import styles from './Footer.module.scss';
import LogoFooter from '../../img/logoFooter.svg'

function Footer () {
    return (
        <>
            <div className={styles.footer}>
                <img src={LogoFooter} alt={'Logo Kasa Footer'} />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer;