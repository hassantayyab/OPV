import Link from 'next/link'
import Container from '../container'
import styles from './nav.module.scss'
import Hamburger from '../utils/hamburger'

const Nav = ({ theme = 'light' }) => {
  const websiteName = 'Open Process Ventures'

  return (
    <div className={`${styles.wrapper} ${theme === 'dark' && styles.dark}`}>
      <Container>
        <nav className={`${styles.nav} ${theme === 'dark' && styles.dark}`}>
          <Link href="/">
            <div
              className={`${styles.title} ${theme === 'dark' && styles.dark}`}
            >
              <img src="/frame.svg" alt="logo" />
              <span>{websiteName}</span>
            </div>
          </Link>

          <div className={`${styles.menus} ${theme === 'dark' && styles.dark}`}>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Start a Conversation</Link>
          </div>

          <div className={styles.toggler}>
            <Hamburger color={theme} />
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Nav
