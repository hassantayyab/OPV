import { CSSTransition } from 'react-transition-group'
import { useReady } from '../../../context'
import styles from './splash.module.scss'

const Splash = () => {
  // use the `useReady()` hook to check if the
  //  app is ready so you can remove the loader.
  const { isReady, progress } = useReady()
  const isLoading = !isReady
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
        <img src="/logo.svg" alt="Splash loader" />
        <h3>Open Process Ventures</h3>
      </div>
    </CSSTransition>
  )
}

export default Splash
