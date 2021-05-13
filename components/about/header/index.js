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
      staggerLines(els1.current, els1.current)
      staggerLines(els2.current, els2.current, { start: 'top 95%' })
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <div className={styles.header}>
      <Container>
        <section>
          <h6 className="aLine">
            <div ref={(e) => els1.current.push(e)}>About</div>
          </h6>
          <h2>
            <div className="aLine">
              <div ref={(e) => els1.current.push(e)}>
                A process that’s open, and a team
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => els1.current.push(e)}>
                that’s agile – to light the way for
              </div>
            </div>
            <div className="aLine">
              <div ref={(e) => els1.current.push(e)}>Web3 trailblazers.</div>
            </div>
          </h2>
        </section>

        <section>
          <div className={styles.leftSec}>
            <div>Web3 Specialists</div>
          </div>
          <div className={styles.rightSec}>
            <p>
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
