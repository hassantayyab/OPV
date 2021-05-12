import Link from 'next/link'
import styles from './side-menu.module.scss'
import Menus from './menus'
import Container from '../container'

const SideMenu = ({ open, openChange }) => (
  // Add animations
  <nav className={`${styles.sideMenu} ${open ? styles.active : ''}`}>
    <Container>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.title}>
            <img src="/logo.svg" alt="logo" />
            <span>Open Process Ventures</span>
          </div>
        </Link>
        <button type="button" className={styles.closeBtn} onClick={openChange}>
          <img src="/cancel.svg" alt="click to close" />
        </button>
      </div>
      <div className={styles.menus}>
        <Menus styles={styles} openChange={openChange} />
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
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="/linkedin.svg" alt="linkedin social link" />
            </a>
          </div>
        </section>
      </footer>
    </Container>
  </nav>
)

export default SideMenu
