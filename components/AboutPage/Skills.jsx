import styles from './Skills.module.css'
import Section, { Headline } from './Section'

export default function Skills () {
  return (
    <Section className={styles.root} id='skills'>
      <article className={styles.content}>
        <Headline>A dynamic guy for the static&nbsp;quo</Headline>

        <p>
          Ryan got his start as an HTML/CSS hobbyist but quickly moved on to
          projects of greater scale and challenge. Since 2001, the launch of
          this very site, he's matured from slicing Photoshop documents to a
          role in senior-level engineering.
        </p>

        <p>
          Using ActionScript, he has built software demos for a CAD company and
          an interactive gallery for Phoenix Art Museum. With PHP, he built his
          first multi-site platform and content management system to serve about
          100 marketing sites for Best Western.
        </p>

        <p>
          After learning Ruby on Rails, Ryan was able to devote more time to the
          front-end. He built a video library prototype using Backbone,
          refactored a reporting dashboard in Ember, and collaborated on an
          Angular app that organized SEC filings for Fortune 500 companies.
        </p>

        <p>
          Today, he can be found balancing his time between writing JavaScript
          and trying to get to platinum level in competive Overwatch. Ryan is{' '}
          <a href='#contact'>currently available</a> for contract work or
          full-time employment. The following are an overview of his talents and
          experience.
        </p>
      </article>

      <aside className={styles.skills}>
        <div className={styles.skill}>
          <div className='container'>
            <div className='content'>
              <h3 className={styles.name}>Product Design</h3>

              <p className={styles.excerpt}>
                Information architecture, user experience, paper sketching,
                storyboards, and functional prototypes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className='container'>
            <div className='content'>
              <h3 className={styles.name}>JavaScript</h3>

              <p className={styles.excerpt}>
                Client-side application development with React, Ember, Backbone,
                and Angular.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className='skill-content'>
            <h3 className={styles.name}>Web Standards</h3>

            <p className={styles.excerpt}>
              Flexible layouts, HTML5 APIs, Canvas, Web Components, SASS, and
              CSS frameworks.
            </p>
          </div>
        </div>

        <div className={styles.skill}>
          <div className='skill-content'>
            <h3 className={styles.name}>Full-Stack</h3>

            <p className={styles.excerpt}>
              Node, Ruby, Ruby on Rails, PHP, Apache, Grails, Groovy, proxies,
              DNS, networking, and deployment.
            </p>
          </div>
        </div>

        <div className={styles.skill}>
          <div className='skill-content'>
            <h3 className={styles.name}>Databases</h3>

            <p className={styles.excerpt}>
              MySQL/MariaDB, Postgres, Redis, MongoDB. Writes and EXPLAINs SQL
              queries.
            </p>
          </div>
        </div>

        <div className={styles.skill}>
          <div className='skill-content'>
            <h3 className={styles.name}>Version Control</h3>

            <p className={styles.excerpt}>
              Experience with Mercurial and Git. Follows feature branching
              strategy. Merging and Rebase.
            </p>
          </div>
        </div>
      </aside>
    </Section>
  )
}
