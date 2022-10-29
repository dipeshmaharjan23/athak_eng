import Image from 'next/image'
import React from 'react'
import styles from "./Main.module.scss"

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 className={styles.title}>MAHESHWOR JUNG GAHATRAJ</h2>
                    <p>Politician of Nepal Communist Party and the member of the parliment. Recently Appointed as Youth and Sport Minister of Nepal Goverment.</p>

                    <div className={styles.button}>
                        <button className={`${styles.btn} ${styles.first}`}>Vote for Change</button>
                        <button className={`${styles.btn} ${styles.second}`}>Contact me</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="/avatar1.png" width="403" height="403" alt="Maheshowr Gaharaj" />
                </div>
            </div>
        </div>
    )
}

export default Main