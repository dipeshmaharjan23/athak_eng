import type { NextPage } from 'next'
import Head from 'next/head'
import About from "../components/About/About"
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div style={{width:"calc(100% - 13rem)",margin: "auto"}}>
        <About />
        <Footer />
      </div>
    </>
  )
}

export default about
