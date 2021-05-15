import styles from './container.module.scss'

const Container = ({ children, small = false }) => (
  <div className={`${styles.container} ${small && styles.containerSmall}`}>
    {children}
  </div>
)

export default Container
