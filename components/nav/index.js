import Container from '../container'
import styles from './nav.module.scss'
import Link from 'next/link'
import Hamburger from '../utils/hamburger'

const Nav = () => {
  const websiteName = 'Open Process Ventures'

  return (
    <Container>
      <nav className={styles.nav}>
        <Link href="/">
          <div className={styles.title}>
            <img src="/frame.svg" alt="logo" />
            <span>{websiteName}</span>
          </div>
        </Link>

        <div className={styles.menus}>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Start a Conversation</Link>
        </div>

        <div className={styles.toggler}>
          <Hamburger />
        </div>
      </nav>
    </Container>
  )
}

export default Nav
