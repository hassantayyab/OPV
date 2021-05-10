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

const Menus = ({ styles }) => {
  const router = useRouter()

  return (
    <>
      {menus.map((m, i) => (
        <div
          key={i}
          className={`${router.pathname === m.link ? styles.active : ''}`}
        >
          <Link href={m.link}>{m.title}</Link>
        </div>
      ))}
    </>
  )
}

export default Menus
