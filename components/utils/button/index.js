import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './button.module.scss'

const Button = ({ children, href }) => {
  const router = useRouter()

  const pathRef = useRef()
  useEffect(() => {
    const l = pathRef.current.getTotalLength()
    gsap.set(pathRef.current, {
      strokeDashoffset: l,
      strokeDasharray: l,
    })
  }, [])

  function handleMouseEnter() {
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'expo',
    })
  }

  function handleMouseLeave() {
    const l = pathRef.current.getTotalLength()
    gsap.to(pathRef.current, {
      strokeDashoffset: l,
      duration: 1.5,
      ease: 'expo',
    })
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => router.push(href)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <svg
        width="267"
        height="77"
        viewBox="0 0 267 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="265" height="75" rx="37.5" ref={pathRef} />
      </svg> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 267 77"
        className={styles.overlay}
      >
        <path
          d="M38.5,1h190A37.5,37.5,0,0,1,266,38.5h0A37.5,37.5,0,0,1,228.5,76H38.5A37.5,37.5,0,0,1,1,38.5H1A37.5,37.5,0,0,1,38.5,1Z"
          fill="none"
        />
        <path
          className={styles.pathActive}
          d="M38.5,1h190A37.5,37.5,0,0,1,266,38.5h0A37.5,37.5,0,0,1,228.5,76H38.5A37.5,37.5,0,0,1,1,38.5H1A37.5,37.5,0,0,1,38.5,1Z"
          fill="none"
          ref={pathRef}
        />
      </svg>
      {children}
    </button>
  )
}

export default Button
