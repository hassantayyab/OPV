import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { staggerLines } from '../animations'
import Container from '../container'
import Button from '../utils/button'
import styles from './footer.module.scss'

const Footer = ({ children }) => {
  const s = useRef()
  const els = useRef([])

  useEffect(() => {
    staggerLines(s.current, els.current)
  }, [])

  return (
    <footer className={styles.footer}>
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
            <div className={styles.links} ref={s}>
              <Link href="mailto:hello@openprocessventures.com">
                <a ref={(e) => els.current.push(e)}>
                  hello@openprocessventures.com
                </a>
              </Link>
              <Link href="/terms-and-conditions">
                <a ref={(e) => els.current.push(e)}>Ts & Cs</a>
              </Link>
              <Link href="/privacy-policy">
                <a ref={(e) => els.current.push(e)}>Privacy Policy</a>
              </Link>
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
    </footer>
  )
}

export default Footer
