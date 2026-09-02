import styles from './Header.module.css'

function    Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <span className={styles.logo}>Salon strong hair </span>
                <nav className={styles.nav}>
                    <a href="">home</a>
                    <a href="">cennik</a>
                    <a href="">galeria</a>
                    <a href="">zespół</a>
                    <a href="">kontakt</a>
                    <a href="">UMÓW WIZYTĘ</a>
                </nav>
            </div>
        </header>
    );
}
export default Header;