import React from 'react'

class Navigation extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><img id="navbar-logo" src="https://hejalbert.se/assets/img/albert-logo2.svg" /></a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navigation
