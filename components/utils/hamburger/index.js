import styles from './hamburger.module.scss'

const Hamburger = ({ color = 'light' }) => {
  return (
    <div className={`${styles.hamburger} ${color === 'dark' && styles.dark}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Hamburger
