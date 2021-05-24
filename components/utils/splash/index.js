import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useReady } from '../../../context'
import { fadeIn, zoomIn } from '../../animations'
import styles from './splash.module.scss'

const Splash = () => {
  // use the `useReady()` hook to check if the
  //  app is ready so you can remove the loader.
  const logoRef = useRef()
  const textRef = useRef()
  const { isReady, progress } = useReady()
  const isLoading = !isReady

  useEffect(() => {
    zoomIn(logoRef.current, { duration: 1 })
    fadeIn(logoRef.current, { duration: 1.5 })
    fadeIn(textRef.current, { duration: 1.5, delay: 0.5 })
  }, [])

  return (
    <CSSTransition
      in={isLoading}
      timeout={200}
      classNames="fade"
      enter={false}
      unmountOnExit
    >
      <div className={styles.splash}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        <img src="/logo.svg" alt="Splash loader" ref={logoRef} />
        <img src="/logo-text.svg" alt="logo" ref={textRef} />
      </div>
    </CSSTransition>
  )
}

export default Splash
