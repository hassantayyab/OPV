import { useEffect, useRef } from 'react'
import styles from './side-menu.module.scss'
import Menus from './menus'
import { fadeOut, fadeIn } from '../animations'

export const menu = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/about#featured-profiles',
    title: 'Portfolio',
  },
  {
    link: '/contact',
    title: 'Contact',
  },
]

const SideMenu = ({ open, openChange }) => {
  const menuRef = useRef()

  useEffect(() => {
    if (open) {
      fadeIn(menuRef.current, { delay: 0.3 })
    } else {
      fadeOut(menuRef.current)
    }
  }, [open])

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <div className={styles.header} />

      <div className={styles.scrollWrapper}>
        <div className={styles.menus}>
          <Menus
            styles={styles}
            openChange={openChange}
            open={open}
            menu={menu}
          />
        </div>

        <footer className={styles.footer}>
          <section>
            <div className={styles.heading}>Location</div>
            <div className={styles.address}>
              <div>21 Heathfield Gardens,</div> <div>Wandsworth, London,</div>{' '}
              <div>SW4 7fj</div>
            </div>
          </section>
          <section>
            <div className={styles.heading}>Find us on</div>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="100%"
                  height="100%"
                  src="/linkedin.svg"
                  alt="linkedin social link"
                />
              </a>
            </div>
          </section>
        </footer>
      </div>
    </div>
  )
}

export default SideMenu
