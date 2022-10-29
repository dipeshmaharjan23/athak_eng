import React from 'react'
import styles from "./Homepage.module.scss"
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Section from '../Section/Section'
import Footer from '../Footer/Footer'
import Quoto from '../Quote/Quote'
import Subscribe from '../Subscribe/Subscribe'
import MediaSection from "../MediaSection/Media"
const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Main />
                <Section />
                <Quoto />
                <MediaSection />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}

export default Homepage