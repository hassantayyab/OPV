import styles from './member.module.scss'

const Member = ({ data }) => (
  <div id={styles.member}>
    <div className={styles.wrapper}>
      <div className={styles.designation}>
        <div>{data.designation}</div>
      </div>
      <div className={styles.description}>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <div className={styles.actions}>
          <button type="button">
            <img src="/arrow-down.svg" alt="expand button" />
          </button>
          <img src="/twitter.svg" alt="social profile link" />
        </div>
      </div>
      <div className={styles.image}>
        <img src={data.image} alt="member" />
      </div>
    </div>
  </div>
)

export default Member
