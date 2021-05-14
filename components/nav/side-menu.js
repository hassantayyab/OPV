import Link from 'next/link'
import styles from './side-menu.module.scss'
import Menus from './menus'
import Container from '../container'

const SideMenu = ({ open, openChange }) => (
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
    </Container>
  </nav>
)

export default SideMenu
