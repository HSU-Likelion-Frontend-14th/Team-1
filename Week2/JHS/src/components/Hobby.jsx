import styles from '../styles/Hobby.module.scss'

export default function Hobby({ hobbies }) {
  return (
    <section className={styles.hobbySection} id="hobby">
      <h2 className={styles.sectionTitle}>HOBBY</h2>

      <div className={styles.hobbyGrid}>
        {hobbies.map(({ label, img, alt }) => (
          <div className={styles.hobbyCard} key={label}>
            <div className={styles.hobbyHeader}>
              <span>{label}</span>
            </div>
            <div className={styles.hobbyImgWrap}>
              <img src={img} alt={alt} className={styles.hobbyImg} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}