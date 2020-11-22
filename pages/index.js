import Head from 'next/head'
import AboutPage from '../components/AboutPage'
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
        <link rel='stylesheet' type='text/css' href='./css/base.css' />
        <link rel='stylesheet' type='text/css' href='./css/style.css' />
        <meta name='viewport' content='width=device-width' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css'
        />
      </Head>
      <Header />
      <Figure />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default HomePage
