import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Nav from '../components/nav/index.js'
import Hero from '../components/home/hero'
import Footer from '../components/footer'
import { staggerLines } from '../components/animations'
import { useReady } from '../context/index.js'

const Home = () => {
  const els = useRef([])
  const { isReady } = useReady()

  useEffect(() => {
    if (isReady) {
      staggerLines(els.current, els.current)
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <>
      <Head>
        <title>Open Process Ventures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero scrollRef="#footer" />
      <div id="footer">
        <Footer>
          <div>
            <div className="aLine">
              <div ref={(e) => els.current.push(e)}>
                Open Process Ventures is a Web3
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => els.current.push(e)}>
                specialised investment firm and strategic
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => els.current.push(e)}>consultancy.</div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default Home
