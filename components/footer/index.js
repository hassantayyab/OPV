import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { staggerLines, zoomIn } from '../animations'
import Container from '../container'
import Button from '../utils/button'
import styles from './footer.module.scss'

const Footer = ({ children }) => {
  const s = useRef()
  const els = useRef([])
  const dekstopBtnRef = useRef()
  const mobileBtnRef = useRef()

  useEffect(() => {
    staggerLines(s.current, els.current)
    zoomIn(dekstopBtnRef.current, { scrollTrigger: dekstopBtnRef.current })
    zoomIn(mobileBtnRef.current, { scrollTrigger: mobileBtnRef.current })
  }, [])

  return (
    <footer className={styles.footer}>
      <Container>
        <h3>{children}</h3>

        <section>
          <div className={styles.leftCol}>
            <h5>Start a conversation</h5>
            <div className={styles.mBtn} ref={mobileBtnRef}>
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
          <div className={styles.dBtn} ref={dekstopBtnRef}>
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
