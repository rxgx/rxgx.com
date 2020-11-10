import styles from './Footer.module.css'

export default function Footer () {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright &copy; {year} RXGX, LLC &middot; Made with &hearts; in PDX
      </p>
    </footer>
  )
}
