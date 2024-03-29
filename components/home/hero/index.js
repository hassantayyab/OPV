import { useEffect, useRef } from 'react'
import { useReady } from '../../../context'
import { zoomIn } from '../../animations'
import Container from '../../container'
import styles from './hero.module.scss'

const handleScroll = (ref) => {
  if (typeof window !== 'undefined') {
    if (ref) {
      const element = document.querySelector(ref)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }
}

const Hero = ({ scrollRef }) => {
  const buttonRef = useRef()

  // Use the `useReady()` hook to check if the
  //  app is ready so you can start the animations.
  const { isReady } = useReady()
  // We can avoid using useEffect since we know the
  // app will be loaded by this point. However, best
  // practices can be further researched for this.
  // EDIT: it may need useEffect in some cases (not sure why yet!)
  useEffect(() => {
    if (isReady) {
      zoomIn(buttonRef.current)
    }
  }, [isReady])

  return (
    <div className={styles.hero}>
      <Container>
        <h1>
          <div>Confidence</div>
          <div>Through</div>
          <div>Clarity</div>
        </h1>
        <button
          type="button"
          onClick={() => scrollRef && handleScroll(scrollRef)}
          ref={buttonRef}
        >
          <img
            width="100%"
            height="100%"
            src="/down-arrow.svg"
            alt="down arrow"
          />
        </button>
      </Container>
    </div>
  )
}

export default Hero
