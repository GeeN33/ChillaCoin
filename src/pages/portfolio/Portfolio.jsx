import styles from './style.module.css'
import CardPortfolio from "../../components/cardportfolio/CardPortfolio.jsx";
import {PortfolioContextProvider} from "../../сontext/portfolio-context.jsx";


function Portfolio() {

    return (
   <PortfolioContextProvider>
        <div className={styles.main_grid}>
              <div className={styles.header_grid + ' ' + styles.box_header}>

                  <CardPortfolio />

              </div>
              <div className={styles.footer_grid + ' ' + styles.box_item}>


              </div>
        </div>
   </PortfolioContextProvider>
    )
}

export default Portfolio

