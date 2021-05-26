import Link from 'next/link'
import Container from '../container'
import Button from '../utils/button'
import styles from './footer.module.scss'

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    <Container>
      <h3>{children}</h3>

      <section>
        <div className={styles.leftCol}>
          <h5>Start a conversation</h5>
          <div className={styles.mBtn}>
            <Button href="/contact">
              <span>Contact</span>
              <img
                width="auto"
                height="auto"
                src="/arrow-right.svg"
                alt="arrow"
              />
            </Button>
          </div>
          <div className={styles.separator} />
          <div className={styles.links}>
            <Link href="mailto:hello@openprocessventures.com">
              <a>hello@openprocessventures.com</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a>Ts & Cs</a>
            </Link>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </div>
        </div>
        <div className={styles.dBtn}>
          <Button href="/contact">
            <span>Contact</span>
            <img
              width="100%"
              height="100%"
              src="/arrow-right.svg"
              alt="arrow"
            />
          </Button>
        </div>
      </section>
    </Container>
  </footer>
)

export default Footer
