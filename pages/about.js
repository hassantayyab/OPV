import { useEffect, useRef } from 'react'
import Header from '../components/about/header'
import Main from '../components/about/main'
import Profiles from '../components/about/profiles'
import { staggerLines } from '../components/animations'
import Footer from '../components/footer'
import Nav from '../components/nav'
import { useReady } from '../context'

const About = () => {
  const containerRef = useRef()
  const els = useRef([])
  const { isReady } = useReady()

  useEffect(() => {
    if (isReady) {
      staggerLines(containerRef.current, els.current)
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <>
      <Nav theme="dark" />
      <Header />
      <Profiles />
      <Main />
      <div ref={containerRef}>
        <Footer>
          <div className="aLine">
            <div ref={(e) => els.current.push(e)}>
              Whether it’s regarding an investement,
            </div>
          </div>
          <div className="aLine">
            <div ref={(e) => els.current.push(e)}>
              collaboration or new talent,
            </div>
          </div>
          <div className="aLine">
            <div ref={(e) => els.current.push(e)}>we’d love to hear.</div>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default About
