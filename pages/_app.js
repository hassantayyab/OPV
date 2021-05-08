import '../styles/main.scss'
// GSAP global setup
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import Splash from '../components/utils/splash'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  // Smooth scroll required for safari
  smoothscroll.polyfill()
}

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      // TODO: Temporary. Needs to be replaced with actual implementation.
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  })

  return (
    <>
      {loading && <Splash />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
