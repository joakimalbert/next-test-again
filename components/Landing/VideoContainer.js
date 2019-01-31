import React from 'react'

class VideoContainer extends React.Component {
    render() {
        return (
            <div className="video__wrapper">
                <div className="container">
                    <div className="content__wrapper">
                        <h2 className="title">Learning made fun!</h2>
                        <p className="ingress">With gamified learning path, motiviating confetti rains and research based content, Albert will make mathematics learning fun and delightful for your child.</p>
                    </div>
                    <iframe width="100%" height="370" src="https://www.youtube.com/embed/ypqcU0ZKHbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <style jsx>{`
                    .video__wrapper {
                        background: url('static/assets/images/oval.png');
                        background-size: 140% 100%;
                        background-position-x: -200px;
                        padding: 40rem 0;
                    }
                    .container {
                        display: flex;
                    }
                    .content__wrapper {
                        flex: 1;
                        padding-right: 80px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    iframe {
                        flex: 1.5;
                    }
                    .title {
                        font-size: 4.5rem;
                        font-weight: bold;
                        margin: 0;
                    }
                    .ingress {
                        font-size: 2.6rem;
                        line-height: 3.5rem;
                        margin-bottom: 50px;
                    }
            `}</style>
            </div>
        )
    }
}

export default VideoContainer