import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head';
import { appWithTranslation } from '../i18n'
import Footer from '../components/Footer';

class MyApp extends App {

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Albert - din digitala mattelärare</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="/static/styles/main.css" />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}

export default appWithTranslation(MyApp);