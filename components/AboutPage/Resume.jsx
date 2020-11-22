import Section, { Headline } from './Section'
import styles from './Resume.module.css'

export default function Resume () {
  const { company, content, dates, detail, hyperlink, root } = styles
  return (
    <Section className={root} id='resume'>
      <Headline>Featured projects and work&nbsp;experience</Headline>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='https://ignw.com'>
            IGNW (Nike)
          </a>
        </h3>

        <h4 className={dates}>October 2019 &ndash; August 2020</h4>

        <p className={content}>
          Lead on component library, state management, and React tooling for
          internal consumer product catalog platform. Cross department
          collaboration on servers, databases, and deployments for internal
          product tools. Created deployment strategy to create branch builds per
          PR and integrate with GitHub Enterprise APIs.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='https://sibipro.com'>
            SIBI
          </a>
        </h3>

        <h4 className={dates}>August 2018 &ndash; August 2019</h4>

        <p className={content}>
          Lead frontend developer for React single page app deployed to the{' '}
          <a href='https://zeit.co/now'>Now</a> service via continuous
          integration through <a href='https://circleci.com'>CircleCI</a> v2.1
          workflows with Orbs. Data discovery and introspection via Apollo
          GraphQL client and server.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='https://grateful.ventures'>
            Grateful Ventures
          </a>
        </h3>

        <h4 className={dates}>December 2017 &ndash; July 2018</h4>

        <p className={content}>
          Contributor to creation of Grateful.co website (React, GraphQL) as
          well as architecture and structure (NodeJS, Express, AWS DynamoDB, AWS
          Step Functions, AWS Lambda) for financial dashboard.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='http://www.demark.com'>
            DeMark Analytics
          </a>
        </h3>

        <h4 className={dates}>July 2015 &ndash; October 2017</h4>

        <p className={content}>
          Entered as software engineer but progressed into product manager role.
          Contributed on NodeJS microservices as well as the React + Redux +
          Immutable app for a browser-based financial analytics application.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='http://authoritylabs.com'>
            Authority Labs
          </a>
        </h3>

        <h4 className={dates}>June 2013 &ndash; March 2014</h4>

        <p className={content}>
          Rebuilt an <span className='hashtag'>AngularJS</span> SEO ranking
          dashboard with <span className='hashtag'>EmberJS</span>. Dashboard was
          optimized to render for more devices, increase amount of displayed
          rankings, and reduce round trips in browser.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='http://www.workiva.com'>
            Workiva
          </a>
        </h3>

        <h4 className={dates}>November 2012 &ndash; June 2013</h4>

        <p className={content}>
          Contributed to building an Acrobat-like document viewer and document
          management tool for users of Fortune 500 companies. Authored many
          services in vanilla JavaScript as well as
          <span className='hashtag'>AngularJS</span> components.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='http://pathwaystv.com'>
            Pathways Platform
          </a>
        </h3>

        <h4 className={dates}>January 2012 &ndash; October 2012</h4>

        <p className={content}>
          Lead a transition to a product-based business for professional
          recruiting company. Combined existing
          <span className='hashtag'>PHP</span> sites and
          <span className='hashtag'>MySQL</span> databases into a
          <span className='hashtag'>Rails</span> platform. Built an API and CMS
          to host customized video channels and job boards.
        </p>
      </div>

      <div className={detail}>
        <h3 className={company}>
          <a className={hyperlink} href='http://imemories.com'>
            iMemories
          </a>
        </h3>

        <h4 className={dates}>December 2010 &ndash; September 2011</h4>

        <p className={content}>
          Lead effort to convert an enterprise multimedia library from Flash to{' '}
          <span className='hashtag'>HTML5</span>. Completed prototype with
          multi-layout, drag and drop interface. Implemented a JavaScript
          framework inspired by
          <span className='hashtag'>BackboneJS</span>. Contributed to Grails
          API, tests, and Maven packages.
        </p>
      </div>
    </Section>
  )
}
