import { useReady } from '../../../context'
import styles from './splash.module.scss'

const Splash = () => {
  // use the `useReady()` hook to check if the
  //  app is ready so you can remove the loader.
  const { isReady } = useReady()
  return (
    !isReady && (
      <div className={styles.splash}>
        <img src="/logo.svg" alt="Splash loader" />
        <h3>Open Process Ventures</h3>
      </div>
    )
  )
}

export default Splash
