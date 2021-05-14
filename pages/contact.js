import Nav from '../components/nav'
import { ContactSection } from '../components/contact'
import styles from './contact.module.scss'

const Contact = () => (
  <div className={styles.vContainer}>
    <Nav theme="extra-dark" />
    <ContactSection />
  </div>
)

export default Contact
