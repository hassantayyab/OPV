import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/about/header'
import Main from '../components/about/team'
import Profiles from '../components/about/profiles'
import { staggerLines } from '../components/animations'
import Footer from '../components/footer'
import Nav from '../components/nav'
import { useReady } from '../context'
import Seo from '../components/utils/seo'

const About = () => {
  const router = useRouter()
  const els = useRef([])
  const { isReady } = useReady()

  useEffect(() => {
    if (isReady) {
      staggerLines(els.current)

      setTimeout(() => {
        router.push(router.asPath)
      }, 400)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady])

  return (
    <>
      <Seo title="About" />
      <Nav theme="dark" />
      <Header />
      <Profiles />
      <Main />
      <div>
        <Footer>
          <div className="aLine">
            <div ref={(e) => (els.current[0] = e)}>
              Whether it’s regarding an investement,
            </div>
          </div>
          <div className="aLine">
            <div ref={(e) => (els.current[1] = e)}>
              collaboration or new talent,
            </div>
          </div>
          <div className="aLine">
            <div ref={(e) => (els.current[2] = e)}>we’d love to hear.</div>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default About
