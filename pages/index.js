import React from 'react'
import { i18n, Link, withNamespaces } from '../i18n'

import Title from '../components/Title'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer']
    }
  }
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <Navigation />
        <Title />
        <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'sv' : 'en')}>
          {t('change-locale')}
        </button>
        <Link href='/second-page'>
          <a>{t('to-second-page')}</a>
        </Link>
      </React.Fragment>
    )
  }
}

export default withNamespaces('common')(Homepage)
