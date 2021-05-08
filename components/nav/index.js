import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Container from '../container'
import styles from './nav.module.scss'
import Hamburger from '../utils/hamburger'
import SideMenu from './side-menu'

const Nav = ({ theme = 'light' }) => {
  const router = useRouter()
  const websiteName = 'Open Process Ventures'
  const [open, setOpen] = useState(false)

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
    <>
      <div className={`${styles.wrapper} ${getThemeClass()}`}>
        <Container>
          <nav className={`${styles.nav} ${getThemeClass()}`}>
            <Link href="/">
              <div className={`${styles.title} ${getThemeClass()}`}>
                <img src="/logo.svg" alt="logo" />
                <span>{websiteName}</span>
              </div>
            </Link>

            <div className={`${styles.menus} ${getThemeClass()}`}>
              <span
                className={`${
                  router.pathname === '/about' ? styles.active : ''
                }`}
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

            <div
              role="button"
              tabIndex="0"
              className={styles.toggler}
              onClick={() => setOpen(true)}
              onKeyDown={() => setOpen(true)}
              onKeyPress={() => setOpen(true)}
            >
              <Hamburger color={theme} />
            </div>
          </nav>
          <div className={`${styles.separator} ${getThemeClass()}`} />
        </Container>
      </div>
      {open && <SideMenu open={open} openChange={() => setOpen(false)} />}
    </>
  )
}

export default Nav
