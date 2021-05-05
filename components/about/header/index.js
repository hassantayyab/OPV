import Container from '../../container'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <section>
          <h6>About</h6>
          <h2>
            Open Process invests in seed and private sale rounds into promising
            and upcoming crypto projects.
          </h2>
        </section>

        <section>
          <div className={styles.leftSec}>
            <div>
              An agile approach to finding the best projects in the business
            </div>
          </div>
          <div className={styles.rightSec}>
            <p>
              <span>OPV is an SF-based seed investor.</span>
              <span>
                We are way pavers for founders, making vital connections for
                fundraising, talent, customers and advice.
              </span>
              <span>
                We are dot con÷nectors, counting the world’s most visionary
                investors, founders and industry leaders as our allies.
              </span>
              <span>
                We are first movers, operating at the speed of our founders and
                matching the creative hustle required to achieve unimaginable
                goals.
              </span>
            </p>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Header
