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
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  })
  // const [hoveredIndicator, setHoveredIndicator] = useState({
  //   left: 0,
  //   width: 0,
  // })
  const navRef = useRef()

  const handleMouseOver = (evt) => {
    const link = evt.target.closest('a')

    if (link) {
      updateIndicator(link.offsetLeft, link.offsetWidth, navRef)
      // setHoveredIndicator({
      //   left: link.offsetLeft,
      //   width: link.offsetWidth,
      // })
    }
  }

  const handleMouseLeave = () => {
    resetIndicator(indicator.left, indicator.width, navRef)
  }

  // TODO: Needs to be used for updating indicator starting position.
  // const handleClick = () => {
  //   if (hoveredIndicator.left && hoveredIndicator.width) {
  //     setIndicator({
  //       left: hoveredIndicator.left,
  //       width: hoveredIndicator.width,
  //     })
  //   }
  // }

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

  return (
    <nav>
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
              <Menus
                styles={styles}
                // openChange={handleClick}
              />
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
