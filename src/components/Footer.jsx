import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Satar Hassni
        </p>
        <p className={styles.built}>
          Built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}
