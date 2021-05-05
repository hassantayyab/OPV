import Link from 'next/link'
import Container from '../container'
import Button from '../utils/button'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Container>
        <h3>
          Open Process Ventures is a crypto seed investment fund, based in
          London
        </h3>

        <section>
          <div>
            <h5>Start a conversation</h5>
            <div className={styles.separator} />
            <div className={styles.links}>
              <Link href="emaol:hello@openprocessventures.com">
                hello@openprocessventures.com
              </Link>
              <Link href="/terms-and-conditions">Ts & Cs</Link>
              <Link href="/privacy-policy">PrivacyPolicy</Link>
            </div>
          </div>
          <Button href="/contact">
            <span>Contact</span>
            <img src="/arrow-right.svg" alt="arrow" />
          </Button>
        </section>
      </Container>
    </div>
  )
}

export default Contact
