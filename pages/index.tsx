import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../components/Homepage/Homepage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Athak</title>
      </Head>
        <Homepage />
    </>
  )
}

export default Home
