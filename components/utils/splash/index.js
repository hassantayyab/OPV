import { useReady } from '../../../context'
import styles from './splash.module.scss'

const Splash = () => {
  const { isReady } = useReady()
  return (
    !isReady && (
      <div className={styles.splash}>
        <img src="/logo.svg" alt="Splash loader" />
        <img src="/logo-text.svg" alt="logo" />
      </div>
    )
  )
}

export default Splash
