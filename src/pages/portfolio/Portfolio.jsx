import style from './style.module.css'
import Canvas from "../../components/canvas/Canvas.jsx";

function Portfolio() {

    return (

        <>
            <div className={style.item1}>
               <Canvas />
            </div>
            <div className={style.item2}>pages-grid2</div>
        </>

    )
}

export default Portfolio
