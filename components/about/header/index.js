import Container from '../../container'
import styles from './header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <Container>
      <section>
        <h6>About</h6>
        <h2>
          A process that’s open, and a team that’s agile – to light the way for
          Web3 trailblazers.
        </h2>
      </section>

      <section>
        <div className={styles.leftSec}>
          <div>Web3 Specialists</div>
        </div>
        <div className={styles.rightSec}>
          <p>
            <span>We are innovation enablers.</span>
            <span>
              We are fluid and adaptive, realising every good idea has a path to
              success, but every path is different.
            </span>
            <span>
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

export default Header
