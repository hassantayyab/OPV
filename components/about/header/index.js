import { useEffect, useRef } from 'react'
import { useReady } from '../../../context'
import { staggerLines } from '../../animations'
import Container from '../../container'
import styles from './header.module.scss'

const Header = () => {
  const els1 = useRef([])
  const els2 = useRef([])

  const { isReady } = useReady()

  useEffect(() => {
    if (isReady) {
      staggerLines(els1.current)
      staggerLines(els2.current, { yPercent: 0, y: 15 })
    }
  }, [isReady])

  return (
    <div className={styles.header}>
      <Container>
        <section>
          <h6 className="aLine">
            <div ref={(e) => (els1.current[0] = e)}>About</div>
          </h6>
          <h2>
            <div className="aLine">
              <div ref={(e) => (els1.current[1] = e)}>
                A process that’s open, and a team
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => (els1.current[2] = e)}>
                that’s agile – to light the way for
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => (els1.current[3] = e)}>Web3 trailblazers.</div>
            </div>
          </h2>
        </section>

        <section>
          <div className={styles.leftSec}>
            <div>Web3 Specialists</div>
          </div>
          <div className={styles.rightSec}>
            <p>
              <span ref={(e) => (els2.current[0] = e)}>
                We are innovation enablers.
              </span>
              <span ref={(e) => (els2.current[1] = e)}>
                We are fluid and adaptive, realising every good idea has a path
                to success, but every path is different.
              </span>
              <span ref={(e) => (els2.current[2] = e)}>
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
