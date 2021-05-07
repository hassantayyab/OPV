import styles from './hamburger.module.scss'

const Hamburger = ({ color = 'light' }) => {
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
    <div className={`${styles.hamburger} ${getColorClass()}`}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default Hamburger
