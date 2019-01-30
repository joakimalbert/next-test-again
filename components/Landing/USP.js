class USP extends React.Component {
    render() {
        return (
            <div className="usp__container">
                <div className="container">
                    <div>
                        <h2>Research-based content</h2>
                        <h2 className="usp__title">Research-based content</h2>
                        <p>Content based on years of research developed by highly experienced teachers make sure your child learns the right things in the right order. All of it.</p>
                    </div>
                    <div>
                        <h2>Interactive excercises</h2>
                        <h2 className="usp__title">Interactive excercises</h2>
                        <p>The interactive way of solving exercises will help your child understand and learn mathematics with a high level of enthusiasm and engagement enhancing the learning experience.</p>
                    </div>
                    <div>
                        <h2>Gamified experience</h2>
                        <h2 className="usp__title">Gamified experience</h2>
                        <p>Gamified learning journey with unlocking of new levels, challenges and continuous positive feedbck from now on bring great value of child's screentime.</p>
                    </div>
                </div>
                <style jsx>{`
                    .usp__container {
                        background-color: #F6F5F9;
                        margin-top: 100px;
                    }
                    .usp__title {
                        font-size: 4.5rem;
                        font-weight: bold;
                    }
                    .usp__content {
                        
                    }
            `}</style>
            </div>
        )
    }
}

export default USP