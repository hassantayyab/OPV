import Container from '../container'
import styles from './contact.module.scss'

const Contact = () => (
  <div className={styles.contact}>
    <Container>
      <div className={styles.wrapper}>
        <h4>In good company.</h4>

        <div className={styles.row}>
          <div className={styles.leftSec}>
            <div className={styles.selection}>
              <span>I'm enquiring about</span>
              <label htmlFor="investment">
                Investment
                <input type="radio" id="investment" value="investment" />
              </label>
              <label htmlFor="investment">
                Partnerships
                <input type="radio" id="partnerships" value="partnerships" />
              </label>
              <label htmlFor="other">
                Other
                <input type="radio" id="other" value="other" />
              </label>
            </div>

            <div className={styles.firstRow}>
              <label htmlFor="email">
                <input type="email" id="email" placeholder="Email Address" />
              </label>
              <label htmlFor="name">
                <input type="name" id="name" placeholder="Name" />
              </label>
            </div>

            <div className={styles.secRow}>
              <label htmlFor="message">
                Message
                <textarea type="message" id="message" rows="6" />
              </label>
            </div>

            <button type="submit">Send</button>
          </div>

          <div className={styles.rightSec}>
            <span>Location</span>
            <div className={styles.address}>
              <div>21 Heathfield Gardens,</div> <div>Wandsworth, London,</div>{' '}
              <div>SW4 7fj</div>
            </div>
            <span>Find us at</span>
            <div className={styles.socials}>
              <img src="/twitter-filled.svg" alt="twitter social link" />
              <img src="/linkedin.svg" alt="linkedin social link" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export { Contact as ContactSection }
