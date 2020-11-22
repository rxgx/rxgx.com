import styles from './Header.module.css'

export default function Header () {
  return (
    <header className={styles.root}>
      <h1 className={styles.container}>
        <span className={styles.identity}>RXGX</span>
        <span className={styles.title}>
          Web Interface Design &amp; Architecture
        </span>
        <em className={styles.separator}>by</em>
        <span className={styles.name}>Ryan Gasparini</span>
      </h1>
    </header>
  )
}
