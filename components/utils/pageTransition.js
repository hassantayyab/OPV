import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SwitchTransition, Transition } from 'react-transition-group'
import { useFixTimeout } from './useFixTimeout'
// import { fixTimeoutTransition } from './fixTimeoutTransition'

const DURATION = 500
const DELAY = 300

// fixTimeoutTransition(DURATION)

function PageTransition({ router, children }) {
  const overlayRef = useRef()
  const firstRender = useRef(true)

  // useFixTimeout()

  useEffect(() => {
    // Run on route change only and not on refresh
    const tl = gsap.timeline()
    function animate() {
      tl.to(overlayRef.current, {
        duration: DURATION / 1000,
        scaleX: 1.0,
        transformOrigin: '0 0',
        ease: 'slow',
      }).to(overlayRef.current, {
        duration: DURATION / 1000,
        scaleX: 0,
        transformOrigin: '100% 0',
        ease: 'slow',
        delay: DELAY / 1000,
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

  useEffect(() => {
    firstRender.current = false
  }, [])

  const getTransitionStyles = {
    entering: {
      position: `absolute`,
      width: '100%',
      opacity: 1,
    },
    entered: {
      transition: `opacity ${DURATION}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${DURATION}ms ease-in-out`,
      opacity: 1,
    },
  }

  return (
    <>
      <div className="transition-overlay" ref={overlayRef} />
      <div style={{ position: 'relative' }}>
        <SwitchTransition>
          <Transition
            key={router.route}
            timeout={{
              enter: DURATION,
              exit: DURATION,
            }}
          >
            {(status) => (
              <div
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </div>
            )}
          </Transition>
        </SwitchTransition>
      </div>
    </>
  )
}

export default PageTransition
