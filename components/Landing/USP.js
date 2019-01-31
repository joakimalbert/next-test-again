class USP extends React.Component {
    render() {
        return (
            <div className="usp__container">
                <div className="container">
                    <div className="usp__item usp__item--right usp__item--plus">
                        <h2 className="usp__title">Research-based content</h2>
                        <p>Content based on years of research developed by highly experienced teachers make sure your child learns the right things in the right order. All of it.</p>
                    </div>
                    <div className="usp__item usp__item--division">
                        <h2 className="usp__title">Interactive excercises</h2>
                        <p>The interactive way of solving exercises will help your child understand and learn mathematics with a high level of enthusiasm and engagement enhancing the learning experience.</p>
                    </div>
                    <div className="usp__item usp__item--right">
                        <h2 className="usp__title">Gamified experience</h2>
                        <p>Gamified learning journey with unlocking of new levels, challenges and continuous positive feedbck from now on bring great value of child's screentime.</p>
                    </div>
                </div>
                <style jsx>{`
                    .usp__container {
                        margin-top: -10rem;
                        margin-bottom: 15rem;
                    }
                    .container {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .usp__title {
                        font-size: 4.5rem;
                        font-weight: bold;
                    }
                    .usp__content {

                    }

                    .usp__item {
                        margin-top: 4rem;
                        width: calc(50% - 2rem);
                        position: relative;
                    }

                    .usp__item--right {
                        align-self: flex-end;
                    }

                    .usp__item--plus:before {
                        content: "";
                        position: absolute;
                        top: -100px;
                        z-index: -1;
                        width: 110%;
                        height: 250%;
                        transform: rotate(15deg);
                        background: url('static/assets/images/addition.svg');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                        animation: animatedAddition 5s linear infinite alternate;
                    }

                    .usp__item--division:before {
                        content: "";
                        position: absolute;
                        top: -100px;
                        z-index: -1;
                        width: 100%;
                        height: 200%;
                        background: url('static/assets/images/division.svg');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                        animation: animatedBackground 7.5s linear infinite alternate;
                    }

                    @keyframes animatedBackground {
                        from {
                            transform: translate(0px);
                        }
                        to {
                            transform: translatey(-50px) translatex(10px);
                        }
                    }

                    @keyframes animatedAddition {
                        from {
                            transform: rotate(15deg) translate(0px);
                        }
                        to {
                            transform: rotate(12deg) translatey(-20px) translatex(-10px);
                        }
                    }
            `}</style>
            </div>
        )
    }
}

export default USP