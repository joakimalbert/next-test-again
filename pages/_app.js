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
        </Head>
        <style jsx global>{`

                @font-face {
                    font-family: 'Bariol';
                    src: url('/static/fonts/Bariol/Bariol.woff2') format('woff2'),
                        url('/static/fonts/Bariol/Bariol.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Bariol';
                    src: url('/static/fonts/Bariol/Bariol-Bold.woff2') format('woff2'),
                        url('/static/fonts/Bariol/Bariol-Bold.woff') format('woff');
                    font-weight: bold;
                    font-style: normal;
                }

                html {
                    font-size: 62.5%;
                }

                body { 
                    background-color: #F6F5F9;
                    font-family: Bariol, Arial, sans-serif;
                    color: #55556b;
                    margin: 0;
                    font-size: 1.6rem;
                }

                .container {
                    width: 1172px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media (max-width: 1200px) {
                    .container {
                        width: 100%;
                    }
                }

                .button {
                    background-color: #EF7B8F;
                    color: white;
                    font-size: 2.5rem;
                    font-weight: bold;
                    padding: 15px 35px;
                    text-transform: uppercase;
                    border-radius: 30px;
                    text-decoration: none;
                }
                
            `}</style>
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}

export default appWithTranslation(MyApp);