import Image from 'next/image'
import React from 'react'
import styles from "./Subscribe.module.scss"

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/avatar2.png" width="296" height="296" alt="maheswor" />
      </div>
      <div className={styles.right}>
        <p className={styles.para1}>Subscribe to get our regular update on our work</p>
        <p className={styles.para2}>Please enter your email address and press enter or click subscribe</p>
        <div className={styles.sub}>
          <input type="text" placeholder='ulancemeup@gmail.com' className={styles.input} />
          <button>Suscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe