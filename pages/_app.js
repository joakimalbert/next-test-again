import React from 'react'
import App, { Container } from 'next/app'
import { appWithTranslation } from '../i18n'
import * as firebase from 'firebase/app';

// Should be env variables but adding just for test and not here
const firebaseConfig = {
  apiKey: "AIzaSyA7mRnTpAYBu4fcCUcy0dW3_-97sLmrBxI",
  authDomain: "albert-production.firebaseapp.com",
  databaseURL: "https://albert-production.firebaseio.com",
  projectId: "firebase-albert-production",
  storageBucket: "firebase-albert-production.appspot.com",
  messagingSenderId: "424097132092"
};

class MyApp extends App {

  componentDidMount() {
    firebase.initializeApp();
    firebase.auth().signInWithEmailAndPassword('0707916633', '39107')
      .then(function(user) {
        console.log(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)
