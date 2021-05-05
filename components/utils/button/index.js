import { useRouter } from 'next/router'
import styles from './button.module.scss'

const Button = ({ children, href }) => {
  const router = useRouter()
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => router.push(href)}
    >
      {children}
    </button>
  )
}

export default Button
