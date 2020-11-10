import Head from 'next/head'
import Link from 'next/link'
import AboutPage from '../components/AboutPage'
import Card from '../components/Card'
import Figure from '../components/AboutPage/Figure'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
      <Figure />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default HomePage
