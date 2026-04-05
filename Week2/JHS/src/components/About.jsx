import styles from '../styles/About.module.scss'

export default function About({ profile }) {
  const { name, photo, contacts, education, work, skills, activities } = profile

  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.sectionTitle}>ABOUT</h2>

      <div className={styles.aboutGrid}>

        <div className={styles.profileCard}>
          <img src={photo} alt="프로필" className={styles.profilePhoto} />
          <p className={styles.profileName}>{name}</p>
          <ul className={styles.contactList}>
            {contacts.map(({ icon, alt, text }, i) => (
              <li key={i}>
                <img src={icon} alt={alt} className={styles.contactIcon} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>EDUCATION</p>
            {education.map((line, i) => (
              <p className={styles.infoValue} key={i}>{line}</p>
            ))}
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>WORK</p>
            <p className={styles.infoValue}>{work}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>SKILLS</p>
            {skills.map((skill) => (
              <p className={styles.infoValue} key={skill}>{skill}</p>
            ))}
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>ACTIVITIES</p>
            {activities.map((act) => (
              <p className={styles.infoValue} key={act}>{act}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}