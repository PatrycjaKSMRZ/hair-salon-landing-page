import {useState} from 'react'
import styles from './Header.module.css'

function    Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //? to jest funkcja, która przełącza stan menu z true na false i na odwrót
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen) 
    //? ()=> funkcja strzałkowa - utwórz funkcje, która po wywołaniu wykona to, co jest po strzałce 

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <span className={styles.logo}>Salon strong hair <span>.</span> </span>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''} `}>
                    <a href="" onClick={() => setIsMenuOpen(false)}>home</a>
                    <a href="" onClick={() => setIsMenuOpen(false)}>cennik</a>
                    <a href="" onClick={() => setIsMenuOpen(false)}>galeria</a>
                    <a href="" onClick={() => setIsMenuOpen(false)}>zespół</a>
                    <a href="" onClick={() => setIsMenuOpen(false)}>kontakt</a>
                    <a href="#Contact" onClick={() => setIsMenuOpen(false)} className={styles.ctaButton}>UMÓW WIZYTĘ</a>
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