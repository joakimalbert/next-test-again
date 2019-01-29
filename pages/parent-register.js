import React from 'react'
import { withNamespaces, Link } from '../i18n'

class ParentRegister extends React.Component {
    static async getInitialProps() {
        return {
            namespacesRequired: ['parent-register']
        }
    }

    render() {
        const { t } = this.props
        return (
            <React.Fragment>
            <h1>{t('h1')}</h1>
            <div>Ange mobilnumret till ditt barn eller till den person du vill bjuda på obegränsat med läxhjälp. Instruktioner samt kod skickas som SMS.</div>
            </React.Fragment>
        )
    }
}

export default withNamespaces('parent-register')(ParentRegister)
