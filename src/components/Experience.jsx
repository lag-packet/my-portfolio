import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/data'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className={styles.experience} ref={ref} aria-labelledby="exp-heading">
      <div className={styles.inner}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.labelNum}>04</span>
          <span>Experience</span>
        </motion.div>

        <motion.h2
          id="exp-heading"
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Where I've worked
        </motion.h2>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className={styles.entry}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`${styles.dot} ${i === 0 ? styles.dotActive : ''}`}
                aria-hidden="true"
              >
                {i === 0 && <div className={styles.dotPulse} />}
              </div>

              <div className={styles.entryContent}>
                <div className={styles.entryHeader}>
                  <div>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.role}>{job.role}</p>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className={styles.bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
