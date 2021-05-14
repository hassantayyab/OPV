import Link from 'next/link'
import { useState } from 'react'
import Container from '../container'
import styles from './nav.module.scss'
import Hamburger from '../utils/hamburger'
import SideMenu from './side-menu'
import Menus from './menus'

const Nav = ({ theme = 'light' }) => {
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
    <nav>
      <div className={`${styles.wrapper} ${getThemeClass()}`}>
        <Container>
          <nav className={`${styles.nav} ${getThemeClass()}`}>
            <Link href="/">
              <div
                role="button"
                tabIndex="0"
                className={`${styles.title} ${getThemeClass()} ${
                  open ? styles.active : styles.inActive
                }`}
                onClick={() => setOpen(false)}
                onKeyPress={() => setOpen(false)}
              >
                <img src="/logo.svg" alt="logo" />
                <span>{websiteName}</span>
              </div>
            </Link>

            <div className={`${styles.menus} ${getThemeClass()}`}>
              <Menus styles={styles} />
            </div>

            <div
              role="button"
              tabIndex="0"
              className={styles.toggler}
              onClick={() => setOpen(!open)}
              onKeyDown={() => setOpen(!open)}
              onKeyPress={() => setOpen(!open)}
            >
              <Hamburger open={open} color={theme} />
            </div>
          </nav>
          <div className={`${styles.separator} ${getThemeClass()}`} />
        </Container>
      </div>
      <div
        className={`${styles.sideMenu} ${
          open ? styles.active : styles.inActive
        }`}
      >
        <SideMenu open={open} openChange={() => setOpen(false)} />
      </div>
    </nav>
  )
}

export default Nav
