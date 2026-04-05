import styles from '../styles/Hero.module.scss'

export default function Hero({ name, message }) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroText}>
        <h2>
          안녕하세요!<br />
          제 이름은&nbsp;&nbsp;{name}입니다.<br />
          {message}
        </h2>
      </div>
    </section>
  )
}