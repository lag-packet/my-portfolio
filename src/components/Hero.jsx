import { motion } from 'framer-motion'
import { personal } from '../data/data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <motion.div
        className={styles.gridBg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.span
              className={styles.eyebrowLine}
              initial={{ width: 0 }}
              animate={{ width: '28px' }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              aria-hidden="true"
            />
            Available for work
          </motion.p>

          <h1 className={styles.name} aria-label={personal.name}>
            <motion.span
              className={styles.nameLine}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Satar
            </motion.span>
            <motion.span
              className={styles.nameLine}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            >
              Hassni
              <span className={styles.cursor} aria-hidden="true">_</span>
            </motion.span>
          </h1>

          <motion.div
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <p className={styles.title}>{personal.title}</p>
            <p className={styles.tagline}>{personal.tagline}</p>
          </motion.div>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#projects"
              className={styles.btnPrimary}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className={styles.btnSecondary}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          aria-hidden="true"
        >
          <div className={styles.scrollLine} />
          <span className={styles.scrollLabel}>scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
