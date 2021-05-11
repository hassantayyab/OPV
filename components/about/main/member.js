import { useEffect, useRef, useState } from 'react'
import { staggerLines } from '../../animations'
import styles from './member.module.scss'

const Member = ({ data }) => {
  const [expanded, setexpanded] = useState(false)

  const containerRef = useRef(null)
  const els = useRef([])

  useEffect(() => {
    staggerLines(containerRef.current, els.current)
  }, [])

  return (
    <div id={styles.member}>
      <div className={styles.wrapper} ref={containerRef}>
        <div className={styles.designation} ref={(e) => els.current.push(e)}>
          <div>{data.designation}</div>
        </div>
        <div className={styles.description} ref={(e) => els.current.push(e)}>
          <h4>{data.name}</h4>
          <p className={`${expanded ? '' : styles.expanded}`}>
            {data.description}
          </p>
          <div className={styles.actions}>
            <button type="button" onClick={() => setexpanded(!expanded)}>
              <img
                src="/arrow-down.svg"
                alt="expand button"
                className={`${expanded ? styles.expanded : ''}`}
              />
            </button>
            <img src="/twitter.svg" alt="social profile link" />
          </div>
        </div>
        <div className={styles.image} ref={(e) => els.current.push(e)}>
          <img src={data.image} alt="member" />
        </div>
      </div>
    </div>
  )
}

export default Member
