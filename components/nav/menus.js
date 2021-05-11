import Link from 'next/link'
import { useRouter } from 'next/router'

export const menus = [
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

const Menus = ({ styles, openChange }) => {
  const router = useRouter()

  return (
    <>
      {menus.map((m, i) => (
        <div
          role="button"
          tabIndex="0"
          key={i}
          className={`${router.pathname === m.link ? styles.active : ''}`}
          onClick={openChange}
          onKeyPress={openChange}
        >
          <Link href={m.link}>{m.title}</Link>
        </div>
      ))}
    </>
  )
}

export default Menus
