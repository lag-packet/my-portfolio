import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { useScrollSpy } from '../hooks/useScrollSpy'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['about', 'skills', 'projects', 'contact']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(40)
  const activeId = useScrollSpy(SECTION_IDS, 80)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          href="#"
          className={styles.logo}
          aria-label="Satar Hassni — Back to top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          SH
        </a>

        <nav className={styles.links} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <button
                key={label}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </button>
            )
          })}
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }, i) => {
              const id = href.replace('#', '')
              return (
                <motion.button
                  key={label}
                  className={`${styles.mobileLink} ${activeId === id ? styles.active : ''}`}
                  onClick={() => handleNavClick(href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: 'easeOut' }}
                >
                  <span className={styles.mobileLinkNum}>{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
