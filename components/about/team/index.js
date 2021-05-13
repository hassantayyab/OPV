import Container from '../../container'
import styles from './main.module.scss'
import Member from './member'
import { members } from './members'

const Main = () => {
  const renderMembers = () =>
    members.map((m, i) => (
      <div key={i} className={styles.member}>
        <Member data={m} />
      </div>
    ))

  return (
    <main id={styles.main}>
      <Container>
        <div className={styles.wrapper}>
          <h3>The Team</h3>
          <div className={styles.members}>{renderMembers()}</div>
        </div>
      </Container>
    </main>
  )
}

export default Main
