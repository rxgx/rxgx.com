import styles from './Section.module.css'

export function Headline ({ children }) {
  return <h1 className={styles.headline}>{children}</h1>
}

export function Heading ({ children }) {
  return <h2 className={styles.heading}>{children}</h2>
}

export default function Section ({ children, id: elementId }) {
  return (
    <section id={elementId} className={styles.section}>
      <a name={elementId} />

      <div className='container'>{children}</div>
    </section>
  )
}
