import React from 'react'

class Hero extends React.Component {
    render() {
        return (
            <div className="hero__wrapper">
                <div className="container">
                    <h1 className="title">Albert teaches your child mathematics!</h1>
                    <p className="ingress">Enable your child to learn mathematics at desired pace in an engaging and fun way! Create an account for your child today!</p>
                    <a className="button" href="#">Free trial 14 days</a>
                </div>
                <style jsx>{`
                    .hero__wrapper {
                        padding-bottom: 10rem;
                        padding-top: 10rem;
                    }
                    .title {
                        color: #EF7B8F;
                        margin-top: 0;
                        font-size: 5.4rem;
                        font-weight: bold;
                    }
                    .ingress {
                        color: #EF7B8F;
                        font-size: 3rem;
                        font-weight: bold;
                        line-height: 4.5rem;
                        margin-bottom: 50px;
                    }
            `}</style>
            </div>
        )
    }
}

export default Hero