import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/data'
import styles from './Projects.module.css'

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className={styles.projects} ref={ref} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.labelNum}>03</span>
          <span>Work</span>
        </motion.div>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 id="projects-heading" className={styles.heading}>
            Featured projects
          </h2>
          <p className={styles.subheading}>Selected work from the last few years.</p>
        </motion.div>

        <div className={styles.list} role="list">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className={`${styles.card}${project.live ? ` ${styles.cardClickable}` : ''}`}
              role="listitem"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              onClick={project.live ? () => window.open(project.live, '_blank', 'noopener,noreferrer') : undefined}
            >
              <div className={styles.cardAccent} aria-hidden="true" />
              <div className={styles.cardNum} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className={styles.cardBody}>
                <header className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <span className={styles.cardYear}>{project.year}</span>
                </header>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTech} aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardLinks}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`${project.name} source on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub <ArrowIcon />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`${project.name} live site`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live <ArrowIcon />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
