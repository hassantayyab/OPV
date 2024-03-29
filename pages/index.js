import { useEffect, useRef } from 'react'
import Nav from '../components/nav/index.js'
import Hero from '../components/home/hero'
import Footer from '../components/footer'
import { staggerLines } from '../components/animations'
import { useReady } from '../context/index.js'
import Seo from '../components/utils/seo.js'

const Home = () => {
  const els = useRef([])
  const { isReady } = useReady()

  useEffect(() => {
    if (isReady) {
      staggerLines(els.current)
    }
  }, [isReady])

  return (
    <>
      <Seo title="Confidence Through Clarity" reverse />
      <div className="fit-content-vetically">
        <Nav />
        <Hero scrollRef="#footer" />
      </div>

      <div id="footer">
        <Footer>
          <div>
            <div className="aLine">
              <div ref={(e) => (els.current[0] = e)}>
                Open Process Ventures is a Web3
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => (els.current[1] = e)}>
                specialised investment firm and strategic
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => (els.current[2] = e)}>consultancy.</div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default Home
