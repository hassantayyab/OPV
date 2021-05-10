import styles from './side-menu.module.scss'
import Menus from './menus'

const SideMenu = ({ open, openChange }) => (
  <div className={`${styles.sideMenu} ${open ? styles.active : ''}`}>
    <button type="button" className={styles.closeBtn} onClick={openChange}>
      <img src="/cancel.svg" alt="click to close" />
    </button>
    <div className={styles.menus}>
      <Menus styles={styles} />
    </div>
  </div>
)

export default SideMenu
