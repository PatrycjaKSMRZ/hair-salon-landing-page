import {useState} from 'react'
import styles from './Header.module.css'

function    Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <span className={styles.logo}>Salon strong hair <span>.</span> </span>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''} `}>
                    <a href="">home</a>
                    <a href="">cennik</a>
                    <a href="">galeria</a>
                    <a href="">zespół</a>
                    <a href="">kontakt</a>
                    <a href="">UMÓW WIZYTĘ</a>
                </nav>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
export default Header;