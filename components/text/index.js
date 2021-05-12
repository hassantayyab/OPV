import Container from '../container'
import styles from './text.module.scss'

const Text = ({ children }) => (
  <div className={styles.text}>
    <Container>{children}</Container>
  </div>
)

export default Text
