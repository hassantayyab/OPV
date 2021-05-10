import { useRouter } from 'next/router'
import '../styles/main.scss'
// GSAP global setup
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import smoothscroll from 'smoothscroll-polyfill'
import { useProgress } from '@react-three/drei'
import Splash from '../components/utils/splash'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  // Smooth scroll required for safari
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
  const { progress } = useProgress()
  const router = useRouter()
  const isHomePage = router.route === '/'

  return (
    <>
      <Component {...pageProps} />
      {progress !== 100 && <Splash />}
      <div className={`canvas-wrapper ${isHomePage && 'visible'}`}>
        <LCanvas />
      </div>
    </>
  )
}

export default MyApp
