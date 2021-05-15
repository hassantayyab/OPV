import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { staggerLines } from '../animations'

export const menus = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/about#featured-profiles',
    title: 'Portfolio',
  },
  {
    link: '/contact',
    title: 'Start a Conversation',
  },
]

const Menus = ({ styles, openChange, open, linkClick }) => {
  const router = useRouter()

  const linksRef = useRef([])
  useEffect(() => {
    if (open) {
      staggerLines(linksRef.current, { delay: 0.3, scrollTrigger: false })
    }
  }, [open])

  return (
    <>
      {menus.map((m, i) => (
        <div
          key={i}
          role="button"
          tabIndex="0"
          id={`${router.pathname === m.link ? 'active' : ''}`}
          className={`${router.pathname === m.link ? styles.active : ''} aLine`}
          onClick={openChange}
          onKeyPress={openChange}
        >
          <div
            role="button"
            tabIndex="0"
            ref={(e) => (linksRef.current[i] = e)}
            onClick={(e) => linkClick && linkClick(e)}
            onKeyPress={(e) => linkClick && linkClick(e)}
          >
            <Link href={m.link}>{m.title}</Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Menus
