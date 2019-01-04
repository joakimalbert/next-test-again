import React from 'react';
import { withNamespaces } from '../i18n';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Should be env variables but adding just for test and not here
const firebaseConfig = {
    apiKey: "AIzaSyBmvFYEVOt22dV6-TXkIFwFxtNOPZ2nTFU",
    authDomain: "albert-sandbox.firebaseapp.com",
    databaseURL: "https://albert-sandbox.firebaseio.com",
    projectId: "firebase-albert-sandbox",
    storageBucket: "firebase-albert-sandbox.appspot.com",
    messagingSenderId: "357981576708"
};

class MyPages extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  constructor(props) {
      super(props);
      this.state = { user: null };
  };

  componentDidMount() {

    // Should initialize globally in app.js or something like that
    if (!app.apps.length) {
        app.initializeApp(firebaseConfig);
    }
    // To support email and phone number we need to validate if email first, then run the email login, otherwise use the /phone/login
    app.auth().signInWithEmailAndPassword('joakim@hejalbert.se', '332625')
      .then(res => {

        app.database().ref('/users/' + res.user.uid).once('value').then(snap =>  {
          if (snap.exists()) {
              const userdata = snap.val();
              this.setState({ user: userdata });
          }
        });

      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { t } = this.props;
    console.log(this.state);
    return (
      <React.Fragment>
        <h1>My pages</h1>
        {this.state.user &&
            <React.Fragment>
                <p>Email: {this.state.user.email}</p>
                {this.state.user.premium && 
                    <p>Har premium</p>
                }
                {!this.state.user.premium && 
                    <p>Har inte premium</p>
                }
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default withNamespaces('common')(MyPages)