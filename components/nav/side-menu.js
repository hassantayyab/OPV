import { useEffect, useRef } from 'react'
import styles from './side-menu.module.scss'
import Menus from './menus'
import Container from '../container'
import { slideLeftFadeIn, fadeOut } from '../animations'

const SideMenu = ({ open, openChange }) => {
  let menuRef = useRef()

  useEffect(() => {
    if (open) {
      slideLeftFadeIn(menuRef, { delay: 0.3 })
    } else {
      fadeOut(menuRef)
    }
  }, [open])

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.header} />
        <div className={styles.menus} ref={(e) => (menuRef = e)}>
          <Menus styles={styles.menus} openChange={openChange} />
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
