import Section, { Headline } from './Section'
import styles from './Contact.module.css'

export default function Contact () {
  return (
    <Section id='contact' className={styles.root}>
      <Headline className={styles.headline}>
        Discover more about Ryan on these internets
      </Headline>

      <ul className={styles.items}>
        <li className={styles.item}>
          <a className={styles.hitarea} href='mailto:ryan@rxgx.com'>
            <i className='fa fa-envelope-o' />
            <span className={styles.text}>Email</span>
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.hitarea} href='https://github.com/rxgx'>
            <i className='fa fa-github' />
            <span className={styles.text}>Github</span>
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.hitarea} href='https://www.linkedin.com/in/rxgx'>
            <i className='fa fa-linkedin' />
            <span className={styles.text}>LinkedIn</span>
          </a>
        </li>

        <li className={styles.item}>
          <a
            className={styles.hitarea}
            href='https://stackoverflow.com/users/265807/ryan'
          >
            <i className='fa fa-stack-overflow' />
            <span className={styles.text}>Stack Overflow</span>
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.hitarea} href='https://twitter.com/rxgx'>
            <i className='fa fa-twitter' />
            <span className={styles.text}>Twitter</span>
          </a>
        </li>
      </ul>
    </Section>
  )
}
