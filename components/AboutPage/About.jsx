import Section, { Headline } from './Section'
import styles from './About.module.css'
import sectionStyles from './Section.module.css'

export default function About () {
  return (
    <Section id='about' className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <figure className={styles.photo}>
          <img className={styles.image} src='./img/ryan.jpg' />
        </figure>

        <p className={styles.intro}>
          Meet Ryan Gasparini. He's a<strong>Front-end Developer</strong>,
          <strong>Interface Designer</strong>, and
          <strong>Software Engineer</strong> from Portland, OR.
        </p>

        <p className={sectionStyles.note}>
          The above picture is taken in Downtown Phoenix where Ryan is
          <a href='https://www.goruck.com/apparel/tops/' title='GoRuck apparel'>
            showing support
          </a>
          for all those currently deployed.
        </p>
      </aside>

      <article className={styles.content}>
        <Headline>Mechanical&nbsp;execution, creative&nbsp;thinking</Headline>

        <p>
          Early in life, Ryan Gasparini had a dream to design automobiles. As a
          child he made various drawings of cars and trucks on napkins,
          placemats, and notebooks. In high school, he elected to take classes
          in manual and computer-aided drafting. His passion and skill for
          drawing and drafting earned him many
          <a href='http://www.mites.cc/'>regional awards</a> in Mechanical
          Drawing.
        </p>

        <p>
          After graduation, he enrolled in university to pursue a degree in
          mechanical engineering. Unfortunately, not having any experience in
          the matter, he failed the shop and material classes. Surprisingly,
          though, when it came to computer programming, he was a natural. It was
          ultimately a C programming class that influenced him to change his
          career path.
        </p>

        <p>
          Aside from drafting, Ryan spent many afternoons in the high school
          computer lab. He spent the majority of that time learning how to build
          a snowboarding page on Geocities. That time spent tinkering with tags
          and selectors gave him the tools to understand semantic markup and
          cascading style.
        </p>

        <p>
          At the time, the Internet was just a hobby for him. Once he discovered
          JavaScript and, eventually, ActionScript, he decided to use his love
          of the Web with his knowledge of C to make the Internet a better
          place.
        </p>

        <p>
          Even today, Ryan continues to pursue design and programming. He has
          earned the opportunity, both as employee and consultant, to build
          sites for a wide range of organizations. In an industry where any
          random guy named Ryan can learn these skills, he has separated himself
          from the rest by merging what he has learned with his gifts of good
          taste, empathy, and the pursuit of simplicity.
        </p>
      </article>
    </Section>
  )
}
