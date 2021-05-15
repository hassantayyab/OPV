import styles from './hamburger.module.scss'

const Hamburger = ({ open, color = 'light' }) => {
  const getColorClass = () => {
    if (color === 'dark') {
      return styles.dark
    }
    if (color === 'extra-dark') {
      return styles.extraDark
    }

    return ''
  }

  return (
    <div className={`${styles.hamburger}  ${getColorClass()}`}>
      <span className={`${open ? styles.open : ''}`} />
      <span className={`${open ? styles.open : ''}`} />
      <span className={`${open ? styles.open : ''}`} />
    </div>
  )
}

export default Hamburger
