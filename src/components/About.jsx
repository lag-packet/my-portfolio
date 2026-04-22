import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { about } from '../data/data'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className={styles.about} ref={ref} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.labelNum}>01</span>
          <span>About</span>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.bioCol}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="about-heading" className={styles.heading}>
              Building software
              <br />
              <em>that actually matters.</em>
            </h2>
            <p className={styles.bio}>{about.bio}</p>
          </motion.div>

          <motion.div
            className={styles.statsCol}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {about.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
