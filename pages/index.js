import React from 'react'
import { withNamespaces } from '../i18n'

import Hero from '../components/Landing/Hero';
import VideoContainer from '../components/Landing/VideoContainer';
import USP from '../components/Landing/USP';
import VideoGallery from '../components/Landing/VideoGallery';

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
            <Hero />
            <VideoContainer />
            <USP />
            <VideoGallery />
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(Homepage)
