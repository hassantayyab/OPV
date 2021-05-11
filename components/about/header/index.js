import { useEffect, useRef } from 'react'
import { staggerLines } from '../../animations'
import Container from '../../container'
import styles from './header.module.scss'

const Header = () => {
  const s1 = useRef()
  const els1 = useRef([])

  const s2 = useRef()
  const els2 = useRef([])

  useEffect(() => {
    staggerLines(s1.current, els1.current)
    staggerLines(s2.current, els2.current, { start: 'top 95%' })
  }, [])

  return (
    <div className={styles.header}>
      <Container>
        <section ref={s1}>
          <h6 ref={(e) => els1.current.push(e)}>About</h6>
          <h2 ref={(e) => els1.current.push(e)}>
            A process that’s open, and a team that’s agile – to light the way
            for Web3 trailblazers.
          </h2>
        </section>

        <section>
          <div className={styles.leftSec}>
            <div>Web3 Specialists</div>
          </div>
          <div className={styles.rightSec}>
            <p ref={s2}>
              <span ref={(e) => els2.current.push(e)}>
                We are innovation enablers.
              </span>
              <span ref={(e) => els2.current.push(e)}>
                We are fluid and adaptive, realising every good idea has a path
                to success, but every path is different.
              </span>
              <span ref={(e) => els2.current.push(e)}>
                We guide nascent projects. Helping nourish and grow conceptual
                beginnings into powerful disruptors. With a network of industry
                leaders and specialists, the right guidance is always at hand.
              </span>
            </p>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Header
