import { useEffect, useRef } from 'react'
import '../styles/main.scss'

import { SwitchTransition, Transition } from 'react-transition-group'
// GSAP global setup
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import smoothscroll from 'smoothscroll-polyfill'

import { ReadyProvider } from '../context'
import Splash from '../components/utils/splash'
import { FixTimeoutTransition } from '../components/utils/fixTimeoutTransition'

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

const TRANSITION_DURATION = 700

function MyApp({ Component, pageProps, router }) {
  const overlayRef = useRef()
  const firstRender = useRef(true)

  useEffect(() => {
    // Run on route change only and not on refresh
    const tl = gsap.timeline()
    function animate() {
      tl.to(overlayRef.current, {
        duration: TRANSITION_DURATION / 1000,
        scaleX: 1.0,
        transformOrigin: '0 0',
        ease: 'slow',
      }).to(overlayRef.current, {
        duration: TRANSITION_DURATION / 1000,
        scaleX: 0,
        transformOrigin: '100% 0',
        ease: 'slow',
        delay: 0.1,
      })
    }

    if (!firstRender.current) {
      animate()
    } else {
      firstRender.current = false
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [router.route])

  return (
    <ReadyProvider>
      <FixTimeoutTransition />
      <Splash />
      <div className={`canvas-wrapper ${router.route === '/' && 'visible'}`}>
        <LCanvas />
      </div>

      <div className="transition-overlay" ref={overlayRef} />

      <SwitchTransition>
        <Transition
          key={router.route}
          timeout={TRANSITION_DURATION}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Component {...pageProps} />
          </div>
        </Transition>
      </SwitchTransition>
    </ReadyProvider>
  )
}

export default MyApp
