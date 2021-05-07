import Link from 'next/link'
import Container from '../../container'
import Button from '../button'
import styles from './footer.module.scss'

const Footer = ({ children }) => (
  <div className={styles.footer}>
    <Container>
      <h3>{children}</h3>

      <section>
        <div className={styles.leftCol}>
          <h5>Start a conversation</h5>
          <div className={styles.mBtn}>
            <Button href="/contact">
              <span>Contact</span>
              <img src="/arrow-right.svg" alt="arrow" />
            </Button>
          </div>
          <div className={styles.separator} />
          <div className={styles.links}>
            <Link href="mailto:hello@openprocessventures.com">
              hello@openprocessventures.com
            </Link>
            <Link href="/terms-and-conditions">Ts & Cs</Link>
            <Link href="/privacy-policy">PrivacyPolicy</Link>
          </div>
        </div>
        <div className={styles.dBtn}>
          <Button href="/contact">
            <span>Contact</span>
            <img src="/arrow-right.svg" alt="arrow" />
          </Button>
        </div>
      </section>
    </Container>
  </div>
)

export default Footer
