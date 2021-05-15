import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Container from '../container'
import styles from './nav.module.scss'
import Hamburger from '../utils/hamburger'
import SideMenu from './side-menu'
import Menus from './menus'
import { resetIndicator, updateIndicator } from './helper-functions'

const Nav = ({ theme = 'light' }) => {
  const websiteName = 'Open Process Ventures'
  const [open, setOpen] = useState(false)
  const [activeLinkOffsets, setActiveLinkOffset] = useState({
    left: 0,
    width: 0,
  })

  const navRef = useRef()

  const updateDefaultInidcator = (link) => {
    setActiveLinkOffset({
      left: link.offsetLeft,
      width: link.offsetWidth,
    })
    resetIndicator(
      {
        left: link.offsetLeft,
        width: link.offsetWidth,
      },
      navRef
    )
  }

  const handleMouseOver = (evt) => {
    const link = evt.target.closest('a')

    if (link) {
      updateIndicator(
        { left: link.offsetLeft, width: link.offsetWidth },
        navRef
      )
    }
  }

  const handleMouseLeave = () => {
    resetIndicator(activeLinkOffsets, navRef)
  }

  const handleClick = (e) => {
    const link = e.target.closest('a')
    if (link) {
      updateDefaultInidcator(link)
    }
  }

  const getThemeClass = () => {
    if (theme === 'dark') {
      return styles.dark
    }
    if (theme === 'extra-dark') {
      return styles.extraDark
    }

    return ''
  }

  useEffect(() => {
    if (open) {
      document.body.classList.add('fixed-position')
    } else {
      document.body.classList.remove('fixed-position')
    }
  }, [open])

  useEffect(() => {
    if (navRef) {
      // Used setTimeout of 100ms to fix small position issue. I am
      // assuming this is probably due to small elements movement
      // due to either transition or animation. Therefore, we need
      // to wait for its completion before getting the values.
      setTimeout(() => {
        const activeLink = Array.from(
          navRef.current.childNodes[1].childNodes
        ).find((e) => e.id === 'active').childNodes[0].childNodes[0]

        updateDefaultInidcator(activeLink)
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav className={styles.container}>
      <div className={`${styles.wrapper} ${getThemeClass()}`}>
        <Container>
          <nav
            ref={navRef}
            role="list"
            className={`${styles.nav} ${getThemeClass()} ${
              open ? styles.active : styles.inActive
            }`}
            onMouseOver={(e) => handleMouseOver(e)}
            onFocus={(e) => handleMouseOver(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            <Link href="/">
              <div
                role="button"
                tabIndex="0"
                className={`${styles.title} ${getThemeClass()}`}
                onClick={() => setOpen(false)}
                onKeyPress={() => setOpen(false)}
              >
                <img src="/logo.svg" alt="logo" />
                <span>{websiteName}</span>
              </div>
            </Link>

            <div className={`${styles.menus} ${getThemeClass()}`}>
              <div className={styles.indicator} />
              <Menus styles={styles} linkClick={handleClick} />
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
