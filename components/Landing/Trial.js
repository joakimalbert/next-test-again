import React from 'react'

class Trial extends React.Component {
    render() {
        return (
            <div className="trial__wrapper">
                <div className="container">
                    <h2 className="title">Why not try now?</h2>
                    <p>No commitments, no lock-in periods, no up front payments.<br />Try 14 days for free and cancel anytime.</p>
                    <a className="button" href="#">Free trial 14 days</a>
                </div>
                <style jsx>{`
                .trial__wrapper {
                    margin-top: 13rem;
                }
                .container {
                    text-align: center;
                    position: relative;
                    margin-bottom: 15rem;
                }
                .container:after {
                    content: "";
                    position: absolute;
                    bottom: -12.5rem;
                    right: 0;
                    background: url('static/assets/images/fish.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    width: 17rem;
                    height: 12rem;
                }
                .title {
                    font-size: 4.5rem;
                    font-weight: bold;
                    margin: 0;
                }
                p {
                    font-size: 2.6rem;
                    line-height: 3.5rem;
                    margin-bottom: 6rem;
                }
            `}</style>
            </div>
        )
    }
}

export default Trial