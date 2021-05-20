import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { staggerLines } from '../animations'

const Menus = ({ styles, openChange, open, linkClick, menu }) => {
  const router = useRouter()

  const linksRef = useRef([])
  useEffect(() => {
    if (open) {
      staggerLines(linksRef.current)
    }
  }, [open])

  return (
    <>
      {menu.map((m, i) => (
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
