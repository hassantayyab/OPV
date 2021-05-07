import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from '../container'
import styles from './nav.module.scss'
import Hamburger from '../utils/hamburger'

const Nav = ({ theme = 'light' }) => {
  const router = useRouter()
  const websiteName = 'Open Process Ventures'

  const getThemeClass = () => {
    if (theme === 'dark') {
      return styles.dark
    }
    if (theme === 'extra-dark') {
      return styles.extraDark
    }

    return ''
  }

  return (
    <div className={`${styles.wrapper} ${getThemeClass()}`}>
      <Container>
        <nav className={`${styles.nav} ${getThemeClass()}`}>
          <Link href="/">
            <div className={`${styles.title} ${getThemeClass()}`}>
              <img src="/frame.svg" alt="logo" />
              <span>{websiteName}</span>
            </div>
          </Link>

          <div className={`${styles.menus} ${getThemeClass()}`}>
            <span
              className={`${router.pathname === '/about' ? styles.active : ''}`}
            >
              <Link href="/about">About</Link>
            </span>
            <span
              className={`${
                router.pathname === '/portfolio' ? styles.active : ''
              }`}
            >
              <Link href="/portfolio">Portfolio</Link>
            </span>
            <span
              className={`${
                router.pathname === '/contact' ? styles.active : ''
              }`}
            >
              <Link href="/contact">Start a Conversation</Link>
            </span>
          </div>

          <div className={styles.toggler}>
            <Hamburger color={theme} />
          </div>
        </nav>
        <div className={`${styles.separator} ${getThemeClass()}`} />
      </Container>
    </div>
  )
}

export default Nav
