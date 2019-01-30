import React from 'react'

class Trial extends React.Component {
    render() {
        return (
            <div className="trial__wrapper">
                <div className="container">
                    <h2 className="title">Why not try now?</h2>
                    <p>No commitments, no lock-in periods, no up front payments.</p>
                    <p>Try 14 days for free and cancel anytime.</p>
                </div>
                <style jsx>{`
                .trial__wrapper {
                    margin-top: 13rem;
                }
                .container {
                    text-align: center;
                }
                .title {
                    font-size: 4.5rem;
                    font-weight: bold;
                    margin: 0;
                }
                p {
                    font-size: 2.6rem;
                }
            `}</style>
            </div>
        )
    }
}

export default Trial