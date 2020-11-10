import styles from "./AboutPage.module.css"

export default function About () {
  const { detail, section, skill, skills } = styles
  return (
    <>
      <a name="about" />
      <section id="about" className={section}>
        <div className="container">
          <aside className="sidebar">
            <figure className="photo">
              <img className="image" src="./img/ryan.jpg" />
            </figure>

            <p className="intro">
              Meet Ryan Gasparini. He's a<strong>Front-end Developer</strong>,
              <strong>Interface Designer</strong>, and
              <strong>Software Engineer</strong> from Portland, OR.
            </p>

            <p className="note">
              The above picture is taken in Downtown Phoenix where Ryan is
              <a
                href="https://www.goruck.com/apparel/tops/"
                title="GoRuck apparel"
              >
                showing support
              </a>
              for all those currently deployed.
            </p>
          </aside>

          <article className="content">
            <h1 className="headline">
              Mechanical&nbsp;execution, creative&nbsp;thinking
            </h1>

            <p>
              Early in life, Ryan Gasparini had a dream to design automobiles.
              As a child he made various drawings of cars and trucks on napkins,
              placemats, and notebooks. In high school, he elected to take
              classes in manual and computer-aided drafting. His passion and
              skill for drawing and drafting earned him many
              <a href="http://www.mites.cc/">regional awards</a> in Mechanical
              Drawing.
            </p>

            <p>
              After graduation, he enrolled in university to pursue a degree in
              mechanical engineering. Unfortunately, not having any experience
              in the matter, he failed the shop and material classes.
              Surprisingly, though, when it came to computer programming, he was
              a natural. It was ultimately a C programming class that influenced
              him to change his career path.
            </p>

            <p>
              Aside from drafting, Ryan spent many afternoons in the high school
              computer lab. He spent the majority of that time learning how to
              build a snowboarding page on Geocities. That time spent tinkering
              with tags and selectors gave him the tools to understand semantic
              markup and cascading style.
            </p>

            <p>
              At the time, the Internet was just a hobby for him. Once he
              discovered JavaScript and, eventually, ActionScript, he decided to
              use his love of the Web with his knowledge of C to make the
              Internet a better place.
            </p>

            <p>
              Even today, Ryan continues to pursue design and programming. He
              has earned the opportunity, both as employee and consultant, to
              build sites for a wide range of organizations. In an industry
              where any random guy named Ryan can learn these skills, he has
              separated himself from the rest by merging what he has learned
              with his gifts of good taste, empathy, and the pursuit of
              simplicity.
            </p>
          </article>
        </div>
      </section>

      <a name="skills" />

      <section id="skills" className={section}>
        <div className="container">
          <article className="content">
            <h1 className="headline">A dynamic guy for the static&nbsp;quo</h1>

            <p>
              Ryan got his start as an HTML/CSS hobbyist but quickly moved on to
              projects of greater scale and challenge. Since 2001, the launch of
              this very site, he's matured from slicing Photoshop documents to a
              role in senior-level engineering.
            </p>

            <p>
              Using ActionScript, he's built software demos for a CAD company
              and an interactive gallery for Phoenix Art Museum. With PHP, he
              built his first multi-site platform and content management system
              to serve about 100 marketing sites for Best Western.
            </p>

            <p>
              After learning Ruby on Rails, Ryan was able to devote more time to
              the front-end. He built a video library prototype using Backbone,
              refactored a reporting dashboard in Ember, and collaborated on an
              Angular app that organized SEC filings for Fortune 500 companies.
            </p>

            <p>
              Today, he can be found balancing his time between writing
              JavaScript and trying to get to platinum level in competive
              Overwatch. Ryan is
              <a href="#contact">currently available</a> for contract work or
              full-time employment. The following are an overview of his talents
              and experience.
            </p>

            <p></p>
          </article>

          <aside className={skills}>
            <div className={skill}>
              <div className="skill-container">
                <div className="skill-content">
                  <h3 className="name">Product Design</h3>

                  <p className="excerpt">
                    Information architecture, user experience, paper sketching,
                    storyboards, and functional prototypes.
                  </p>
                </div>
              </div>
            </div>

            <div className={skill}>
              <div className="skill-container">
                <div className="skill-content">
                  <h3 className="name">JavaScript</h3>

                  <p className="excerpt">
                    Client-side application development with React, Ember,
                    Backbone, and Angular.
                  </p>
                </div>
              </div>
            </div>

            <div className={skill}>
              <div className="skill-content">
                <h3 className="name">Web Standards</h3>

                <p className="excerpt">
                  Flexible layouts, HTML5 APIs, Canvas, Web Components, SASS,
                  and CSS frameworks.
                </p>
              </div>
            </div>

            <div className={skill}>
              <div className="skill-content">
                <h3 className="name">Full-Stack</h3>

                <p className="excerpt">
                  Node, Ruby, Ruby on Rails, PHP, Apache, Grails, Groovy,
                  proxies, DNS, networking, and deployment.
                </p>
              </div>
            </div>

            <div className={skill}>
              <div className="skill-content">
                <h3 className="name">Databases</h3>

                <p className="excerpt">
                  MySQL/MariaDB, Postgres, Redis, MongoDB. Writes and EXPLAINs
                  SQL queries.
                </p>
              </div>
            </div>

            <div className={skill}>
              <div className="skill-content">
                <h3 className="name">Version Control</h3>

                <p className="excerpt">
                  Experience with Mercurial and Git. Follows feature branching
                  strategy. Merging and Rebase.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="resume" className={section}>
        <a name="resume"></a>

        <div className="container">
          <h1 className="headline">
            Featured projects and work&nbsp;experience
          </h1>

          <h2 className="title"></h2>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="https://ignw.com">
                IGNW (Nike)
              </a>
            </h3>

            <h4 className="dates">October 2019 &ndash; August 2020</h4>

            <p className="content">
              Lead on component library, state management, and React tooling for
              internal consumer product catalog platform. Cross department
              collaboration on servers, databases, and deployments for internal
              product tools. Created deployment strategy to create branch builds
              per PR and integrate with GitHub Enterprise APIs.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="https://sibipro.com">
                SIBI
              </a>
            </h3>

            <h4 className="dates">August 2018 &ndash; August 2019</h4>

            <p className="content">
              Lead frontend developer for React single page app deployed to the{" "}
              <a href="https://zeit.co/now">Now</a> service via continuous
              integration through
              <a href="https://circleci.com">CircleCI</a> v2.1 workflows with
              Orbs. Data discovery and introspection via Apollo GraphQL client
              and server.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="https://grateful.ventures">
                Grateful Ventures
              </a>
            </h3>

            <h4 className="dates">December 2017 &ndash; July 2018</h4>

            <p className="content">
              Contributor to creation of Grateful.co website (React, GraphQL) as
              well as architecture and structure (NodeJS, Express, AWS DynamoDB,
              AWS Step Functions, AWS Lambda) for financial dashboard.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="http://www.demark.com">
                DeMark Analytics
              </a>
            </h3>

            <h4 className="dates">July 2015 &ndash; October 2017</h4>

            <p className="content">
              Entered as software engineer but progressed into product manager
              role. Contributed on NodeJS microservices as well as the React +
              Redux + Immutable app for a browser-based financial analytics
              application.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="http://authoritylabs.com">
                Authority Labs
              </a>
            </h3>

            <h4 className="dates">June 2013 &ndash; March 2014</h4>

            <p className="content">
              Rebuilt an <span className="hashtag">AngularJS</span> SEO ranking
              dashboard with <span className="hashtag">EmberJS</span>. Dashboard
              was optimized to render for more devices, increase amount of
              displayed rankings, and reduce round trips in browser.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="http://www.workiva.com">
                Workiva
              </a>
            </h3>

            <h4 className="dates">November 2012 &ndash; June 2013</h4>

            <p className="content">
              Contributed to building an Acrobat-like document viewer and
              document management tool for users of Fortune 500 companies.
              Authored many services in vanilla JavaScript as well as
              <span className="hashtag">AngularJS</span> components.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="http://pathwaystv.com">
                Pathways Platform
              </a>
            </h3>

            <h4 className="dates">January 2012 &ndash; October 2012</h4>

            <p className="content">
              Lead a transition to a product-based business for professional
              recruiting company. Combined existing
              <span className="hashtag">PHP</span> sites and
              <span className="hashtag">MySQL</span> databases into a
              <span className="hashtag">Rails</span> platform. Built an API and
              CMS to host customized video channels and job boards.
            </p>
          </div>

          <div className={detail}>
            <h3 className="company">
              <a className="name" href="http://imemories.com">
                iMemories
              </a>
            </h3>

            <h4 className="dates">December 2010 &ndash; September 2011</h4>

            <p className="content">
              Lead effort to convert an enterprise multimedia library from Flash
              to <span className="hashtag">HTML5</span>. Completed prototype
              with multi-layout, drag and drop interface. Implemented a
              JavaScript framework inspired by
              <span className="hashtag">BackboneJS</span>. Contributed to Grails
              API, tests, and Maven packages.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
