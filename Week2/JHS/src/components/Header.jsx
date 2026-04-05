import { useEffect, useState } from 'react'
import styles from '../styles/Header.module.scss'

const NAV_LINKS = [
  { label: 'ABOUT',   href: '#about' },
  { label: 'HOBBY',   href: '#hobby' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Header() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]')
      const scrollY = window.pageYOffset
      sections.forEach((section) => {
        const top = section.offsetTop - 150
        const id  = section.getAttribute('id')
        if (scrollY >= top) setActiveId(id)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <a
        href="#hero"
        className={styles.navLogo}
        onClick={(e) => handleClick(e, '#hero')}
      >
        PORTFOLIO.
      </a>
      <ul className={styles.navMenu}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={activeId === href.slice(1) ? styles.active : ''}
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}