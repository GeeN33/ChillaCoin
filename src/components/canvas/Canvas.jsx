import styles from './style.module.css'
import {useEffect, useRef} from "react";

function Canvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = '#9de35f'
        context.fillRect(0, 0, context.canvas.width/2, context.canvas.height/2)
    }, [])

    return (
        <canvas id="idCanvas" className={styles.canvas} ref={canvasRef}></canvas>
    )
}

export default Canvas
