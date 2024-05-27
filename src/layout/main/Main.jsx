import styles from './style.module.css'
import Portfolio from "../../pages/portfolio/Portfolio.jsx";

function Main() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main_grid}>
                <div className={styles.nav_grid + ' ' + styles.box_item}></div>
                <div className={styles.header_grid + ' ' + styles.box_item}></div>
                <div className={styles.pages_grid + ' ' + styles.box_pages}>
                 <Portfolio />
                </div>
                <div className={styles.footer_grid + ' ' + styles.box_item}></div>
            </div>
        </div>
    )
}

export default Main

