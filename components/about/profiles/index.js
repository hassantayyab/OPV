import { useEffect, useRef } from 'react'
import { staggerLines } from '../../animations'
import Container from '../../container'
import styles from './profiles.module.scss'

const Profiles = () => {
  const containerRef = useRef()
  const els = useRef([])

  useEffect(() => {
    staggerLines(containerRef.current, els.current)
  }, [])

  return (
    <div className={styles.profiles} id="featured-profiles">
      <Container>
        <div className={styles.wrapper} ref={containerRef}>
          <h4>Featured Profiles</h4>
          <img
            src="/profile-1.svg"
            alt="profile 2"
            ref={(e) => els.current.push(e)}
          />
          <img
            src="/profile-2.svg"
            alt="profile 1"
            ref={(e) => els.current.push(e)}
          />
          <img
            src="/profile-3.svg"
            alt="profile 3"
            ref={(e) => els.current.push(e)}
          />
          <img
            src="/profile-4.svg"
            alt="profile 4"
            ref={(e) => els.current.push(e)}
          />
        </div>
      </Container>
    </div>
  )
}

export default Profiles
