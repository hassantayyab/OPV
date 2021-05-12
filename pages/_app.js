import { useRouter } from 'next/router'
import '../styles/main.scss'

// GSAP global setup
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import smoothscroll from 'smoothscroll-polyfill'

import { ReadyProvider } from '../context'
import Splash from '../components/utils/splash'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  smoothscroll.polyfill()
}

let LCanvas = null
if (process.env.NODE_ENV === 'production') {
  LCanvas = dynamic(() => import('../components/canvas'), {
    ssr: false,
  })
} else {
  LCanvas = require('../components/canvas').default
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ReadyProvider>
      <Component {...pageProps} />
      <Splash />
      <div className={`canvas-wrapper ${router.route === '/' && 'visible'}`}>
        <LCanvas />
      </div>
    </ReadyProvider>
  )
}

export default MyApp
