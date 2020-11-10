import styles from './Figure.module.css'

export default function Figure () {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.display}>
          <div className={styles.bubble}>
            <i className={`${styles.icon} fa fa-code`} />
          </div>
          <div className={styles.browser}>
            <div className={styles.menubar}>
              <div className={styles.button} />
              <div className={styles.button} />
              <div className={styles.button} />
            </div>
            <div className={styles.viewport}>
              <div className={styles.menu} />
              <div className={styles.header} />
              <div className={styles.column} />
              <div className={styles.column} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
