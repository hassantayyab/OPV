import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './side-menu.module.scss'

const SideMenu = ({ open, openChange }) => {
  const router = useRouter()

  return (
    <div className={`${styles.sideMenu} ${open ? styles.active : ''}`}>
      <button type="button" className={styles.closeBtn} onClick={openChange}>
        <img src="/cancel.svg" alt="click to close" />
      </button>
      <div className={styles.menus}>
        <div className={`${router.pathname === '/about' ? styles.active : ''}`}>
          <Link href="/about">About</Link>
        </div>
        <div
          className={`${router.pathname === '/portfolio' ? styles.active : ''}`}
        >
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div
          className={`${router.pathname === '/contact' ? styles.active : ''}`}
        >
          <Link href="/contact">Start a Conversation</Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
