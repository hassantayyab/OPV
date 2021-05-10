import Container from '../../container'
import styles from './profiles.module.scss'

const Profiles = () => (
  <div className={styles.profiles} id="featured-profiles">
    <Container>
      <div className={styles.wrapper}>
        <h4>Featured Profiles</h4>
        <img src="/profile-2.svg" alt="profile 1" />
        <img src="/profile-1.svg" alt="profile 2" />
        <img src="/profile-3.svg" alt="profile 3" />
        <img src="/profile-4.svg" alt="profile 4" />
      </div>
    </Container>
  </div>
)

export default Profiles
