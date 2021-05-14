import Container from '../container'
import styles from './text.module.scss'

const Text = ({ children }) => (
  <div className={styles.text}>
    <Container small>{children}</Container>
  </div>
)

export default Text
