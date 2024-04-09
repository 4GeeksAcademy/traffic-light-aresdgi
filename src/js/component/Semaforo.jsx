import React, { useState } from "react";
import styles from "./Semaforo.module.css"


const Semaforo = () => {
    const [colorR, setColorR] = useState(false);
    const [colorY, setColorY] = useState(false);
    const [colorG, setColorG] = useState(false);
    const [colorP, setColorP] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cambiarColorR = () => {
        setColorR(!colorR);
    };

    const cambiarColorY = () => {
        setColorY(!colorY);
    };

    const cambiarColorG = () => {
        setColorG(!colorG);
    };

    const cambiarColorP = () => {
        setColorP(!colorP);
    };


    return (
        <>
            <div className={styles.divboton}>
                <button className={styles.button} onClick={() => { setIsVisible(!isVisible)}}>
                    {isVisible ? "Desaparecer" : "Aparecer"}
                </button>
            </div>
            <div className={styles.contenedor}>
                <div onMouseOver={cambiarColorR} className={`${styles.rojo} ${colorR ? styles.rojoS : styles.rojo}`} onMouseLeave={cambiarColorR}></div>
                <div onMouseOver={cambiarColorY} className={`${styles.amarillo} ${colorY ? styles.amarilloS : styles.amarillo}`} onMouseLeave={cambiarColorY}></div>
                <div onMouseOver={cambiarColorG} className={`${styles.verde} ${colorG ? styles.verdeS : styles.verde}`} onMouseLeave={cambiarColorG}></div>
                {isVisible &&(<div onMouseOver={cambiarColorP} className={`${styles.purpura} ${colorP ? styles.purpuraS : styles.purpura}`} onMouseLeave={cambiarColorP}></div>)}
            </div>

        </>

    );
};

export default Semaforo;