import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { staggerLines } from '../../animations'
import styles from './member.module.scss'

const Member = ({ data }) => {
  const [expanded, setexpanded] = useState(false)
  const textRef = useRef(null)
  const els = useRef([])

  const circleRef = useRef()

  useEffect(() => {
    const l = circleRef.current.getTotalLength()
    gsap.set(circleRef.current, {
      strokeDashoffset: l,
      strokeDasharray: l,
    })

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

  function handleMouseEnter() {
    gsap.to(circleRef.current, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'expo',
    })
  }

  function handleMouseLeave() {
    const l = circleRef.current.getTotalLength()
    gsap.to(circleRef.current, {
      strokeDashoffset: l,
      duration: 1.5,
      ease: 'expo',
    })
  }

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
            <button
              type="button"
              onClick={() => setexpanded(!expanded)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                width="30"
                height="30"
                viewBox="-2 -2 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2781 12.2413L15.2412 20.2781L6.99998 12.0368"
                  className={`${styles.arrow} ${
                    expanded ? styles.expanded : ''
                  }`}
                />
                <circle cx="15" cy="15" r="14.5" />
                <path
                  className={styles.circleActive}
                  ref={circleRef}
                  d="M0.5,15a14.5,14.5 0 1,0 29,0a14.5,14.5 0 1,0 -29,0"
                />
              </svg>
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
