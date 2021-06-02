import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import Scratch from '../components/scratch'
import Roomba from '../components/roomba'

export default function Home() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate - Home</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="mb-12 md:mb-16 xl:mb-24"
      >
        <Container>
          <motion.div variants={fade}>
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">T-Ray Vibers Test</h1>

            <Roomba />
            <Scratch />
            
          </motion.div>
        </Container>
      </motion.div>

      <Footer />
    </Layout>
  )
}
