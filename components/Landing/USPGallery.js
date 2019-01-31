import React from 'react'

class USPGallery extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <ul className="usp__list">
                        <li className="usp__list__item">
                            <img src="static/assets/icons/books.svg" />
                            <h4 className="list__item__title">Based on years of research</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/happy.svg" />
                            <h4 className="list__item__title">Individual learning experience</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/school.svg" />
                            <h4 className="list__item__title">Developed by<br />teachers</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/curriculum.svg" />
                            <h4 className="list__item__title">Based on curriculum in school</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/game-controller.svg" />
                            <h4 className="list__item__title">Gamified learning journey</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/montessori.svg" />
                            <h4 className="list__item__title">Montessori<br />inspired</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/cake.svg" />
                            <h4 className="list__item__title">Thousands of happy families</h4>
                        </li>
                        <li className="usp__list__item">
                            <img src="static/assets/icons/kid.svg" />
                            <h4 className="list__item__title">For ages<br />4-10</h4>
                        </li>
                    </ul>
                </div>
                <style jsx>{`
                .usp__list {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-gap: 5px;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                .usp__list__item {
                    background-color: #f7cfdb;
                    height: 240px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 2rem;
                }
                .list__item__title {
                    font-weight: bold;
                    font-size: 2.5rem;
                    line-height: 3.5rem;
                }
                @media (max-width: 992px) {
                    .usp__list {
                        grid-template-columns: 1fr 1fr;
                    }
                    .usp__list__item {
                        height: auto;
                        padding: 40px 0;
                    }
                }
            `}</style>
            </div>
        )
    }
}

export default USPGallery