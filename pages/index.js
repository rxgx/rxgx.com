import Head from 'next/head'
import Link from 'next/link'
import AboutPage from '../components/AboutPage'
import Card from '../components/Card'
import Footer from '../components/Footer'

function HomePage () {
  return (
    <div id='layout'>
      <Head>
        <title>
          RXGX - Web Interface Design &amp; Architecture by Ryan Gasparini
        </title>
        <link
          href='http://fonts.googleapis.com/css?family=Oswald:300,400,700|Playfair+Display:400,700,900'
          rel='stylesheet'
          type='text/css'
        />
        <link rel='stylesheet' type='text/css' href='./css/base.css' />
        <link rel='stylesheet' type='text/css' href='./css/style.css' />
      </Head>
      <header id='header'>
        <h1 className='container'>
          <span className='identity'>RXGX</span>
          <span className='title'>Web Interface Design &amp; Architecture</span>
          <em className='separator'>by</em>
          <span className='name'>Ryan Gasparini</span>
        </h1>
      </header>

      <article id='body'>
        <div className='section cards'>
          <Card>
            Anyone else feel that less and sass are not addressing any of the
            problems with #CSS?
            <a href=''>Why we don't do apps</a>
          </Card>

          <div className='card'>
            Have you heard about responsive design? Of course, we've read the
            Smashing!
            <a href=''>Need to catch up with tech?</a>
          </div>

          <div className='card'>
            You paid for a redesign but they delivered a hacked together
            Wordpress template.
            <a href=''>Are you totes screwed?</a>
          </div>

          <div className='card'>
            Not sure about mobile first. Is that a category for a Commercial
            Arts award?
            <a href=''>Tired of creative misdirection?</a>
          </div>
        </div>
      </article>

      <AboutPage />

      <Footer />
    </div>
  )
}

export default HomePage
