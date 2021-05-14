import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { staggerLines } from '../../animations'
import styles from './member.module.scss'

const Member = ({ data }) => {
  const [expanded, setexpanded] = useState(false)
  const textRef = useRef(null)
  const els = useRef([])

  useEffect(() => {
    staggerLines(els.current, { yPercent: 0, y: 20 })
  }, [])

  useEffect(() => {
    if (!expanded) {
      gsap.to(textRef.current, { duration: 0.5, height: 0 })
    } else {
      gsap.set(textRef.current, { height: 'auto' })
      gsap.from(textRef.current, {
        duration: 0.5,
        height: 0,
        onComplete: ScrollTrigger.refresh,
      })
    }
  }, [expanded])

  return (
    <div id={styles.member}>
      <div className={styles.wrapper}>
        <div className={styles.designation} ref={(e) => (els.current[0] = e)}>
          <div>{data.designation}</div>
        </div>
        <div className={styles.description} ref={(e) => (els.current[1] = e)}>
          <h4>{data.name}</h4>
          <div className={styles.content}>
            <div
              dangerouslySetInnerHTML={{ __html: data.description.default }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: data.description.hidden }}
              ref={textRef}
              className={styles.hidden}
            />
          </div>
          <div className={styles.actions}>
            <button type="button" onClick={() => setexpanded(!expanded)}>
              <img
                src="/arrow-down.svg"
                alt="expand button"
                className={`${expanded ? styles.expanded : ''}`}
              />
            </button>
            <a href={data.profile} target="_blank" rel="noreferrer">
              <img src="/twitter.svg" alt="social profile link" />
            </a>
          </div>
        </div>
        <div className={styles.image} ref={(e) => (els.current[2] = e)}>
          <img src={data.image} alt="member" />
        </div>
      </div>
    </div>
  )
}

export default Member
