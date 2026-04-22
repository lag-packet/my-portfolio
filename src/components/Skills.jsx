import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/data'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className={styles.skills} ref={ref} aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.labelNum}>02</span>
          <span>Skills</span>
        </motion.div>

        <h2 id="skills-heading" className={styles.sectionHeading}>
          The tools
          <br />
          <em>of the trade.</em>
        </h2>

        <div className={styles.categories}>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.categoryLabel}>{group.category}</span>
              <div className={styles.tags} role="list" aria-label={`${group.category} skills`}>
                {group.items.map((item) => (
                  <span key={item} className={styles.tag} role="listitem">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
