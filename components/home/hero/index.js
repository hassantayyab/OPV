import styles from './hero.module.scss'

const handleScroll = (ref) => {
  if (typeof window !== 'undefined') {
    if (ref) {
      const element = document.querySelector(ref)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }
}

const Hero = ({ scrollRef }) => (
  <div className={styles.hero}>
    <h1>
      <div>Confidence</div>
      <div>Through</div>
      <div>Clarity</div>
    </h1>
    <button type="button" onClick={() => scrollRef && handleScroll(scrollRef)}>
      <img src="/down-arrow.svg" alt="down arrow" />
    </button>
  </div>
)

export default Hero
