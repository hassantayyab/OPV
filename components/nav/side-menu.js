import { useEffect, useRef } from 'react'
import styles from './side-menu.module.scss'
import Menus from './menus'
import Container from '../container'
import { fadeOut, fadeIn } from '../animations'

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
    <Container>
      <div className={styles.wrapper} ref={menuRef}>
        <div className={styles.header} />
        <div className={styles.menus}>
          <Menus styles={styles} openChange={openChange} open={open} />
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
                <img src="/linkedin.svg" alt="linkedin social link" />
              </a>
            </div>
          </section>
        </footer>
      </div>
    </Container>
  )
}

export default SideMenu
